import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export function ThemeToggleButton() {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isDarkMode ? <Brightness7Icon sx={{color: "primary.main"}} /> : <Brightness4Icon sx={{color: "primary.main"}} />}
    </IconButton>
  );
}
