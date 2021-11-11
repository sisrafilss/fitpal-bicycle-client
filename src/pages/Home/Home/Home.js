import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import GreetUser from '../GreetUser/GreetUser';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <GreetUser />
        </div>
    );
};

export default Home;