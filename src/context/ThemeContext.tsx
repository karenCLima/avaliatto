import { createContext, useState } from "react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme/theme";
import type { ReactNode } from "react";

interface ThemeContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <CssVarsProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </CssVarsProvider>
    </ThemeContext.Provider>
  );
};
