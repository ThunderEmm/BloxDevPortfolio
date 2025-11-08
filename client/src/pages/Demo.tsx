import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import inventoryImg from "@assets/generated_images/Roblox_inventory_system_34268ad7.png";

export default function Demo() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-page-title">
            Systems Playground
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Try out simplified previews of the systems. These are demo-only versions.
          </p>
          <Badge variant="outline" className="text-sm">
            This is a public preview. I build production-ready, customizable integrations for hire.
          </Badge>
        </div>

        <div className="space-y-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-display font-bold text-2xl mb-2">Roblox Demo Experience</h2>
                  <p className="text-muted-foreground">
                    Experience the inventory system in action
                  </p>
                </div>
                <Badge variant="secondary">Roblox</Badge>
              </div>

              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-6 overflow-hidden">
                <img src={inventoryImg} alt="Roblox Demo" className="w-full h-full object-cover" />
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.roblox.com/games/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full" data-testid="button-open-roblox">
                    Open in Roblox
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                * This demo showcases basic functionality. Full systems include extensive customization options,
                complete documentation, and production-ready code.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">Godot</Badge>
                <h3 className="font-display font-bold text-xl mb-2">Quest System Preview</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive web demo showing quest tracking and completion
                </p>
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Interactive Demo Coming Soon</span>
                </div>
                <Button variant="outline" className="w-full" disabled>
                  Try Demo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">Game Maker</Badge>
                <h3 className="font-display font-bold text-xl mb-2">Dialogue System Preview</h3>
                <p className="text-muted-foreground mb-4">
                  See dialogue branching and character interactions
                </p>
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Interactive Demo Coming Soon</span>
                </div>
                <Button variant="outline" className="w-full" disabled>
                  Try Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Looking for a Custom Integration?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                These demos show simplified versions. For bespoke, polished systems tailored to your game, let's talk.
              </p>
              <a href="/contact">
                <Button>Get a Custom Quote</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
