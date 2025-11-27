import { Home, User, Briefcase, FileText, Award, BarChart3, Trophy, FileUser, Mail } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const navItems = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Skills", url: "#skills", icon: Briefcase },
  { name: "Projects", url: "#projects", icon: FileText },
  { name: "Certificates", url: "#certificates", icon: Award },
  { name: "Dashboards", url: "#dashboards", icon: BarChart3 },
  { name: "Achievements", url: "#achievements", icon: Trophy },
  { name: "Resume", url: "#resume", icon: FileUser },
  { name: "Contact", url: "#contact", icon: Mail },
];

export const Navigation = () => {
  return <AnimeNavBar items={navItems} defaultActive="Home" />;
};
