import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const { title, description, img, price } = props.product;
    return (
        <div>
            <div class="col">
                <div class="card shadow border-0">
                    <img src={img} class="card-img-top card-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"> {title} </h5>
                        <p class="card-text card-description"> {description.slice(0, 150)} </p>
                        <p> Price: ${price} </p>
                        <Link to={`/service`} className="btn btn-outline read-mroe-btn fw-bold">Details</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;