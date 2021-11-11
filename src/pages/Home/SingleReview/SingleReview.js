import React from 'react';
import './SingleReview.css'
import ReactStars from "react-rating-stars-component";

const SingleReview = (props) => {
    const { img, feedback, rating } = props.feedback;
    return (
        <div className="col-md-4 col-sm-12 review-container">
            <div class="card border-1 shadow-sm text-justify">
                <img src={img} class="review-img mt-3" alt="..." />
                <div className="my-2 mx-auto mt-4">
                    {/* <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i> */}

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
                <div class="card-body text-center">
                    <p class="card-text card-description"> {feedback} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;