/**
 * SKILLS SECTION
 * Scroll effects implemented:
 * - FADE-IN ON SCROLL: Section elements fade in
 * - SLIDE-IN: Skill cards slide in from alternating directions
 * - TEXT REVEAL: Heading revealed word-by-word
 * - STAGGER ANIMATIONS: Badges animate in sequence
 */

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import Galaxy from "@/components/ui/galaxy";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import { HeadingReveal } from "@/components/ui/text-reveal";

const skillCategories = [
  {
    title: "Data Analysis",
    skills: ["Python", "SQL", "Excel", "R", "Statistical Analysis"],
  },
  {
    title: "Business Intelligence",
    skills: ["Power BI", "Tableau", "DAX", "Power Query", "Data Modeling"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL", "Data Warehousing", "Azure", "Database Design"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Jupyter", "VS Code", "Microsoft Office Suite"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* FADE-IN + TEXT REVEAL: Section heading */}
        <FadeIn className="mb-12 text-center">
          <HeadingReveal as="h2" className="text-4xl md:text-5xl font-bold">
            Skills & Expertise
          </HeadingReveal>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            /* SLIDE-IN: Cards slide from alternating left/right */
            <SlideIn
              key={category.title}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
              delay={categoryIndex * 0.1}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="h-full"
              >
                <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-full p-6 card-hover-glow glass-luxury">
                  <div className="col-span-full">
                    <motion.h3 
                      className="text-xl text-primary font-semibold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.15 + 0.2, duration: 0.5 }}
                    >
                      {category.title}
                    </motion.h3>
                    {/* STAGGER ANIMATIONS: Badges animate in sequence */}
                    <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.05}>
                      {category.skills.map((skill) => (
                        <StaggerItem key={skill}>
                          <motion.div
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="secondary" className="bg-muted text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default">
                              {skill}
                            </Badge>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </GlowCard>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};
