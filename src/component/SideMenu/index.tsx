import styles from "./styles.module.css"
import type { ReactNode } from "react";

interface SideMenuProps {
    children: ReactNode;
    titleText?: string;
}

const SideMenu = ({children, titleText}: SideMenuProps)=>{
    return(
        <aside className={styles.container}>
            <h1 className={styles.title}>{titleText}</h1>
            <div className={styles.links}>
                {children}
            </div>
        </aside>
    )
}

export default SideMenu