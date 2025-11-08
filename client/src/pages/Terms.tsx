import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display font-bold text-4xl mb-8">Terms of Service</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6 prose max-w-none">
            <p className="text-muted-foreground">
              By purchasing and using systems from Emmet Builds Systems, you agree to the following terms. 
              These are standard terms for digital products. Please customize this section with your specific 
              legal requirements and consult with a legal professional.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">License</h2>
              <p className="text-muted-foreground">
                Purchased systems come with a commercial license. You may use the systems in unlimited commercial 
                and personal projects. You may not resell or redistribute the source code as a standalone product.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Support</h2>
              <p className="text-muted-foreground">
                Email support is provided for integration questions. Support does not include custom feature 
                development or extensive modifications to the systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Refunds</h2>
              <p className="text-muted-foreground">
                Due to the digital nature of these products, all sales are final. Please review demos and 
                documentation before purchasing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
