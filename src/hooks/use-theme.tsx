import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  // Check if user has a theme preference in local storage, otherwise use system preference
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
