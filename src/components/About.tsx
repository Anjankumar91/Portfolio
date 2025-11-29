import { GlowCard } from "@/components/ui/spotlight-card";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

export const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpiralAnimation />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8">
          <div className="col-span-full">
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
          </div>
        </GlowCard>
      </div>
    </section>
  );
};
