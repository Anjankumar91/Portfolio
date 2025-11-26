import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    description: "Let's connect professionally",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com",
    description: "Send me a message",
  },
  {
    icon: FileText,
    label: "Medium",
    href: "https://medium.com/@yourusername",
    description: "Read my blog posts",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or just having a chat about data
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactLinks.map((link) => (
            <Card key={link.label} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <a 
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <Send className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in collaborating or have a question?
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="mailto:your.email@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Send an Email
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
