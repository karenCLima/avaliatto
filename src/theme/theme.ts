import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563EB", // azul royal
    },
    secondary: {
      main: "#10B981", // verde esmeralda
    },
    error: {
      main: "#EF4444",
    },
    success: {
      main: "#22C55E",
    },
    background: {
      default: "#F9FAFB", 
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
    destaque:{
        main: "#F97316",
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
      main: "#60A5FA",
    },
    secondary: {
      main: "#34D399",
    },
    error: {
      main: "#F87171",
    },
    success: {
      main: "#4ADE80",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: {
      primary: "#F8FAFC",
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
