
import Button from '@mui/material/Button';
import type { ReactNode } from "react";

interface TextButtonProps {
  onClick: () => void;
  color: string;
  hoverColor: string;
  children: ReactNode;
}

const TextButton =({onClick, color,hoverColor, children }: TextButtonProps)=>{
    return(
        <Button 
            variant="text" 
            onClick={onClick} 
            sx={{ 
                color: color, // cor do texto
                fontWeight: "bold",
                "&:hover": {
                    color: hoverColor, 
                    backgroundColor: "transparent",
                    textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }
            }}
        >
                {children}
        </Button>
    )
}

export default TextButton