import { createContext } from "react";

// No default value, so consumers get `undefined` until a Provider supplies one
const ThemeContext = createContext();

export default ThemeContext;
