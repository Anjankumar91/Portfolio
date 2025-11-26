import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3 } from "lucide-react";

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
    <section id="dashboards" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">Power BI Dashboards</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Interactive business intelligence dashboards delivering actionable insights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard) => (
            <GlowCard key={dashboard.title} customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 hover:border-primary/50 transition-all">
              <div className="col-span-full flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dashboard.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {dashboard.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {dashboard.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full mt-auto" variant="outline">
                  <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Dashboard
                  </a>
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
