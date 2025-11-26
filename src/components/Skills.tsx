import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
