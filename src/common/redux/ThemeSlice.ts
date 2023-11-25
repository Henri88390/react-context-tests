import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../models/Theme";
import { RootState } from "./store";

type ThemeState = {
  value: Theme;
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: Theme.light,
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === Theme.light ? Theme.dark : Theme.light;
    },
  },
});

export const { toggle } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
