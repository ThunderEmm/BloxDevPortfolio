import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Gamepad2, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Roblox_Studio_hero_background_e7b82471.png";

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6" data-testid="text-hero-title">
          Professional Game Developer
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Bringing your game ideas to life across Roblox, Godot, and Game Maker with expert programming and immersive design
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={handleContactClick}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
            data-testid="button-hero-contact"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handlePortfolioClick}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
            data-testid="button-hero-portfolio"
          >
            View Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6" data-testid="stat-projects">
            <div className="flex items-center justify-center mb-3">
              <Gamepad2 className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6" data-testid="stat-experience">
            <div className="flex items-center justify-center mb-3">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6" data-testid="stat-clients">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">100K+</div>
            <div className="text-white/80">Players Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
}
