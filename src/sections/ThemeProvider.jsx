import React, { useState, useEffect } from "react";
import { ThemeProviderContext } from "./ThemeContext";

export default function ThemeProvider({ children, defaultTheme = "light" }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
