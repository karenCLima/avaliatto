import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeContextProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
          <App /> 
    </ThemeContextProvider>
  </StrictMode>,
)
