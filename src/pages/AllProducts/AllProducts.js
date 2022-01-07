import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header';
import SectionHead from '../Shared/SectionHead/SectionHead';
import SingleProduct from '../Shared/SingleProduct/SingleProduct';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    // Load Highlighted products
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])

    // Section Head props object
    const sectionHead = {
        title: 'Choose Your Favorite Bike',
        subtitle: 'Choose your favorite bicycle from our Variety of Bikes Collection'
    }


    return (
        <div>
            <Header />

            <div style={{ marginTop: '-60px' }}>
                <SectionHead sectionHead={sectionHead} />
                <div className="container">
                    <div style={{ marginBottom: '60px' }} className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <SingleProduct key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProducts;