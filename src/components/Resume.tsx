import { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";
import Silk from "@/components/ui/silk";
import { MotionReveal, MagneticHover, WordReveal, FadeSection, TiltCard } from "@/components/ui/motion-wrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RESUME_URL = "/resume.pdf";

export const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const stats = [
    { label: "Experience", value: "3+ years in data analytics" },
    { label: "Education", value: "Bachelor's in Data Science" },
    { label: "Certifications", value: "10+ professional certificates" },
  ];

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <MotionReveal variant="dramatic" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <WordReveal text="Resume" className="text-gradient-premium" />
          </h2>
        </MotionReveal>

        <FadeSection delay={0.2}>
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
                  <h3 className="text-2xl font-semibold mb-2">
                    Download My Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive overview of my experience, skills, and qualifications
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticHover>
                    <Button asChild className="bg-primary hover:bg-primary/90 btn-shine overflow-hidden animate-pulse-glow">
                      <a href={RESUME_URL} download="Resume.pdf">
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </MagneticHover>
                  <MagneticHover>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/10 btn-shine overflow-hidden"
                      onClick={() => setIsPreviewOpen(true)}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Preview Resume
                    </Button>
                  </MagneticHover>
                </div>
                
                <div className="w-full pt-8 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {stats.map((stat, index) => (
                      <TiltCard
                        key={stat.label}
                        slideDirection={index % 2 === 0 ? 'left' : 'right'}
                        index={index}
                        tiltAmount={5}
                        perspective={800}
                        className="p-4 rounded-lg bg-muted/30"
                      >
                        <h4 className="font-semibold text-primary mb-2">{stat.label}</h4>
                        <p className="text-sm text-muted-foreground">{stat.value}</p>
                      </TiltCard>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </FadeSection>
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
