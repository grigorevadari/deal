import React, {ReactNode} from "react";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";
import styles from './baseLayout.module.css';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => {

    return (
        <div className={styles['wrapper']}>
            <SideNav/>
            <Header/>
            <div className={styles['content']}>{children}</div>
        </div>
    );
};

export default BaseLayout;
