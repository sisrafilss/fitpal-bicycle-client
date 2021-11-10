import React from 'react';
import './Banner.css';
import slide1 from '../../../images/slide-1.jpg';
import slide2 from '../../../images/slide-2.jpg';
import slide3 from '../../../images/slide-3.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">

                <div class="carousel-item active fitpal-carousel-item">
                    <div style={{ backgroundImage: `url(${slide1})` }} className="overlay-image"></div>
                    <div className="container slider-container">
                        <h1>Use Bicycle and Stay Fit</h1>
                        <p className="lead">Cycling improves overall function in your lower body and strengthens your leg muscles without overstressing them.</p>
                        <a href="#" className="btn btn-primary btn-lg">
                            See All Offer
                        </a>
                    </div>
                </div>
                <div class="carousel-item  fitpal-carousel-item">
                    <div style={{ backgroundImage: `url(${slide2})` }} className="overlay-image"></div>
                    <div className="container slider-container">
                        <h1>Use Bicycle and Stay Fit</h1>
                        <p className="lead">Cycling improves overall function in your lower body and strengthens your leg muscles without overstressing them.</p>
                        <a href="#" className="btn btn-primary btn-lg">
                            See All Offer
                        </a>
                    </div>
                </div>
                <div class="carousel-item  fitpal-carousel-item">
                    <div style={{ backgroundImage: `url(${slide3})` }} className="overlay-image"></div>
                    <div className="container slider-container">
                        <h1>Use Bicycle and Stay Fit</h1>
                        <p className="lead">Cycling improves overall function in your lower body and strengthens your leg muscles without overstressing them.</p>
                        <a href="#" className="btn btn-primary btn-lg">
                            See All Offer
                        </a>
                    </div>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;