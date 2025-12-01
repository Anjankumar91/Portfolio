import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import Aurora from "@/components/ui/aurora";
import { MotionReveal, MagneticHover } from "@/components/ui/motion-wrapper";

export const Resume = () => {
  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const stats = [
    { label: "Experience", value: "3+ years in data analytics" },
    { label: "Education", value: "Bachelor's in Data Science" },
    { label: "Certifications", value: "10+ professional certificates" },
  ];

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpiralAnimation />
      </div>
      <div className="absolute inset-0 -z-10 opacity-40">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <MotionReveal variant="dramatic" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-gradient-premium">Resume</span>
          </h2>
        </MotionReveal>

        <MotionReveal variant="fadeScale" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8 glass-luxury">
              <div className="col-span-full flex flex-col items-center text-center space-y-6">
                <motion.div 
                  className="p-4 bg-primary/10 rounded-full"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 10,
                    boxShadow: '0 0 40px hsl(189 85% 55% / 0.4)'
                  }}
                >
                  <FileText className="h-16 w-16 text-primary" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Download My Resume
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Get a comprehensive overview of my experience, skills, and qualifications
                  </motion.p>
                </div>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <MagneticHover>
                    <Button className="bg-primary hover:bg-primary/90 btn-shine overflow-hidden animate-pulse-glow">
                      <motion.span
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </motion.span>
                    </Button>
                  </MagneticHover>
                  <MagneticHover>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 btn-shine overflow-hidden">
                      <motion.span
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Online
                      </motion.span>
                    </Button>
                  </MagneticHover>
                </motion.div>
                
                <motion.div 
                  className="w-full pt-8 border-t border-border"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        custom={index}
                        variants={statVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-semibold text-primary mb-2">{stat.label}</h4>
                        <p className="text-sm text-muted-foreground">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
};
