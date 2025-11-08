import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, FileCode, Star } from "lucide-react";
import { SiGodotengine, SiGamejolt } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import robloxStudioIcon from "@assets/rblxstdicon-removebg-preview_1762631573862.png";
import gameMakerIcon from "@assets/image_1762630380814.png";
import inventoryImg from "@assets/generated_images/Roblox_inventory_system_34268ad7.png";
import questImg from "@assets/generated_images/Godot_quest_system_474d9190.png";
import dialogueImg from "@assets/generated_images/Game_Maker_dialogue_system_7a170db5.png";

const featuredSystems = [
  {
    id: "inventory-system-roblox",
    title: "Inventory System",
    description: "Modular inventory with drag-drop, stacking, and categories",
    engine: "Roblox",
    price: 49,
    image: inventoryImg,
  },
  {
    id: "quest-system-godot",
    title: "Quest System",
    description: "Complete quest framework with objectives and rewards",
    engine: "Godot",
    price: 59,
    image: questImg,
  },
  {
    id: "dialogue-system-gamemaker",
    title: "Dialogue System",
    description: "Branching dialogue with character portraits and choices",
    engine: "Game Maker",
    price: 45,
    image: dialogueImg,
  },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Indie Developer",
    content: "Saved me weeks of development time. The inventory system dropped right into my Roblox game.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "Solo Game Dev",
    content: "Clean, well-documented code. The quest system was exactly what I needed for my Godot RPG.",
    rating: 5,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      toast({
        title: "Welcome!",
        description: "You're on the list. Expect early access to new systems.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6" data-testid="text-hero-title">
            Modular systems for indie devs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto" data-testid="text-hero-tagline">
            Plug-in code so you can finish your game.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I build clean, documented, engine-specific systems for Roblox, Godot and GameMaker — so you can focus on gameplay, not plumbing.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link href="/systems">
              <Button size="lg" className="bg-accent hover:bg-accent/90" data-testid="button-browse-systems">
                Browse Systems
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" data-testid="button-see-demo">
                See Demo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/systems?engine=roblox">
              <Card className="hover-elevate active-elevate-2 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img src={robloxStudioIcon} alt="Roblox Studio" className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Built for Roblox</h3>
                  <p className="text-sm text-muted-foreground">Luau-ready.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/systems?engine=godot">
              <Card className="hover-elevate active-elevate-2 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <SiGodotengine className="h-12 w-12 mx-auto mb-4" style={{ color: '#478cbf' }} />
                  <h3 className="font-semibold mb-2">Built for Godot</h3>
                  <p className="text-sm text-muted-foreground">GDScript-ready.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/systems?engine=gamemaker">
              <Card className="hover-elevate active-elevate-2 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img src={gameMakerIcon} alt="GameMaker Studio" className="h-12 w-12 mx-auto mb-4" style={{ mixBlendMode: 'multiply' }} />
                  <h3 className="font-semibold mb-2">Built for GameMaker</h3>
                  <p className="text-sm text-muted-foreground">GML-ready.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Featured Systems</h2>
            <p className="text-lg text-muted-foreground">Production-ready, modular code</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSystems.map((system) => (
              <Card key={system.id} className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-system-${system.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={system.image} alt={system.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{system.engine}</Badge>
                    <span className="font-semibold text-lg">${system.price}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{system.title}</h3>
                  <p className="text-muted-foreground mb-4">{system.description}</p>
                  <Link href={`/systems/${system.id}`}>
                    <Button className="w-full" data-testid={`button-view-${system.id}`}>
                      View System
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Trusted by Indie Devs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Join 200+ devs</h2>
          <p className="text-muted-foreground mb-8">Get early access to new systems & templates</p>
          
          <form onSubmit={handleEmailCapture} className="flex gap-3">
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-email-capture"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90" data-testid="button-email-submit">
              Join
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
