/**
 * RESUME SECTION
 * Scroll effects implemented:
 * - FADE-IN ON SCROLL: Section elements fade in
 * - VERTICAL TIMELINE: Animated timeline with scroll-triggered reveals
 * - TEXT REVEAL: Heading revealed word-by-word
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";
import Galaxy from "@/components/ui/galaxy";
import { MagneticHover } from "@/components/ui/motion-wrapper";
import { FadeIn, ScaleOnScroll } from "@/components/ui/scroll-animations";
import { HeadingReveal } from "@/components/ui/text-reveal";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RESUME_URL = "/resume.pdf";

// Timeline data for experience/education
const timelineData = [
  {
    icon: <Briefcase className="h-4 w-4 text-primary" />,
    date: "2022 - Present",
    title: "Senior Data Analyst",
    description: "Leading analytics initiatives and building dashboards for enterprise clients.",
  },
  {
    icon: <Briefcase className="h-4 w-4 text-primary" />,
    date: "2020 - 2022",
    title: "Data Analyst",
    description: "Developed automated reporting solutions and conducted statistical analysis.",
  },
  {
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
    date: "2016 - 2020",
    title: "Bachelor's in Data Science",
    description: "Graduated with honors, specialized in machine learning and statistics.",
  },
  {
    icon: <Award className="h-4 w-4 text-primary" />,
    date: "2023",
    title: "10+ Professional Certifications",
    description: "Including Google Data Analytics, Microsoft Power BI, and AWS certifications.",
  },
];

export const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* FADE-IN + TEXT REVEAL: Section heading */}
        <FadeIn className="mb-12 text-center">
          <HeadingReveal as="h2" className="text-4xl md:text-5xl font-bold">
            Resume
          </HeadingReveal>
        </FadeIn>

        {/* VERTICAL TIMELINE SCROLL ANIMATION */}
        <FadeIn delay={0.2} className="mb-12">
          <Timeline className="max-w-2xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.title}
                index={index}
                icon={item.icon}
                date={item.date}
                isLast={index === timelineData.length - 1}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </FadeIn>

        {/* SCALE ON SCROLL: Download card */}
        <ScaleOnScroll delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8 glass-luxury">
              <div className="col-span-full flex flex-col items-center text-center space-y-6">
                <motion.div 
                  className="p-4 bg-primary/10 rounded-full"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 10,
                    boxShadow: '0 0 40px hsl(189 85% 55% / 0.4)'
                  }}
                >
                  <FileText className="h-16 w-16 text-primary" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Download My Resume
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Get a comprehensive overview of my experience, skills, and qualifications
                  </motion.p>
                </div>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <MagneticHover>
                    <Button asChild className="bg-primary hover:bg-primary/90 btn-shine overflow-hidden animate-pulse-glow">
                      <a 
                        href={RESUME_URL} 
                        download="Resume.pdf"
                      >
                        <motion.span
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Resume
                        </motion.span>
                      </a>
                    </Button>
                  </MagneticHover>
                  <MagneticHover>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/10 btn-shine overflow-hidden"
                      onClick={() => setIsPreviewOpen(true)}
                    >
                      <motion.span
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Preview Resume
                      </motion.span>
                    </Button>
                  </MagneticHover>
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>
        </ScaleOnScroll>
      </div>

      {/* PDF Preview Modal */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-border">
          <DialogHeader className="p-4 pb-2 border-b border-border">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold">Resume Preview</DialogTitle>
              <div className="flex items-center gap-2">
                <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <a href={RESUME_URL} download="Resume.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </DialogHeader>
          <div className="flex-1 w-full h-full min-h-0 p-4 pt-2">
            <iframe
              src={`${RESUME_URL}#toolbar=0&navpanes=0`}
              className="w-full h-full rounded-lg border border-border bg-muted"
              title="Resume Preview"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
