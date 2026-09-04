import ThemeContext from "./ThemeContext";
import React from "react";
import { useState } from "react";

// Wrapper that owns the theme state and hands it (plus a toggler) to the whole
// subtree via context. `children` is whatever you nest inside <ThemeProvider>.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Flip between the two themes; function form reads the latest value safely
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Expose both the value and the updater so consumers can read AND change it
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
