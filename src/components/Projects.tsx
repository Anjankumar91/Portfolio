/**
 * PROJECTS SECTION
 * Scroll effects implemented:
 * - FADE-IN ON SCROLL: Section title and description fade in
 * - SLIDE-IN LEFT/RIGHT: Project cards alternate slide directions
 * - 3D TILT ON SCROLL: Cards tilt based on scroll position
 * - TEXT REVEAL: Heading revealed word-by-word
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Galaxy from "@/components/ui/galaxy";
import { MagneticHover } from "@/components/ui/motion-wrapper";
import { FadeIn, SlideIn, TiltCard } from "@/components/ui/scroll-animations";
import { HeadingReveal } from "@/components/ui/text-reveal";
import { useRef } from "react";

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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* FADE-IN + TEXT REVEAL: Section heading */}
        <FadeIn className="text-center mb-4">
          <HeadingReveal as="h2" className="text-4xl md:text-5xl font-bold">
            Projects
          </HeadingReveal>
        </FadeIn>

        {/* FADE-IN: Section description */}
        <FadeIn delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data analytics and business intelligence projects
          </p>
        </FadeIn>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            /* SLIDE-IN: Alternating left/right slide animations */
            <SlideIn
              key={project.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.15}
            >
              {/* 3D TILT ON SCROLL: Card tilts based on viewport position */}
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="h-full"
                >
                  <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-full p-6 card-hover-glow glass-luxury">
                    <div className="col-span-full flex flex-col gap-4 h-full">
                      <div>
                        <motion.h3 
                          className="text-xl font-semibold mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span 
                            key={tag} 
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.4 + tagIndex * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <MagneticHover className="flex-1">
                          <Button asChild size="sm" variant="outline" className="w-full btn-shine overflow-hidden">
                            <motion.a 
                              href={project.demoLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </motion.a>
                          </Button>
                        </MagneticHover>
                        <MagneticHover>
                          <Button asChild size="sm" variant="outline" className="btn-shine overflow-hidden">
                            <motion.a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="h-4 w-4" />
                            </motion.a>
                          </Button>
                        </MagneticHover>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};
