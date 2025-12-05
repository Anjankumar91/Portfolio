import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Award } from "lucide-react";
import LightPillar from "@/components/ui/light-pillar";
import { MotionReveal, TiltCard, WordReveal, FadeSection } from "@/components/ui/motion-wrapper";

const certificates = [
  {
    title: "Accenture Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2024",
    description: "Completed virtual experience program in data analysis, visualization, and client presentation.",
  },
  {
    title: "KPMG Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2024",
    description: "Analyzed customer datasets and created targeted marketing strategies using data insights.",
  },
  {
    title: "PwC Power BI Job Simulation",
    issuer: "Forage",
    date: "2024",
    description: "Developed Power BI dashboards for client stakeholders with focus on KPI tracking.",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <LightPillar 
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={0.8}
          rotationSpeed={0.25}
          glowAmount={0.004}
          pillarWidth={3.5}
          pillarHeight={0.4}
          noiseIntensity={0.4}
          mixBlendMode="normal"
        />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <WordReveal text="Job Simulation Certificates" className="text-gradient-premium" />
          </h2>
        </MotionReveal>

        <FadeSection delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience through industry-recognized virtual job simulations
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <TiltCard
              key={cert.title}
              slideDirection={index % 2 === 0 ? 'left' : 'right'}
              index={index}
              tiltAmount={8}
              perspective={1000}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury">
                <div className="col-span-full">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="h-6 w-6 text-primary" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </GlowCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};