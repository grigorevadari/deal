import React from 'react';
import Text from "../../components/Text/Text";
import {useNavigate} from "react-router-dom";


const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={'page-header'}>
                <Text variant={'default'} type={'subtitle'} textAlign={'center'}>Hello, Deal team!</Text>
                <Text variant="default" type="subtitle" textAlign="center">
                    Please, check the <Text as={'span'} onClick={() => navigate('/autocomplete')} variant="primary" type="subtitle" textAlign="center">Autocomplete</Text> Component
                </Text>
            </div>
            <div className={'page-content'}>
            </div>
        </>
    );
};

export default HomePage;
