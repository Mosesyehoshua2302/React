import React from "react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

export default function ContentComponent() {
  // Pull the theme value and toggler straight from context — no props involved
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Current Theme {theme}
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}
