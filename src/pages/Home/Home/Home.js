import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import GreetUser from '../GreetUser/GreetUser';
import HighlightedProducts from '../HighlightedProducts/HighlightedProducts';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <GreetUser />
            <HighlightedProducts />
        </div>
    );
};

export default Home;