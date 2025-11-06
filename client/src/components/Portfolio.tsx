import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import adventureImg from "@assets/generated_images/Adventure_game_portfolio_project_6db15243.png";
import uiImg from "@assets/generated_images/UI_design_portfolio_project_8d5d25d4.png";
import scifiImg from "@assets/generated_images/Sci-fi_build_portfolio_project_ced5306a.png";
import racingImg from "@assets/generated_images/Racing_game_portfolio_project_8347e7d4.png";
import rpgImg from "@assets/generated_images/RPG_game_portfolio_project_6e39d4ef.png";
import simulatorImg from "@assets/generated_images/Simulator_game_portfolio_project_802bbeda.png";
import godotPlatformerImg from "@assets/generated_images/Godot_platformer_project_c4d80ecf.png";
import godotFpsImg from "@assets/generated_images/Godot_FPS_project_3da8cf69.png";
import gmDungeonImg from "@assets/generated_images/Game_Maker_dungeon_crawler_28fa31ad.png";
import gmPuzzleImg from "@assets/generated_images/Game_Maker_puzzle_game_802cbeba.png";

const projects = [
  {
    id: 1,
    title: "Tropical Adventure",
    description: "An immersive island exploration game with custom terrain, interactive NPCs, and quest system",
    image: adventureImg,
    tags: ["Roblox", "Lua", "Building"],
    category: "roblox",
    engine: "Roblox"
  },
  {
    id: 2,
    title: "Advanced UI System",
    description: "Modern game interface with inventory, health systems, and responsive design",
    image: uiImg,
    tags: ["Roblox", "Lua", "UI/UX"],
    category: "roblox",
    engine: "Roblox"
  },
  {
    id: 3,
    title: "Sci-Fi Space Station",
    description: "Futuristic environment with working doors, lighting systems, and atmospheric effects",
    image: scifiImg,
    tags: ["Roblox", "Lua", "Building"],
    category: "roblox",
    engine: "Roblox"
  },
  {
    id: 4,
    title: "Pixel Platformer",
    description: "Retro-style 2D platformer with tight controls, collectibles, and challenging level design",
    image: godotPlatformerImg,
    tags: ["Godot", "GDScript", "2D"],
    category: "godot",
    engine: "Godot"
  },
  {
    id: 5,
    title: "Sci-Fi FPS",
    description: "First-person shooter with advanced AI, weapon systems, and multiplayer capabilities",
    image: godotFpsImg,
    tags: ["Godot", "GDScript", "3D"],
    category: "godot",
    engine: "Godot"
  },
  {
    id: 6,
    title: "Dungeon Crawler",
    description: "Top-down roguelike with procedural generation, loot systems, and permadeath mechanics",
    image: gmDungeonImg,
    tags: ["Game Maker", "GML", "2D"],
    category: "gamemaker",
    engine: "Game Maker"
  },
  {
    id: 7,
    title: "Puzzle Master",
    description: "Minimalist puzzle game with 100+ levels, smooth animations, and satisfying mechanics",
    image: gmPuzzleImg,
    tags: ["Game Maker", "GML", "Mobile"],
    category: "gamemaker",
    engine: "Game Maker"
  },
  {
    id: 8,
    title: "Racing Championship",
    description: "High-speed racing game with custom vehicle physics and multiplayer support",
    image: racingImg,
    tags: ["Roblox", "Lua", "Physics"],
    category: "roblox",
    engine: "Roblox"
  },
  {
    id: 9,
    title: "Medieval RPG Kingdom",
    description: "Fantasy RPG with combat system, skill trees, and procedural loot generation",
    image: rpgImg,
    tags: ["Roblox", "Lua", "RPG"],
    category: "roblox",
    engine: "Roblox"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "roblox", label: "Roblox" },
  { id: "godot", label: "Godot" },
  { id: "gamemaker", label: "Game Maker" }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-portfolio-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of successful Roblox games and systems
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" data-testid={`badge-tag-${project.id}-${index}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
