import React from 'react';
import './SingleReview.css'
import ReactStars from "react-rating-stars-component";

const SingleReview = (props) => {
    const { name, img, feedback, rating } = props.review;
    return (
        <div className="col-12">
            <div className="card border-1 shadow-sm text-justify">
                <img src={img} className="review-img mt-3" alt="..." />
                <h5 className="mt-4 text-dark text-center"> {name} </h5>
                <div className="mt-0 mx-auto">
                    {/* <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i> */}

                    <ReactStars
                        count={5}
                        size={24}
                        value={rating}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="rgb(250, 202, 81)"
                    />

                </div>
                <div className="card-body text-center">
                    <p className="card-text card-description"> {feedback} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;