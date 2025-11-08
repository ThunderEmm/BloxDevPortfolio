import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Clock, Github } from "lucide-react";
import { SiItchdotio, SiRoblox, SiX } from "react-icons/si";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    engine: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.engine) {
      toast({
        title: "Missing Information",
        description: "Please select a game engine.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please select a project type.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.budget) {
      toast({
        title: "Missing Information",
        description: "Please select a budget range.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display font-bold text-4xl mb-4">Thanks!</h1>
            <p className="text-lg text-muted-foreground mb-2">
              I've received your message.
            </p>
            <p className="text-muted-foreground">
              You'll hear back soon. I typically respond within 24-48 hours.
            </p>
          </div>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4" data-testid="text-page-title">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's discuss your project or custom integration needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="engine">Engine</Label>
                      <Select
                        value={formData.engine}
                        onValueChange={(value) => setFormData({ ...formData, engine: value })}
                        required
                      >
                        <SelectTrigger id="engine" data-testid="select-engine">
                          <SelectValue placeholder="Select engine" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roblox">Roblox</SelectItem>
                          <SelectItem value="godot">Godot</SelectItem>
                          <SelectItem value="gamemaker">GameMaker</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                        required
                      >
                        <SelectTrigger id="projectType" data-testid="select-project-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-made">Pre-made System</SelectItem>
                          <SelectItem value="custom">Custom Integration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      required
                    >
                      <SelectTrigger id="budget" data-testid="select-budget">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100">Under $100</SelectItem>
                        <SelectItem value="100-500">$100 - $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000+">$1,000+</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and what you're looking for..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90" data-testid="button-submit">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">emmet@buildsystems.dev</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">You'll hear back soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://github.com/emmet-builds" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href="https://emmet-builds.itch.io" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" size="sm">
                      <SiItchdotio className="h-4 w-4 mr-2" />
                      Itch.io
                    </Button>
                  </a>
                  <a href="https://www.roblox.com/users/123456" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" size="sm">
                      <SiRoblox className="h-4 w-4 mr-2" />
                      Roblox
                    </Button>
                  </a>
                  <a href="https://twitter.com/emmetbuilds" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" size="sm">
                      <SiX className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Pricing Info</h3>
                <p className="text-sm text-muted-foreground">
                  Prices start from $40 — get a quote for custom work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
