import React, {FC} from "react";

interface SubscribeIconProps {
    width?: number;
    height?: number;

    [key: string]: any;
}

const AutoCompleteIcon: FC<SubscribeIconProps> = ({width = 20, height = 20, ...rest}) => {
    return (
        <svg width={width} height={height} {...rest} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5.83301 7.91658C5.83301 5.6154 7.69849 3.74992 9.99967 3.74992C12.3009 3.74992 14.1663 5.6154 14.1663 7.91658C14.1663 10.2178 12.3009 12.0833 9.99967 12.0833C7.69849 12.0833 5.83301 10.2178 5.83301 7.91658Z"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M14.3674 0.833252H5.63193C4.96112 0.833242 4.40748 0.833233 3.95649 0.870081C3.48807 0.908352 3.05749 0.990489 2.65304 1.19656C2.02583 1.51614 1.5159 2.02608 1.19632 2.65328C0.990245 3.05773 0.908108 3.48832 0.869837 3.95673C0.832989 4.40772 0.832998 4.96135 0.833008 5.63216V14.3677C0.832998 15.0385 0.832989 15.5921 0.869837 16.0431C0.908108 16.5115 0.990245 16.9421 1.19632 17.3466C1.5159 17.9738 2.02583 18.4837 2.65304 18.8033C3.05749 19.0093 3.48807 19.0915 3.95649 19.1298C4.40748 19.1666 4.96111 19.1666 5.63191 19.1666H14.3674C15.0382 19.1666 15.5919 19.1666 16.0429 19.1298C16.5113 19.0915 16.9419 19.0093 17.3463 18.8033C17.9735 18.4837 18.4834 17.9738 18.803 17.3466C19.0091 16.9421 19.0912 16.5115 19.1295 16.0431C19.1664 15.5921 19.1664 15.0385 19.1663 14.3677V5.63215C19.1664 4.96135 19.1664 4.40772 19.1295 3.95673C19.0912 3.48832 19.0091 3.05773 18.803 2.65328C18.4834 2.02608 17.9735 1.51614 17.3463 1.19656C16.9419 0.990489 16.5113 0.908352 16.0429 0.870081C15.5919 0.833233 15.0382 0.833242 14.3674 0.833252ZM3.40969 2.68158C3.54002 2.61517 3.72686 2.56106 4.09221 2.53121C4.46728 2.50057 4.95253 2.49992 5.66634 2.49992H14.333C15.0468 2.49992 15.5321 2.50057 15.9071 2.53121C16.2725 2.56106 16.4593 2.61517 16.5897 2.68158C16.9033 2.84136 17.1582 3.09633 17.318 3.40994C17.3844 3.54027 17.4385 3.7271 17.4684 4.09245C17.499 4.46753 17.4997 4.95277 17.4997 5.66659V14.3333C17.4997 15.0471 17.499 15.5323 17.4684 15.9074C17.4468 16.172 17.4124 16.343 17.3699 16.4667C16.9422 14.7914 15.5062 13.5271 13.7414 13.3533C13.537 13.3332 13.3051 13.3332 12.9646 13.3333H7.0348C6.6943 13.3332 6.46241 13.3332 6.25794 13.3533C4.49318 13.5271 3.05718 14.7915 2.62949 16.4667C2.58695 16.3431 2.55259 16.1721 2.53097 15.9074C2.50032 15.5323 2.49968 15.0471 2.49968 14.3333V5.66659C2.49968 4.95277 2.50032 4.46753 2.53097 4.09245C2.56082 3.7271 2.61492 3.54027 2.68133 3.40994C2.84112 3.09633 3.09609 2.84136 3.40969 2.68158Z"/>
        </svg>
    );
};

export default AutoCompleteIcon;
