import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Trophy, Users, TrendingUp, Award } from "lucide-react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import Aurora from "@/components/ui/aurora";
import { MotionReveal } from "@/components/ui/motion-wrapper";

const achievements = [
  {
    icon: Trophy,
    title: "Top Performer",
    description: "Recognized as top data analyst in quarterly reviews",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Led cross-functional analytics projects with 5+ teams",
  },
  {
    icon: TrendingUp,
    title: "Impact Driven",
    description: "Delivered insights that increased efficiency by 30%",
  },
  {
    icon: Award,
    title: "Continuous Learner",
    description: "Completed 10+ professional certifications",
  },
];

export const Achievements = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.6,
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpiralAnimation />
      </div>
      <div className="absolute inset-0 -z-10 opacity-40">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-premium">Achievements</span>
          </h2>
        </MotionReveal>

        <MotionReveal variant="fadeUp" delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition in my data analytics journey
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury text-center">
                <div className="col-span-full flex flex-col items-center">
                  <motion.div 
                    className="flex justify-center mb-4"
                    custom={index}
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-full"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        boxShadow: '0 0 30px hsl(189 85% 55% / 0.4)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    {achievement.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    {achievement.description}
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
