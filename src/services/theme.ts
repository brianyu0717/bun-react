import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  isDebug: boolean;
  isLight: boolean;
}

const initialState: ThemeState = {
  isDebug: true,
  isLight: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleIsDebug: (state) => {
      state.isDebug = !state.isDebug;
    },
    toggleIsLight: (state) => {
      state.isLight = !state.isLight
    }
  },
});

export const { toggleIsDebug, toggleIsLight } = themeSlice.actions;

export default themeSlice.reducer;
