import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    destaque: Palette["primary"];
    sombra: Palette["primary"];
  }
  interface PaletteOptions {
    destaque?: PaletteOptions["primary"];
    sombra?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    destaque: true;
    sombra: true; 
  }
}
