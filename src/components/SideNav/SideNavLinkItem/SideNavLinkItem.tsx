import React, {FC, ReactNode} from "react";
import Text from '../../Text/Text'
import {NavLink} from "react-router-dom";
import styles from './sideNavLinkItem.module.css';

interface NavLinkItemProps {
    title: string;
    path: string;
    icon: ReactNode;
}

const SideNavLinkItem: FC<NavLinkItemProps> = ({title, path, icon}) => (
    <NavLink className={({ isActive }) =>
        isActive ? `${styles['nav-link']} ${styles.active}` : styles['nav-link']
    }  to={path}>
        <span className={styles['side-nav-icon']}>
            {icon}
        </span>
        <Text variant={'default'} type={'bold'}>{title}</Text>
    </NavLink>
);

export default SideNavLinkItem;