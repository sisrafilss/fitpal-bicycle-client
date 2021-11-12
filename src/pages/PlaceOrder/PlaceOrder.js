import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header';
import bicycle from '../../images/products/bicycle-1.jpg';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const products = [
    {
        id: 1,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 2,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 3,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 4,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 5,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 6,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 7,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 8,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 9,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
    {
        id: 10,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus officiis laborum ab nemo eveniet enim error at. Voluptates ad harum illo tenetur hic esse similique quae repellat odit architecto, officia ea soluta expedita consectetur est accusantium. Ipsa, quae eveniet itaque ex blanditiis aliquam sint praesentium quaerat tempora et quia, similique dicta saepe possimus eaque, accusamus illum harum aliquid eos aspernatur. Excepturi, quidem sequi. Aliquam, impedit beatae odit ea molestias, iste cum omnis deleniti, perspiciatis veritatis dolor recusandae repellat ipsa eveniet perferendis iusto praesentium doloremque veniam. Pariatur odio modi blanditiis quo tenetur officia, officiis, fugit nisi soluta facilis nemo similique.',
        img: bicycle,
        price: 234
    },
]

const PlaceOrder = () => {

    const { user } = useAuth();
    const { productId } = useParams();


    const product = products.find(pd => pd.id === parseInt(productId));
    const { title, description, img, price } = product;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data) {
            console.log(data);
        }
    };

    return (
        <div>
            <Header />
            <div className="container my-5">
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
                </div>
            </div>
            {/* Order Confirmation Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-success" id="exampleModalLabel">Order Success</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">You have Successfully Placed the Order! Please check My Order Page to check all of your orders and Order Status.</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;