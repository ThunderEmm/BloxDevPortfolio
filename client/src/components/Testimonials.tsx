import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Game Studio Owner",
    content: "Outstanding work! The scripting was flawless and the game mechanics exceeded our expectations. Highly recommend for any serious Roblox project.",
    rating: 5,
    initials: "AC"
  },
  {
    name: "Sarah Johnson",
    role: "Independent Creator",
    content: "Incredible attention to detail and excellent communication throughout. The UI system they built is both beautiful and functional.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Mike Rodriguez",
    role: "Development Team Lead",
    content: "Professional, skilled, and reliable. Delivered a complex building project on time with amazing optimization. Will definitely hire again!",
    rating: 5,
    initials: "MR"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-testimonials-title">
            Client Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by game creators and studios worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-primary text-primary" 
                      data-testid={`icon-star-${index}-${i}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary" data-testid={`avatar-testimonial-${index}`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
