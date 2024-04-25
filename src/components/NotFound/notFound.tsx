import React from "react";
import styles from './notFound.module.css';

const NotFound: React.FC = () => {
    return (
        <div className={styles['page-wrapper']}>
            <div className={styles['content-wrapper']}>
                <span className={styles['title']}>404</span>
                <span className={styles['text']}>The page you are looking for doesn't exist</span>
            </div>
        </div>
    );
};

export default NotFound;
