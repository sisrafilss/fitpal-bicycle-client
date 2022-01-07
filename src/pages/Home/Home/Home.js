import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import GreetUser from '../GreetUser/GreetUser';
import HighlightedProducts from '../HighlightedProducts/HighlightedProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <GreetUser />
            <HighlightedProducts />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;