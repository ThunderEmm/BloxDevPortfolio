import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, ShieldAlert, CheckCircle2 } from "lucide-react";
import type { User } from "@shared/schema";

export default function SecretDevPanel() {
  // Check if user is authenticated
  const { data: user, isLoading: userLoading } = useQuery<User>({
    queryKey: ["/api/user"],
    retry: false,
  });

  // Check if authenticated user is an admin
  const { data: adminCheck, isLoading: adminLoading } = useQuery<{ isAdmin: boolean }>({
    queryKey: ["/api/check-admin"],
    enabled: !!user,
    retry: false,
  });

  const isLoading = userLoading || (user && adminLoading);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardContent className="flex items-center justify-center p-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not authenticated - show Google login
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Developer Panel</CardTitle>
            <CardDescription data-testid="text-auth-subtitle">
              Authentication required
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <ShieldAlert className="h-4 w-4" />
              <AlertDescription data-testid="text-auth-required">
                This area is restricted to authorized administrators only.
              </AlertDescription>
            </Alert>
            <a href="/auth/google">
              <Button className="w-full" size="lg" data-testid="button-google-login">
                Sign in with Google
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authenticated but not admin - show access denied
  if (!adminCheck?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-destructive">Access Denied</CardTitle>
            <CardDescription data-testid="text-denied-subtitle">
              You are not authorized to access this panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <ShieldAlert className="h-4 w-4" />
              <AlertDescription data-testid="text-access-denied">
                Your account ({user.email}) does not have administrator privileges.
              </AlertDescription>
            </Alert>
            <a href="/">
              <Button variant="outline" className="w-full" data-testid="button-return-home">
                Return to Home
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authenticated and admin - show admin panel
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                Admin Panel
              </CardTitle>
              <CardDescription className="mt-2" data-testid="text-admin-welcome">
                Welcome, {user.displayName || user.email}
              </CardDescription>
            </div>
            <a href="/">
              <Button variant="outline" size="sm" data-testid="button-back-to-site">
                Back to Site
              </Button>
            </a>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription data-testid="text-admin-success">
              You have successfully authenticated as an administrator.
            </AlertDescription>
          </Alert>
          
          <div className="p-8 border rounded-lg bg-muted/50 text-center" data-testid="text-admin-placeholder">
            <p className="text-muted-foreground">
              Admin panel features will be added here.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This is a placeholder for product management, email tools, and other admin functions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
