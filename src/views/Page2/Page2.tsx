import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Page2 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      Page 2 - {theme}
      <button onClick={() => toggleTheme()}>Toggle theme from page 2</button>
    </>
  );
};
