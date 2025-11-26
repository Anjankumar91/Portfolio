import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  useEffect(() => {
    // Canvas is already initialized by Hero, so we just ensure it exists
    const canvas = document.getElementById("canvas");
    if (!canvas) {
      // If canvas doesn't exist (user navigated directly to this section), we don't need it here
      // since it's primarily for the hero section
    }
  }, []);

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <Card className="bg-card/95 backdrop-blur-sm border-border">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate data analyst with expertise in transforming complex datasets into 
              clear, actionable insights. With a strong foundation in business intelligence and 
              data visualization, I specialize in creating impactful Power BI dashboards and 
              analytics solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey in data analytics has equipped me with hands-on experience through various 
              job simulations and real-world projects. I'm committed to continuous learning and 
              staying updated with the latest tools and techniques in the data science ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not analyzing data, you can find me writing about data analytics on Medium, 
              contributing to open-source projects, or exploring new visualization techniques.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
