import styles from "./styles.module.css"
import type { ReactNode } from "react";

interface SideMenuProps {
    children: ReactNode;
}

const SideMenu = ({children}: SideMenuProps)=>{
    return(
        <aside className={styles.container}>
            <div className={styles.links}>
                {children}
            </div>
        </aside>
    )
}

export default SideMenu