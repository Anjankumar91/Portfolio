import { GlowCard } from "@/components/ui/spotlight-card";
import { Trophy, Users, TrendingUp, Award } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const achievements = [
  {
    icon: Trophy,
    title: "Top Performer",
    description: "Recognized as top data analyst in quarterly reviews",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Led cross-functional analytics projects with 5+ teams",
  },
  {
    icon: TrendingUp,
    title: "Impact Driven",
    description: "Delivered insights that increased efficiency by 30%",
  },
  {
    icon: Award,
    title: "Continuous Learner",
    description: "Completed 10+ professional certifications",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <DottedSurface />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Achievements</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Milestones and recognition in my data analytics journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <GlowCard key={achievement.title} customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 hover:border-primary/50 transition-colors text-center">
              <div className="col-span-full flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
