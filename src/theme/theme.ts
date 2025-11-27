import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0", // verde esmeralda
    },
    error: {
      main: "#EF4444",
    },
    success: {
      main: "#22C55E",
    },
    background: {
      default: "#F5F7FA", 
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#dce0e6ff",
    },
    destaque:{
        main: "#f07e13",
    },
    sombra: {
      main: "#D1D5DB",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ce93d8",
    },
    error: {
      main: "#F87171",
    },
    success: {
      main: "#4ADE80",
    },
    background: {
      default: "#121212",
      paper: "#1E293B",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#CBD5E1",
    },
    destaque: {
      main: "#FB923C", // laranja mais claro pro dark
    },
    sombra: {
      main: "#6c6d6fff",
    },
  },
});

export { lightTheme, darkTheme };

// continue em src/theme.ts (após criar lightTheme e darkTheme)
lightTheme.components = {
  ...lightTheme.components,
  MuiCssBaseline: {
    styleOverrides: {
      ":root": {
        // variáveis para o tema claro
        "--mui-palette-destaque-main": lightTheme.palette.destaque.main,
        "--mui-palette-sombra-main": lightTheme.palette.sombra.main,
        // opcional: manter compatibilidade com vars padrão
        "--mui-palette-primary-main": lightTheme.palette.primary.main,
        "--mui-palette-secondary-main": lightTheme.palette.secondary.main,
        "--mui-palette-error-main": lightTheme.palette.error.main,
        "--mui-palette-success-main": lightTheme.palette.success.main,
        "--mui-palette-background-default": lightTheme.palette.background.default,
      },
    },
  },
};

darkTheme.components = {
  ...darkTheme.components,
  MuiCssBaseline: {
    styleOverrides: {
      ":root": {
        "--mui-palette-destaque-main": darkTheme.palette.destaque.main,
        "--mui-palette-sombra-main": darkTheme.palette.sombra.main,
        "--mui-palette-primary-main": darkTheme.palette.primary.main,
      },
    },
  },
};
