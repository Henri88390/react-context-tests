import { useContext } from "react";
import { ThemeContext } from "../../common/contexts/ThemeContext";
import { useAppDispatch, useAppSelector } from "../../common/hooks/hooks";
import { toggle } from "../../common/redux/ThemeSlice";

export const Page = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("page 1 renders");
  const themeValue = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  return (
    <>
      Page 1 - {themeValue}
      {/* <button onClick={() => toggleTheme()}>Toggle theme from page 1</button> */}
      <button onClick={() => dispatch(toggle())}>
        Toggle theme from page 1
      </button>
    </>
  );
};
