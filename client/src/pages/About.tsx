import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Lightbulb, Target } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="text-page-title">
            About Emmet
          </h1>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Hi, I'm <strong>Emmet</strong> — systems developer for Roblox, Godot, and GameMaker. 
                I build modular backbones so teams can ship faster.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've been scripting in Roblox since 2018, working with Godot since v3.x, and building in GameMaker 
                for over 4 years. My focus is on creating production-ready systems that developers can drop into 
                their projects and start using immediately.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a solo dev trying to ship your first game or a small team looking to speed up 
                development, I create the foundational systems so you can focus on what makes your game unique.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl mb-6 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Simplicity</h3>
                <p className="text-sm text-muted-foreground">
                  Clean, readable code that's easy to understand and modify
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold text-lg mb-2">Modularity</h3>
                <p className="text-sm text-muted-foreground">
                  Plug-and-play systems that integrate without breaking your workflow
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2">Clarity</h3>
                <p className="text-sm text-muted-foreground">
                  Thorough documentation and examples for every system
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="font-display font-bold text-2xl mb-4">Technical Expertise</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Luau / Roblox</Badge>
                <Badge>GDScript / Godot</Badge>
                <Badge>GML / GameMaker</Badge>
                <Badge>Game Architecture</Badge>
                <Badge>System Design</Badge>
                <Badge>Performance Optimization</Badge>
              </div>
              <p className="text-muted-foreground">
                Specialized in building inventory systems, quest frameworks, dialogue trees, save systems, 
                combat mechanics, and crafting systems across multiple engines.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need a custom system or want to discuss your project? I'm available for both pre-made systems 
            and bespoke development work.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90" data-testid="button-contact">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
