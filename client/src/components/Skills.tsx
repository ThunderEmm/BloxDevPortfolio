import { Card, CardContent } from "@/components/ui/card";
import { Code2, Boxes, Palette, Zap, Database, Cpu } from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "Lua Scripting",
    description: "Expert in Lua programming with advanced scripting techniques",
    level: 95
  },
  {
    icon: Boxes,
    name: "3D Building",
    description: "Creating detailed and optimized game environments",
    level: 90
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Modern, intuitive interfaces for seamless player experience",
    level: 85
  },
  {
    icon: Zap,
    name: "Game Mechanics",
    description: "Designing engaging gameplay systems and features",
    level: 92
  },
  {
    icon: Database,
    name: "DataStore",
    description: "Efficient data persistence and player progression systems",
    level: 88
  },
  {
    icon: Cpu,
    name: "Optimization",
    description: "Performance optimization for smooth gameplay",
    level: 87
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Roblox development capabilities to bring your vision to reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-skill-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" data-testid={`icon-skill-${index}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg mb-1" data-testid={`text-skill-name-${index}`}>
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-skill-description-${index}`}>
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-semibold" data-testid={`text-skill-level-${index}`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                        data-testid={`progress-skill-${index}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
