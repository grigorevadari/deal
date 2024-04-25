import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {getPageTitle} from "../components/SideNav/SideNavUtils";

const usePageTitle = (): string => {
    const {pathname} = useLocation();
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        setTitle(getPageTitle(pathname));
    }, [pathname]);

    return title;
};

export default usePageTitle;
