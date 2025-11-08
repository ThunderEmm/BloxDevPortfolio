import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import inventoryImg from "@assets/generated_images/Roblox_inventory_system_34268ad7.png";
import questImg from "@assets/generated_images/Godot_quest_system_474d9190.png";
import combatImg from "@assets/generated_images/Combat_system_showcase_49b49178.png";

const caseStudies = [
  {
    id: 1,
    title: "Roblox Inventory System",
    problem: "Developers needed a flexible inventory solution that worked across different game genres without requiring extensive customization.",
    solution: "Built a modular inventory system with drag-drop, stacking, and DataStore integration. Designed with hooks for easy customization while providing sensible defaults.",
    result: "Saved developers ~40 hours of development time. System used in 15+ published games with 100K+ combined players.",
    image: inventoryImg,
    tech: ["Luau", "Roblox Studio", "DataStore"],
    metrics: { hours: "~40", projects: "15+", players: "100K+" },
  },
  {
    id: 2,
    title: "Godot Quest Framework",
    problem: "RPG developers struggled with creating scalable quest systems that could handle complex branching and state management.",
    solution: "Developed an event-driven quest framework with JSON-based quest definitions, automatic objective tracking, and save/load functionality.",
    result: "Reduced quest implementation time by 60%. Enabled non-programmers to create quests using JSON templates.",
    image: questImg,
    tech: ["GDScript", "Godot 4.0", "JSON"],
    metrics: { reduction: "60%", flexibility: "High", ease: "Non-programmer friendly" },
  },
  {
    id: 3,
    title: "GameMaker Combat System",
    problem: "Turn-based games needed a robust combat system with skills, buffs, and AI that didn't sacrifice performance.",
    solution: "Created a modular turn-based combat system with skill definitions, status effect management, and configurable AI behaviors.",
    result: "Enabled rapid prototyping of combat mechanics. Used in 3 commercial releases with positive gameplay feedback.",
    image: combatImg,
    tech: ["GML", "GameMaker Studio", "State Machines"],
    metrics: { releases: "3", performance: "Optimized", feedback: "Positive" },
  },
];

export default function Portfolio() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-page-title">
            Portfolio & Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real systems solving real problems for indie developers
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden" data-testid={`card-case-study-${study.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="aspect-video">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`p-8 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                  <h2 className="font-display font-bold text-3xl mb-4">{study.title}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Problem</h3>
                      <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Result</h3>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-lg text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
