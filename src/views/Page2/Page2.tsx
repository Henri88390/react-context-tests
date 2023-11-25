import { useAppDispatch, useAppSelector } from "../../common/hooks/hooks";
import { toggle } from "../../common/redux/ThemeSlice";

export const Page2 = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  return (
    <>
      Page 2 - {theme}
      <button onClick={() => dispatch(toggle())}>
        Toggle theme from page 2
      </button>
    </>
  );
};
