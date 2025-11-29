import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      <DottedSurface />
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
        <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8">
          <div className="col-span-full flex flex-col items-center text-center space-y-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-16 w-16 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Download My Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive overview of my experience, skills, and qualifications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <FileText className="h-4 w-4 mr-2" />
                View Online
              </Button>
            </div>
            
            <div className="w-full pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Experience</h4>
                  <p className="text-sm text-muted-foreground">3+ years in data analytics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">Bachelor's in Data Science</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">10+ professional certificates</p>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
};
