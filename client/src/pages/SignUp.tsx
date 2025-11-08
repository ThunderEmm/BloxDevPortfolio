import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function SignUp() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [currentError, setCurrentError] = useState<{ field: string; message: string } | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    // Validate in order from top to bottom - show only first error
    if (password !== confirmPassword) {
      setCurrentError({ field: "password", message: "Passwords do not match." });
      return;
    }

    if (!termsAccepted) {
      setCurrentError({ field: "terms", message: "You must agree to the Terms of Service." });
      return;
    }

    if (!privacyAccepted) {
      setCurrentError({ field: "privacy", message: "You must agree to the Privacy Policy." });
      return;
    }

    // Clear errors and redirect to success page
    setCurrentError(null);
    setHasSubmitted(false);
    setLocation(`/authsuccess?newsletter=${newsletterAccepted}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-display font-bold">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
          <p className="text-sm text-destructive pt-2">* Indicates Required.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  data-testid="input-first-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">
                  {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  data-testid="input-last-name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                required
                data-testid="input-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="input-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="button-toggle-password"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  data-testid="input-confirm-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  data-testid="button-toggle-confirm-password"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {currentError?.field === "password" && (
                <p className="text-sm text-destructive" data-testid="error-password">
                  {currentError.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
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
                    {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                    I have read and agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline" data-testid="link-terms">
                      Terms of Service.
                    </Link>
                  </label>
                </div>
                {currentError?.field === "terms" && (
                  <p className="text-sm text-destructive ml-6" data-testid="error-terms">
                    {currentError.message}
                  </p>
                )}
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
                    {hasSubmitted && currentError && <span className="text-destructive">* </span>}
                    I have read and agree to the{" "}
                    <Link href="/privacy" className="text-primary hover:underline" data-testid="link-privacy">
                      Privacy Policy.
                    </Link>
                  </label>
                </div>
                {currentError?.field === "privacy" && (
                  <p className="text-sm text-destructive ml-6" data-testid="error-privacy">
                    {currentError.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <Checkbox 
                  id="newsletter" 
                  checked={newsletterAccepted}
                  onCheckedChange={(checked: boolean) => setNewsletterAccepted(checked === true)}
                  data-testid="checkbox-newsletter" 
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I would like to sign up to receive additional email updates and deals.
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full" data-testid="button-signup-submit">
              Create Account
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline" data-testid="link-login">
                Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
