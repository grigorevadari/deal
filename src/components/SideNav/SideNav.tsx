import React, {FC} from "react";
import SideNavLinkItem from "./SideNavLinkItem/SideNavLinkItem";
import {menuLinkData} from "./SideNavUtils";
import LogoSvg from "../../icons/LogoSvg/LogoSvg";
import Text from "../Text/Text";
import styles from './sideNav.module.css'

const SideNav: FC = () => {
    return (
        <div className={styles['side-nav-wrapper']}>
            <div className={styles['logo-wrapper']}>
                <LogoSvg/>
                <Text type={'logo'} variant={'primary'}>Deal test task</Text>
            </div>

            {menuLinkData.map((mainMenuLink, index) => (
                <SideNavLinkItem
                    key={index}
                    title={mainMenuLink.title}
                    path={mainMenuLink.path}
                    icon={mainMenuLink.icon}
                />
            ))}
        </div>
    );
};

export default SideNav;
