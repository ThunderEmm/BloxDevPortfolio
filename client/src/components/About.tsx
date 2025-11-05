import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Award, Heart } from "lucide-react";
import avatarImg from "@assets/generated_images/Developer_profile_avatar_06728fe3.png";

const milestones = [
  {
    year: "2019",
    title: "Started Development",
    description: "Began creating Roblox games as a hobby"
  },
  {
    year: "2020",
    title: "First Commission",
    description: "Completed first paid project for a game studio"
  },
  {
    year: "2022",
    title: "100K Players",
    description: "Games reached over 100,000 total players"
  },
  {
    year: "2024",
    title: "Professional Studio",
    description: "Established full-time development practice"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer dedicated to creating unforgettable gaming experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <Avatar className="h-64 w-64 border-4 border-primary/20">
              <AvatarImage src={avatarImg} alt="Developer" data-testid="img-avatar" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed" data-testid="text-about-bio">
              I'm a passionate Roblox developer with over 5 years of experience creating engaging games and systems. 
              What started as a hobby has evolved into a professional career helping studios and creators bring their 
              visions to life.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in creating polished, performant experiences that players love. Whether it's complex 
              gameplay mechanics, stunning builds, or intuitive UI systems, I bring technical expertise and creative 
              problem-solving to every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <Card data-testid="card-philosophy-1">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Quality First</div>
                  <div className="text-sm text-muted-foreground">Polished results</div>
                </CardContent>
              </Card>
              <Card data-testid="card-philosophy-2">
                <CardContent className="p-4 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Player-Focused</div>
                  <div className="text-sm text-muted-foreground">Engaging experiences</div>
                </CardContent>
              </Card>
              <Card data-testid="card-philosophy-3">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">On Schedule</div>
                  <div className="text-sm text-muted-foreground">Reliable delivery</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center">
            Development Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-milestone-${index}`}
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-milestone-year-${index}`}>
                    {milestone.year}
                  </div>
                  <h4 className="font-semibold text-lg mb-2" data-testid={`text-milestone-title-${index}`}>
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-milestone-description-${index}`}>
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
