import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3 } from "lucide-react";
import Silk from "@/components/ui/silk";
import { MotionReveal, MagneticHover, TiltCard, WordReveal, FadeSection } from "@/components/ui/motion-wrapper";

const dashboards = [
  {
    title: "Executive Sales Dashboard",
    description: "Comprehensive overview of sales performance, trends, and forecasts with drill-down capabilities.",
    metrics: ["Revenue Analysis", "Customer Insights", "Regional Performance"],
    link: "#",
  },
  {
    title: "HR Analytics Dashboard",
    description: "Employee metrics, turnover analysis, and workforce planning insights for strategic HR decisions.",
    metrics: ["Headcount Tracking", "Retention Rates", "Performance Metrics"],
    link: "#",
  },
  {
    title: "Marketing Campaign Dashboard",
    description: "Multi-channel marketing performance tracker with ROI analysis and campaign effectiveness metrics.",
    metrics: ["Campaign ROI", "Engagement Rates", "Conversion Tracking"],
    link: "#",
  },
];

export const Dashboards = () => {
  return (
    <section id="dashboards" className="py-20 px-4 relative overflow-hidden">
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
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="section-content-overlay">
          <MotionReveal variant="dramatic" className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-shadow-md">
              <WordReveal text="Power BI Dashboards" className="text-gradient-premium" />
            </h2>
          </MotionReveal>

          <FadeSection delay={0.2} className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto text-shadow-sm">
              Interactive business intelligence dashboards delivering actionable insights
            </p>
          </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard, index) => (
            <TiltCard
              key={dashboard.title}
              slideDirection={index % 2 === 0 ? 'left' : 'right'}
              index={index}
              tiltAmount={8}
              perspective={1200}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-full p-6 card-hover-glow glass-luxury">
                <div className="col-span-full flex flex-col gap-4 h-full">
                  <div>
                    <motion.div 
                      className="flex items-center gap-2 mb-3"
                      whileHover={{ scale: 1.1, x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {dashboard.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {dashboard.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {dashboard.metrics.map((metric) => (
                      <motion.div 
                        key={metric} 
                        className="flex items-center gap-2 group"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {metric}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <MagneticHover className="mt-auto">
                    <Button asChild className="w-full btn-shine overflow-hidden" variant="outline">
                      <a 
                        href={dashboard.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Dashboard
                      </a>
                    </Button>
                  </MagneticHover>
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
