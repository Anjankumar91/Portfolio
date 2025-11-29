import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue metrics across multiple regions.",
    tags: ["Power BI", "DAX", "SQL"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Python-based project using clustering algorithms to segment customers and identify high-value segments.",
    tags: ["Python", "Machine Learning", "Pandas"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Financial Reporting System",
    description: "Automated financial reporting solution with real-time KPI tracking and forecasting models.",
    tags: ["Excel", "VBA", "Power Query"],
    demoLink: "#",
    githubLink: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <DottedSurface />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of my data analytics and business intelligence projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlowCard key={project.title} customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 hover:border-primary/50 transition-all">
              <div className="col-span-full flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
