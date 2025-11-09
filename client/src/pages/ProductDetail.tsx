import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import inventoryImg from "@assets/generated_images/Roblox_inventory_system_34268ad7.png";
import questImg from "@assets/generated_images/Godot_quest_system_474d9190.png";
import dialogueImg from "@assets/generated_images/Game_Maker_dialogue_system_7a170db5.png";

const productsData: Record<string, any> = {
  "inventory-system-roblox": {
    title: "Inventory System",
    engine: "Roblox",
    price: 49,
    shortDescription: "Modular inventory with drag-drop, stacking, and categories",
    fullDescription: "A complete inventory solution for Roblox games. Includes drag-and-drop functionality, item stacking, category organization, and DataStore integration for persistence. Built with clean, modular code that's easy to customize.",
    features: [
      "Drag & drop item management",
      "Automatic item stacking",
      "Category-based organization",
      "DataStore integration for saving",
      "Customizable UI components",
      "Drop and pickup systems",
    ],
    image: inventoryImg,
    requirements: "Roblox Studio 2023+, basic Luau knowledge",
    gumroadUrl: "https://gumroad.com/l/inventory-roblox",
    codeSnippet: `-- Inventory System Example
local Inventory = {}

function Inventory:AddItem(item, quantity)
    -- Check if item exists in inventory
    local existingItem = self:FindItem(item.id)
    
    if existingItem and item.stackable then
        existingItem.quantity += quantity
    else
        table.insert(self.items, {
            id = item.id,
            name = item.name,
            quantity = quantity
        })
    end
    
    self:UpdateUI()
end`,
  },
  "quest-system-godot": {
    title: "Quest System",
    engine: "Godot",
    price: 59,
    shortDescription: "Complete quest framework with objectives and rewards",
    fullDescription: "An event-driven quest system for Godot games. Define quests in JSON, track multiple objectives, and reward players automatically. Perfect for RPGs and adventure games.",
    features: [
      "JSON-based quest definitions",
      "Multi-objective tracking",
      "Automatic reward distribution",
      "Event-driven architecture",
      "Save/load quest progress",
      "UI templates included",
    ],
    image: questImg,
    requirements: "Godot 4.0+, GDScript familiarity",
    gumroadUrl: "https://gumroad.com/l/quest-godot",
    codeSnippet: `# Quest System Example
extends Node

class_name QuestManager

func start_quest(quest_id: String) -> void:
    var quest = load_quest(quest_id)
    active_quests[quest_id] = quest
    quest_started.emit(quest)
    
func update_objective(quest_id: String, obj_id: int, progress: int):
    var quest = active_quests.get(quest_id)
    if quest:
        quest.objectives[obj_id].progress = progress
        check_quest_completion(quest)`,
  },
  "dialogue-system-gamemaker": {
    title: "Dialogue System",
    engine: "Game Maker",
    price: 45,
    shortDescription: "Branching dialogue with character portraits and choices",
    fullDescription: "A flexible dialogue system with branching conversations, character portraits, and player choices. Easy-to-use editor and localization support included.",
    features: [
      "Branching conversation trees",
      "Character portrait system",
      "Player choice handling",
      "Localization support",
      "Visual dialogue editor",
      "Type-writer text effect",
    ],
    image: dialogueImg,
    requirements: "GameMaker Studio 2.3+, GML experience",
    gumroadUrl: "https://gumroad.com/l/dialogue-gm",
    codeSnippet: `/// Dialogue System Example
function dialogue_start(dialogue_id) {
    var dialogue = load_dialogue(dialogue_id);
    global.current_dialogue = dialogue;
    global.dialogue_index = 0;
    
    // Display first line
    show_dialogue_line(dialogue.lines[0]);
}

function dialogue_next() {
    global.dialogue_index++;
    if (global.dialogue_index < array_length(global.current_dialogue.lines)) {
        show_dialogue_line(global.current_dialogue.lines[global.dialogue_index]);
    } else {
        dialogue_end();
    }
}`,
  },
};

export default function ProductDetail() {
  const [, params] = useRoute("/systems/:id");
  const product = params?.id ? productsData[params.id] : null;
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/systems">
          <Button>Back to Systems</Button>
        </Link>
      </div>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(product.codeSnippet);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Code snippet copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProducts = Object.entries(productsData)
    .filter(([id]) => id !== params?.id)
    .slice(0, 2);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" data-testid="img-product" />
            </div>
          </div>

          <div>
            <Badge variant="secondary" className="mb-4">{product.engine}</Badge>
            <h1 className="font-display font-bold text-4xl mb-4" data-testid="text-product-title">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{product.shortDescription}</p>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold">${product.price}</span>
            </div>

            <div className="flex gap-4 mb-8">
              <a href={product.gumroadUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90" data-testid="button-buy">
                  Buy Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/contact" className="flex-1">
                <Button size="lg" variant="outline" className="w-full" data-testid="button-custom">
                  Request Custom
                </Button>
              </Link>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Complete source code (not published in demo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Detailed documentation PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Quick-start integration guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Free updates for 1 year</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-3xl mb-4">Description</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{product.fullDescription}</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-3xl">Code Preview</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyCode}
                  data-testid="button-copy-code"
                >
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
              <Card className="bg-slate-900 text-slate-50">
                <CardContent className="p-6">
                  <pre className="font-mono text-sm overflow-x-auto">
                    <code>{product.codeSnippet}</code>
                  </pre>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground mt-2">
                * Sample code only. Full source included with purchase.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl mb-4">FAQ</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Do I get the full source code?</h4>
                    <p className="text-muted-foreground">Yes! You receive all source files with detailed comments and documentation.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Can I use this in commercial projects?</h4>
                    <p className="text-muted-foreground">Absolutely. The license allows unlimited commercial use in your games.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Do you offer support?</h4>
                    <p className="text-muted-foreground">Yes! Email support is included for integration questions.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Requirements</h3>
                <p className="text-sm text-muted-foreground mb-6">{product.requirements}</p>
                
                <div className="space-y-3">
                  <a href={product.gumroadUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Buy for ${product.price}
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Custom Integration
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display font-bold text-3xl mb-8">Related Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProducts.map(([id, relatedProduct]) => (
                <Card key={id} className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={relatedProduct.image} alt={relatedProduct.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{relatedProduct.engine}</Badge>
                      <span className="font-semibold">${relatedProduct.price}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{relatedProduct.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{relatedProduct.shortDescription}</p>
                    <Link href={`/systems/${id}`}>
                      <Button className="w-full">View Asset</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
