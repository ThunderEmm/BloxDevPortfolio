import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display font-bold text-4xl mb-8">Privacy Policy</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6 prose max-w-none">
            <p className="text-muted-foreground">
              Your privacy is important. This privacy policy outlines how we collect and use information. 
              Please customize this section with your specific privacy practices and consult with a legal 
              professional.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide when contacting us or subscribing to our newsletter, 
                including name and email address. We also collect basic analytics data about site usage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">How We Use Information</h2>
              <p className="text-muted-foreground">
                We use your information to respond to inquiries, send product updates, and improve our 
                services. We do not sell or share your personal information with third parties.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Data Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
