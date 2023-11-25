import { useState } from "react";
import { ThemeContext } from "../../common/contexts/ThemeContext";
import { Theme } from "../../models/Theme";
import { Page } from "../../views/Page/Page";
import { Page2 } from "../../views/Page2/Page2";

export const ComponentWithProdiver = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.light ? Theme.dark : Theme.light
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Page />
      <Page2 />
    </ThemeContext.Provider>
  );
};
