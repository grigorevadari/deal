import React, {FC} from "react";

interface HomePageIconProps {
    width?: number;
    height?: number;
    [key: string]: any;
}

const CloseIcon: FC<HomePageIconProps> = ({width = 20, height = 20, ...rest}) => {
    return (
        <svg width={width} height={height} {...rest} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.40814 4.41075C4.73358 4.08531 5.26121 4.08531 5.58665 4.41075L9.9974 8.82149L14.4081 4.41075C14.7336 4.08531 15.2612 4.08531 15.5867 4.41075C15.9121 4.73619 15.9121 5.26382 15.5867 5.58926L11.1759 10L15.5867 14.4107C15.9121 14.7362 15.9121 15.2638 15.5867 15.5893C15.2612 15.9147 14.7336 15.9147 14.4081 15.5893L9.9974 11.1785L5.58665 15.5893C5.26121 15.9147 4.73358 15.9147 4.40814 15.5893C4.0827 15.2638 4.0827 14.7362 4.40814 14.4107L8.81888 10L4.40814 5.58926C4.0827 5.26382 4.0827 4.73619 4.40814 4.41075Z" fill="#687385"/>
        </svg>
    );
};

export default CloseIcon;
