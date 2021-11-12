import React from 'react';
import './Banner.css';
import slide1 from '../../../images/slide-1.jpg';
import slide2 from '../../../images/slide-2.jpg';
import slide3 from '../../../images/slide-3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item active fitpal-carousel-item">
                    <div style={{ backgroundImage: `url(${slide1})` }} className="overlay-image"></div>
                    <div className="container slider-container">
                        <h1>Use Bicycle and Stay Fit</h1>
                        <p className="lead">Cycling improves overall function in your lower body and strengthens your leg muscles without overstressing them.</p>
                        <Link className="btn btn-primary btn-lg" to="/all-products">See All Products</Link>
                    </div>
                </div>
                <div className="carousel-item  fitpal-carousel-item">
                    <div style={{ backgroundImage: `url(${slide2})` }} className="overlay-image"></div>
                    <div className="container slider-container">
                        <h1>Use Bicycle and Stay Fit</h1>
                        <p className="lead">Cycling improves overall function in your lower body and strengthens your leg muscles without overstressing them.</p>
                        <Link className="btn btn-primary btn-lg" to="/all-products">See All Products</Link>
                    </div>
                </div>
                <div className="carousel-item  fitpal-carousel-item">
                    <div style={{ backgroundImage: `url(${slide3})` }} className="overlay-image"></div>
                    <div className="container slider-container">
                        <h1>Use Bicycle and Stay Fit</h1>
                        <p className="lead">Cycling improves overall function in your lower body and strengthens your leg muscles without overstressing them.</p>
                        <Link className="btn btn-primary btn-lg" to="/all-products">See All Products</Link>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;