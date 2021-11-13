import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Review.css'
import ReactStars from "react-rating-stars-component";

import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Review = () => {

    const { user } = useAuth();
    const [rating, setRating] = useState(null);
    const [reviewSubmited, setReviewSubmited] = useState(false);

    // Haqndle Rating
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };


    // React hook form
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const review = {
            name: user.displayName,
            img: user.photoURL,
            rating: rating,
            feedback: data.review
        }

        axios.post('https://gentle-lake-31657.herokuapp.com/review', review)
            .then(res => {
                if (res.data.insertedId) {
                    setReviewSubmited(true);
                    reset();
                };
            })


    };

    return (
        <div className="review-container mt-5 container" >


            <div className="login-form border rounded">
                {
                    reviewSubmited && <div>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            Review Submited.
                            <button onClick={() => setReviewSubmited(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div>
                            <button onClick={() => setReviewSubmited(false)} className="btn btn-success">Write Another Review</button>
                        </div>
                    </div>
                }
                {
                    !reviewSubmited && <div>
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
                }

            </div>

        </div>
    );
};

export default Review;