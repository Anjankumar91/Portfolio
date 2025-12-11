import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import Silk from "@/components/ui/silk";
import { MotionReveal, TiltCard, WordReveal, FadeSection } from "@/components/ui/motion-wrapper";

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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="section-content-overlay">
          <MotionReveal variant="dramatic" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-shadow-md">
            <WordReveal text="Skills & Expertise" className="text-slate-100" />
          </h2>
          </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard
              key={category.title}
              slideDirection={categoryIndex % 2 === 0 ? 'left' : 'right'}
              index={categoryIndex}
              tiltAmount={6}
              perspective={1000}
            >
              <GlowCard customSize className="bg-card/95 w-full h-auto p-6 card-hover-glow glass-luxury">
                <div className="col-span-full">
                  <h3 className="text-xl text-primary font-semibold mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
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
            </TiltCard>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
