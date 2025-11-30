import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";

interface IconTextButtonProps {
  onClick: () => void;
  color?: string;
  hoverColor?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const IconTextButton =({onClick, color,hoverColor, children, icon }: IconTextButtonProps)=>{
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
            <Stack direction="row" spacing={1} alignItems="center">
                {icon && <span>{icon}</span>}
                <span>{children}</span>
            </Stack>
        </Button>
    )
}

export default IconTextButton