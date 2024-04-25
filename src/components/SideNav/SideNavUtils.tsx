import React, {ReactNode} from "react";
import HomePageIcon from "../../icons/HomePageIcon/HomePageIcon";
import AutoCompleteIcon from "../../icons/AutoCompleteIcon/AutoCompleteIcon";

interface MenuItem {
    title: string;
    path: string;
    icon: ReactNode;
}

export const menuLinkData: MenuItem[] = [{
    title: "Home Page",
    path: "/",
    icon: <HomePageIcon/>
},
{
    title: "Auto Complete",
    path: "/autocomplete",
    icon: <AutoCompleteIcon/>
}];

export const getPageTitle = (pathname: string): string => {
    const menuData = [...menuLinkData];
    const curMenuItem = menuData.find(menuItem => menuItem.path === pathname) ?? menuData[menuData.length - 1];
    return curMenuItem ? curMenuItem.title : "";
};


