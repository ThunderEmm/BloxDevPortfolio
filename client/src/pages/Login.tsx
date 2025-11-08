import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  useEffect(() => {
    // Redirect to Google OAuth
    window.location.href = "/auth/google";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-display font-bold text-center">
            Log In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Redirecting to Google Sign-In...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
