import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import Galaxy from "@/components/ui/galaxy";
import { MotionReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

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
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

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
        <MotionReveal variant="dramatic" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-gradient-premium">Skills & Expertise</span>
          </h2>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              custom={categoryIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury">
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
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        custom={skillIndex}
                        variants={badgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="secondary" className="bg-muted text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
