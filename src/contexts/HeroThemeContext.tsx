import { createContext, useContext, useState, ReactNode } from "react";

interface HeroThemeContextType {
  heroTheme: "light" | "dark";
  toggleHeroTheme: () => void;
}

const HeroThemeContext = createContext<HeroThemeContextType | undefined>(undefined);

export const HeroThemeProvider = ({ children }: { children: ReactNode }) => {
  const [heroTheme, setHeroTheme] = useState<"light" | "dark">("dark");

  const toggleHeroTheme = () => {
    setHeroTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <HeroThemeContext.Provider value={{ heroTheme, toggleHeroTheme }}>
      {children}
    </HeroThemeContext.Provider>
  );
};

export const useHeroTheme = () => {
  const context = useContext(HeroThemeContext);
  if (!context) {
    throw new Error("useHeroTheme must be used within HeroThemeProvider");
  }
  return context;
};
