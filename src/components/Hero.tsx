import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { renderCanvas } from "@/components/ui/canvas";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

export const Hero = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <canvas
        className="pointer-events-none absolute inset-0 z-0"
        id="canvas"
      ></canvas>
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="text-5xl md:text-7xl font-bold mb-6 h-20 md:h-28 flex items-center justify-center">
            <VaporizeTextCycle
              texts={["Your Name"]}
              font={{
                fontFamily: "Inter, sans-serif",
                fontSize: "70px",
                fontWeight: 700
              }}
              color="rgb(255, 255, 255)"
              spread={5}
              density={5}
              animation={{
                vaporizeDuration: 2,
                fadeInDuration: 1,
                waitDuration: 0.5
              }}
              direction="left-to-right"
              alignment="center"
              tag={Tag.H1}
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Data Analyst | Business Intelligence Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transforming data into actionable insights. Specialized in Power BI, data visualization, 
            and analytics solutions that drive business decisions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-primary">
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
