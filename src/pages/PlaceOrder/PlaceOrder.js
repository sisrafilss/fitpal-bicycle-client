import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'
import axios from 'axios';

const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { productId } = useParams();
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        const url = `https://gentle-lake-31657.herokuapp.com/product/${productId}`;
        axios(url)
            .then((res) => {
                setProduct(res.data);
            })
    }, [productId]);

    const { title, description, img, price } = product;

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const order = {
            ...data,
            placedAt: new Date().toLocaleString(),
            product
        }
        axios.post('https://gentle-lake-31657.herokuapp.com/place-order', order)
            .then(res => {
                if (res.data.insertedId) {
                    setOrderSuccess(true);
                    reset()
                }
            })

    };

    return (
        <div>
            <Header />
            <div className="container mt-4 mb-5">
                <h2 className="mb-4 text-primary text-center display-5 fw-bold text-decoration-underline">Product Detail</h2>
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img src={img} className="img-fluid rounded-start w-100" alt="..." />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body ps-4">
                                <h4 className="h1 text-primary"> {title} </h4>
                                <p className="card-text"> {description} </p>
                                <p className="card-text h2">Price: ${price} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="form-container">
                    <div className="mb-4">
                        <h2>Please Confirm the Detail and Place an Order</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                defaultValue={user?.displayName}
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                defaultValue={user.email}
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Full Address</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Enter Full Address"
                                {...register("address", { required: true })}
                            ></textarea>
                            {errors.address && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City name"
                                {...register("city", { required: true })}
                            />
                            {errors.city && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone number"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <input
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            type="submit"
                            className="btn btn-primary fw-bold"
                            value="Place Order"
                        />
                    </form>
                    {
                        orderSuccess && <div className="alert alert-success mt-5 alert-dismissible fade show" role="alert">
                            Order Placed Successfully.
                            <button onClick={() => setOrderSuccess(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PlaceOrder;