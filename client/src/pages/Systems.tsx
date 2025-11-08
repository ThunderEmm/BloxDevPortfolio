import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

import inventoryImg from "@assets/generated_images/Roblox_inventory_system_34268ad7.png";
import questImg from "@assets/generated_images/Godot_quest_system_474d9190.png";
import dialogueImg from "@assets/generated_images/Game_Maker_dialogue_system_7a170db5.png";
import saveImg from "@assets/generated_images/Save_system_UI_b34b5139.png";
import craftingImg from "@assets/generated_images/Crafting_system_UI_1d83b337.png";
import combatImg from "@assets/generated_images/Combat_system_showcase_49b49178.png";

const allProducts = [
  {
    id: "inventory-system-roblox",
    title: "Inventory System",
    engine: "roblox",
    engineDisplay: "Roblox",
    price: 49,
    shortDescription: "Modular inventory with drag-drop, stacking, and categories",
    features: ["DataStore integration", "UI components included", "Drag & drop support"],
    tags: ["modular", "documented", "production-ready"],
    image: inventoryImg,
  },
  {
    id: "quest-system-godot",
    title: "Quest System",
    engine: "godot",
    engineDisplay: "Godot",
    price: 59,
    shortDescription: "Complete quest framework with objectives and rewards",
    features: ["JSON-based quests", "Progress tracking", "Event-driven architecture"],
    tags: ["modular", "documented", "production-ready"],
    image: questImg,
  },
  {
    id: "dialogue-system-gamemaker",
    title: "Dialogue System",
    engine: "gamemaker",
    engineDisplay: "Game Maker",
    price: 45,
    shortDescription: "Branching dialogue with character portraits and choices",
    features: ["Choice branching", "Character system", "Localization ready"],
    tags: ["modular", "documented", "production-ready"],
    image: dialogueImg,
  },
  {
    id: "save-system-roblox",
    title: "Save System",
    engine: "roblox",
    engineDisplay: "Roblox",
    price: 39,
    shortDescription: "Cloud save system with profile management",
    features: ["Auto-save", "Multiple profiles", "Data versioning"],
    tags: ["modular", "documented"],
    image: saveImg,
  },
  {
    id: "crafting-system-godot",
    title: "Crafting System",
    engine: "godot",
    engineDisplay: "Godot",
    price: 54,
    shortDescription: "Recipe-based crafting with resource management",
    features: ["Recipe system", "Ingredient tracking", "UI included"],
    tags: ["modular", "production-ready"],
    image: craftingImg,
  },
  {
    id: "combat-system-gamemaker",
    title: "Combat System",
    engine: "gamemaker",
    engineDisplay: "Game Maker",
    price: 62,
    shortDescription: "Turn-based combat with skills and status effects",
    features: ["Skill system", "Status effects", "AI behaviors"],
    tags: ["documented", "production-ready"],
    image: combatImg,
  },
];

export default function Systems() {
  const [activeEngine, setActiveEngine] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const engineParam = params.get("engine");
    if (engineParam) {
      setActiveEngine(engineParam);
    }
  }, []);

  useEffect(() => {
    let filtered = allProducts;
    
    if (activeEngine !== "all") {
      filtered = filtered.filter(p => p.engine === activeEngine);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeEngine, searchQuery]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-page-title">
            Systems Marketplace
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Production-ready, modular game systems. Prices start from $40.
          </p>
          
          <Card className="bg-primary/5 border-primary/20 mb-8">
            <CardContent className="p-4">
              <p className="text-sm">
                Need a custom integration?{" "}
                <Link href="/contact" className="text-primary font-semibold hover:underline">
                  Contact me
                </Link>
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeEngine === "all" ? "default" : "outline"}
                onClick={() => setActiveEngine("all")}
                data-testid="button-filter-all"
              >
                All
              </Button>
              <Button
                variant={activeEngine === "roblox" ? "default" : "outline"}
                onClick={() => setActiveEngine("roblox")}
                data-testid="button-filter-roblox"
              >
                Roblox
              </Button>
              <Button
                variant={activeEngine === "godot" ? "default" : "outline"}
                onClick={() => setActiveEngine("godot")}
                data-testid="button-filter-godot"
              >
                Godot
              </Button>
              <Button
                variant={activeEngine === "gamemaker" ? "default" : "outline"}
                onClick={() => setActiveEngine("gamemaker")}
                data-testid="button-filter-gamemaker"
              >
                Game Maker
              </Button>
            </div>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full md:w-64"
                data-testid="input-search"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-product-${product.id}`}>
              <div className="aspect-video overflow-hidden relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Link href={`/systems/${product.id}`}>
                      <Button size="sm">View</Button>
                    </Link>
                    <Button size="sm" variant="outline" className="bg-white/90">Buy</Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{product.engineDisplay}</Badge>
                  <span className="font-semibold text-lg">${product.price}</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.shortDescription}</p>
                <ul className="text-sm space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground">• {feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <Link href={`/systems/${product.id}`}>
                  <Button className="w-full" data-testid={`button-view-${product.id}`}>
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No systems found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
