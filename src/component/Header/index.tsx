import styles from "./styles.module.css"
import QuizIcon from '@mui/icons-material/Quiz';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import TextButton from "../TextButton";
import { ThemeToggleButton } from "../ThemeToggleButton";

const Header = () =>{
    const navigate = useNavigate();

    return(
        <>
        <nav className={styles.container}>
            <div className={styles.menu_container}>
                <QuizIcon fontSize="large"  sx={{color:"secondary.main"}}/>
                <div className={styles.menu_options}>
                    <TextButton 
                        onClick={() => navigate("/")}
                        color="background.default"
                        hoverColor="text.primary"
                        >
                        Dashboard
                    </TextButton>

                    <TextButton 
                        onClick={() => navigate("/avaliacao")}
                        color="background.default"
                        hoverColor="text.primary"
                        >
                        Avaliação
                    </TextButton>
                    <TextButton 
                        onClick={() => navigate("/sobre")}
                        color="background.default"
                        hoverColor="text.primary"
                        >
                        Sobre
                    </TextButton>
                    <ThemeToggleButton/>
                    <Avatar
                        sx={{ bgcolor:"secondary.main"}}
                        alt="Karen Lima"
                        src="/broken-image.jpg"
                    />
                </div>
            </div>
            
        </nav>
        </>
    )

}

export default Header