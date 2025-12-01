import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Award } from "lucide-react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import Aurora from "@/components/ui/aurora";
import { MotionReveal } from "@/components/ui/motion-wrapper";

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
  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateY: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2 + 0.3,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="certificates" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpiralAnimation />
      </div>
      <div className="absolute inset-0 -z-10 opacity-40">
        <Aurora colorStops={["#7CFF67", "#FF8C00", "#1E3A8A"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-premium">Job Simulation Certificates</span>
          </h2>
        </MotionReveal>

        <MotionReveal variant="fadeUp" delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience through industry-recognized virtual job simulations
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ perspective: 1000 }}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury">
                <div className="col-span-full">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      custom={index}
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="h-6 w-6 text-primary" />
                    </motion.div>
                    <motion.span 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {cert.date}
                    </motion.span>
                  </div>
                  <motion.h3 
                    className="text-lg font-semibold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.p 
                    className="text-primary font-medium mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {cert.issuer}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {cert.description}
                  </motion.p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
