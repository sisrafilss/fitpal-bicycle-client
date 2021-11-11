import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css'


const SingleProduct = (props) => {
    const { id, title, description, img, price } = props.product;
    return (
        <div>
            <div className="col">
                <div className="card shadow border-0">
                    <img src={img} className="card-img-top card-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-dark"> {title} </h5>
                        <p className="card-text card-description"> {description.slice(0, 150)} </p>
                        <p> Price: ${price} </p>
                        <Link to={`place-order/${id}`} className="btn btn-outline read-mroe-btn fw-bold">Buy Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;