import { ReactNode } from "react";
import  { Theme } from "./Context";




export type ThemeProviderProps = {
    theme: Theme;
    onChangeTheme: () => void;
    children: ReactNode;
  };