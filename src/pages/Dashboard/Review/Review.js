import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css'
import ReactStars from "react-rating-stars-component";

const Review = () => {

    // Haqndle Rating
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    // React hook form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="review-container mt-5 container" >


            <div className="login-form border rounded">
                <div>
                    <h2 className="h3 mb-4">Write a Review</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <ReactStars
                            count={5}
                            size={24}
                            onChange={ratingChanged}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="rgb(250, 202, 81)"
                        />
                    </div>

                    <div className="mb-3">
                        <textarea
                            rows="4"
                            cols="50"
                            type="text"
                            className="form-control"
                            {...register("review", { required: true })}
                        />
                        {errors.review && (
                            <span className="text-danger">This field is required</span>
                        )}
                    </div>

                    <input
                        type="submit"
                        className="btn btn-primary fw-bold"
                        value="Submit"
                    />
                </form>

            </div>

        </div>
    );
};

export default Review;