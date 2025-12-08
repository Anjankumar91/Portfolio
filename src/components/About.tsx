import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import Silk from "@/components/ui/silk";
import { MotionReveal, WordReveal, LineReveal, FadeSection } from "@/components/ui/motion-wrapper";

export const About = () => {
  const paragraphs = [
    "I'm a passionate data analyst with expertise in transforming complex datasets into clear, actionable insights. With a strong foundation in business intelligence and data visualization, I specialize in creating impactful Power BI dashboards and analytics solutions.",
    "My journey in data analytics has equipped me with hands-on experience through various job simulations and real-world projects. I'm committed to continuous learning and staying updated with the latest tools and techniques in the data science ecosystem.",
    "When I'm not analyzing data, you can find me writing about data analytics on Medium, contributing to open-source projects, or exploring new visualization techniques."
  ];

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <MotionReveal variant="dramatic" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <WordReveal text="About Me" className="text-gradient-premium" />
          </h2>
        </MotionReveal>

        <FadeSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8 glass-luxury">
              <div className="col-span-full">
                <LineReveal 
                  lines={paragraphs}
                  lineClassName="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
                  staggerDelay={0.2}
                />
              </div>
            </GlowCard>
          </motion.div>
        </FadeSection>
      </div>
    </section>
  );
};
