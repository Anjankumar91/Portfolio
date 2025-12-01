import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3 } from "lucide-react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import Aurora from "@/components/ui/aurora";
import { MotionReveal, MagneticHover } from "@/components/ui/motion-wrapper";

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
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const metricVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="dashboards" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpiralAnimation />
      </div>
      <div className="absolute inset-0 -z-10 opacity-40">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-premium">Power BI Dashboards</span>
          </h2>
        </MotionReveal>

        <MotionReveal variant="fadeUp" delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive business intelligence dashboards delivering actionable insights
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
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
                    <motion.h3 
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {dashboard.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm">
                      {dashboard.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <motion.div 
                        key={metric} 
                        className="flex items-center gap-2 group"
                        custom={metricIndex}
                        variants={metricVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
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
                      <motion.a 
                        href={dashboard.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Dashboard
                      </motion.a>
                    </Button>
                  </MagneticHover>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
