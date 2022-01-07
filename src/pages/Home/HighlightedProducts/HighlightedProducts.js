import React, { useEffect, useState } from 'react';
import SectionHead from '../../Shared/SectionHead/SectionHead';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HighlightedProducts = () => {

    const [products, setProducts] = useState([]);

    // Load Highlighted products
    useEffect(() => {
        axios.get('http://localhost:5000/highlighted-products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])


    // Section Head props object
    const sectionHead = {
        title: 'Our Best Selling Bicycle',
        subtitle: 'Choose your favorite bicycle from our best selling bike'
    }


    return (
        <div>
            <SectionHead sectionHead={sectionHead} />

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <SingleProduct key={product._id} product={product} />)
                    }
                </div>
                <div className="my-5 d-grid">
                    <Link className="btn btn-load-more" to="/all-products">All Products</Link>
                </div>


            </div>
        </div>
    );
};

export default HighlightedProducts;