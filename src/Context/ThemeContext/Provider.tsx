import React, { FC, ReactNode } from "react";

import ThemeContext, { Theme } from "./Context";
import { ThemeProviderProps } from "./types";



  const ThemeProvider: FC<ThemeProviderProps> = ({
    theme,
    onChangeTheme,
    children,
    
  }) => {
    return (
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider;
  