import React from 'react';
import usePageTitle from "../../hooks/usePageTitle";
import Text from "../Text/Text";
import styles from './header.module.css';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    const pageTitle = usePageTitle();

    return (
        <div className={styles['wrapper']}>
            <Text type={'header'} variant={'default'}>{pageTitle}</Text>
        </div>
    );
};

export default Header;
