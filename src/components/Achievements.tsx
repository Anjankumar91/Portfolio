import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Trophy, Users, TrendingUp, Award } from "lucide-react";
import Silk from "@/components/ui/silk";
import { MotionReveal, TiltCard, WordReveal, FadeSection } from "@/components/ui/motion-wrapper";

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
  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#60A5FA"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="section-content-overlay">
          <MotionReveal variant="dramatic" className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-shadow-md">
              <WordReveal text="Achievements" className="text-gradient-premium" />
            </h2>
          </MotionReveal>

          <FadeSection delay={0.2} className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto text-shadow-sm">
              Milestones and recognition in my data analytics journey
            </p>
          </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <TiltCard
              key={achievement.title}
              slideDirection={index % 2 === 0 ? 'left' : 'right'}
              index={index}
              tiltAmount={10}
              perspective={1000}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury text-center">
                <div className="col-span-full flex flex-col items-center">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 10,
                      boxShadow: '0 0 30px hsl(189 85% 55% / 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </GlowCard>
            </TiltCard>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
