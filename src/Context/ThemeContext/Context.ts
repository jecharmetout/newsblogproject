import { createContext, useContext } from "react";

export enum Theme {
  Light = "Light",
  Dark = "Dark"
}

const DEFAULT_VALUE = {
  theme: Theme.Light,
  onChangeTheme: () => {}
};

const ThemeContext = createContext(DEFAULT_VALUE);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;

