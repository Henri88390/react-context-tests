import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Page = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      Page 1 - {theme}
      <button onClick={() => toggleTheme()}>Toggle theme from page 1</button>
    </>
  );
};
