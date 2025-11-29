import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

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
        <SpiralAnimation />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <GlowCard key={category.title} customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 hover:border-primary/50 transition-colors">
              <div className="col-span-full">
                <h3 className="text-xl text-primary font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
