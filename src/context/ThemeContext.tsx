import { createContext, useState, useMemo } from "react";
import type  {ReactNode}  from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/theme";

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

  // memo evita recriar o tema o tempo inteiro
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* INJETAR VARIÁVEIS CSS DO TEMA */}
        <style>
          {`
            :root {
              --mui-primary: ${theme.palette.primary.main};
              --mui-secondary: ${theme.palette.secondary.main};
              --mui-bg-default: ${theme.palette.background.default};
              --mui-bg-paper: ${theme.palette.background.paper};
              --mui-text-primary: ${theme.palette.text.primary};
              --mui-text-secondary: ${theme.palette.text.secondary};
              --mui-destaque-main: ${theme.palette.destaque.main};
              --mui-sombra-main: ${theme.palette.sombra.main};
            }
          `}
        </style>

        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
