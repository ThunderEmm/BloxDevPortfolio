import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthSuccess() {
  const [, setLocation] = useLocation();
  
  // Get newsletter opt-in status from URL params
  const params = new URLSearchParams(window.location.search);
  const optedIn = params.get("newsletter") === "true";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-display font-bold text-center">
            Account Created Successfully
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Thank you for creating your account. This is the text users will see when making an account. 
            You have opted {optedIn ? "in to" : "out of"} additional email updates and deals.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Redirecting to homepage in 3 seconds...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
