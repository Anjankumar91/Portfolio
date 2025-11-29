import { GlowCard } from "@/components/ui/spotlight-card";
import { Award } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const certificates = [
  {
    title: "Accenture Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2024",
    description: "Completed virtual experience program in data analysis, visualization, and client presentation.",
  },
  {
    title: "KPMG Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2024",
    description: "Analyzed customer datasets and created targeted marketing strategies using data insights.",
  },
  {
    title: "PwC Power BI Job Simulation",
    issuer: "Forage",
    date: "2024",
    description: "Developed Power BI dashboards for client stakeholders with focus on KPI tracking.",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <DottedSurface />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Job Simulation Certificates</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Practical experience through industry-recognized virtual job simulations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <GlowCard key={cert.title} customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 hover:border-primary/50 transition-colors">
              <div className="col-span-full">
                <div className="flex items-start justify-between mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
