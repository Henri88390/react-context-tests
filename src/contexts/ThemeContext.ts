import { createContext } from "react";
import { Theme } from "../models/Theme";
type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
export const ThemeContext = createContext({} as ThemeContextProps);
