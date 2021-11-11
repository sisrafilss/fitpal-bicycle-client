import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {

    const { productId } = useParams();

    return (
        <div>
            <Header />
            <h2>Your order id: {productId}</h2>
            <Footer />
        </div>
    );
};

export default PlaceOrder;