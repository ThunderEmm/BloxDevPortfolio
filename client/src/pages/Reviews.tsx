import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Indie Developer",
    rating: 5,
    content: "Saved me weeks of development time. The inventory system dropped right into my Roblox game with minimal tweaking. Documentation was clear and support was excellent.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Solo Game Dev",
    rating: 5,
    content: "Clean, well-documented code. The quest system was exactly what I needed for my Godot RPG. Being able to define quests in JSON made iteration so much faster.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Game Studio Lead",
    rating: 5,
    content: "Professional quality systems at reasonable prices. We've purchased three different systems and they all integrated smoothly. Emmet knows his craft.",
    date: "1 month ago",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Hobby Developer",
    rating: 5,
    content: "As someone new to GameMaker, the dialogue system came with examples that taught me best practices. Worth every penny for the learning value alone.",
    date: "2 months ago",
  },
];

export default function Reviews() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-page-title">
            Customer Reviews
          </h1>
          <p className="text-lg text-muted-foreground">
            What developers are saying about the systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} data-testid={`card-review-${review.id}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed">"{review.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="font-display font-bold text-2xl mb-4">Leave a Review</h2>
            <p className="text-muted-foreground mb-6">
              Purchased a system? Share your experience to help other developers.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Write a Review
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
