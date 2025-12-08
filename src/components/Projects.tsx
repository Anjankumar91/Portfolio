import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Silk from "@/components/ui/silk";
import { MotionReveal, MagneticHover, TiltCard, WordReveal, FadeSection } from "@/components/ui/motion-wrapper";
import { motion } from "framer-motion";

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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="section-content-overlay">
          <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-shadow-md">
            <WordReveal text="Projects" className="text-slate-100" />
          </h2>
          </MotionReveal>

          <FadeSection delay={0.2} className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto text-shadow-sm">
              A showcase of my data analytics and business intelligence projects
            </p>
          </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard
              key={project.title}
              slideDirection={index % 2 === 0 ? 'left' : 'right'}
              index={index}
              tiltAmount={8}
              perspective={1200}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-full p-6 card-hover-glow glass-luxury">
                <div className="col-span-full flex flex-col gap-4 h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <MagneticHover className="flex-1">
                      <Button asChild size="sm" variant="outline" className="w-full btn-shine overflow-hidden">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </MagneticHover>
                    <MagneticHover>
                      <Button asChild size="sm" variant="outline" className="btn-shine overflow-hidden">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </MagneticHover>
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
