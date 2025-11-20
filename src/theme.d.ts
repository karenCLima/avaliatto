import type { PaletteColorOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    destaque: Palette["primary"];
    sombra: Palette["primary"];
  }
  interface PaletteOptions {
    destaque?: PaletteOptions["primary"];
    sombra?: PaletteColorOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    destaque: true;
    sombra: true; 
  }
}

  // Permite usar color="destaque" nos componentes
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    destaque: true;
    sombra: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    destaque: true;
    sombra: true; 
  }
}

