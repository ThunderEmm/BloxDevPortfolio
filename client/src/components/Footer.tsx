import { SiRoblox, SiDiscord, SiGithub, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4" data-testid="text-footer-brand">
              Game Developer
            </h3>
            <p className="text-muted-foreground text-sm">
              Professional game development services for Roblox, Godot, and Game Maker. Creating immersive experiences across multiple platforms.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#portfolio" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-portfolio"
              >
                Portfolio
              </a>
              <a 
                href="#about" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-about"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => console.log("Roblox profile clicked")}
                data-testid="button-social-roblox"
              >
                <SiRoblox className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => console.log("Discord clicked")}
                data-testid="button-social-discord"
              >
                <SiDiscord className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => console.log("GitHub clicked")}
                data-testid="button-social-github"
              >
                <SiGithub className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => console.log("Twitter clicked")}
                data-testid="button-social-twitter"
              >
                <SiX className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Game Developer Portfolio. Built with passion for cross-platform game development.
          </p>
        </div>
      </div>
    </footer>
  );
}
