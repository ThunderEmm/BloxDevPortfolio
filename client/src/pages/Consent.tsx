import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";

export default function Consent() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch CSRF token
  const { data: csrfData } = useQuery<{ csrfToken: string }>({
    queryKey: ["/api/csrf-token"],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted || !privacyAccepted) {
      setError("You must agree to both the Terms of Service and Privacy Policy to continue.");
      return;
    }

    if (!csrfData?.csrfToken) {
      setError("Security token not available. Please refresh the page.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Submit consent to backend with CSRF token
      const response = await fetch("/auth/consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfData.csrfToken,
        },
        body: JSON.stringify({ termsAccepted, privacyAccepted }),
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        setError("Failed to save consent. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-display font-bold">Almost there!</CardTitle>
          <CardDescription>
            Please review and accept our terms to complete your account setup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={(checked: boolean) => setTermsAccepted(checked === true)}
                    data-testid="checkbox-terms" 
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read and agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline" data-testid="link-terms">
                      Terms of Service.
                    </Link>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="privacy" 
                    checked={privacyAccepted}
                    onCheckedChange={(checked: boolean) => setPrivacyAccepted(checked === true)}
                    data-testid="checkbox-privacy" 
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read and agree to the{" "}
                    <Link href="/privacy" className="text-primary hover:underline" data-testid="link-privacy">
                      Privacy Policy.
                    </Link>
                  </label>
                </div>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive text-center" data-testid="error-consent">
                {error}
              </p>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting || !csrfData?.csrfToken}
              data-testid="button-consent-submit"
            >
              {isSubmitting ? "Processing..." : "Accept & Continue"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
