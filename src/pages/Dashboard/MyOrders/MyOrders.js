import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = ({ setPageTitle }) => {

    setPageTitle('My Orders')
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [productState, setProductState] = useState(false);

    // Load my orders from database
    useEffect(() => {
        const url = `https://gentle-lake-31657.herokuapp.com/my-orders?email=${user.email}`;
        axios.get(url)
            .then(res => {
                setMyOrders(res.data);
            })
    }, [productState, user.email]);

    // handle Cancel/delete order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are sure, want to cancell?');
        if (proceed) {
            const url = `https://gentle-lake-31657.herokuapp.com/my-orders/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        setProductState(true);
                        alert('Order Cancelled!');
                    }
                })
        }
    }

    return (
        <div className="container">
            <div className="orders-container">

                {
                    myOrders.length > 0 ?
                        <div>
                            <h2 className="display-5 text-center my-4">Your All Orders: {myOrders.length < 1 ? 0 : myOrders.length} </h2>
                            <div>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Placed At</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Payment</th>
                                            <th scope="col">Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myOrders?.map((order) => (
                                            <tr key={order?._id}>
                                                <th scope="row">
                                                    {" "}
                                                    {
                                                        <img
                                                            src={order?.product?.img}
                                                            style={{ height: "40px", width: "40px" }}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    }{" "}
                                                </th>
                                                <td> {order?.product?.title} </td>
                                                <td> ${order?.product?.price} </td>
                                                <td> {order?.placedAt} </td>
                                                <td> {order?.status} </td>
                                                <td>
                                                    {
                                                        order?.payment ? (
                                                            "Paid"
                                                        ) : (
                                                            <Link to={`/dashboard/payment/${order?._id}`} className="btn-primary btn btn-sm">
                                                                Pay
                                                            </Link>
                                                        )
                                                    }
                                                </td>
                                                <td
                                                    onClick={() => handleDeleteOrder(order._id)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    X
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div> : <h1 className="text-center py-5">You have no Order Yet!</h1>
                }
            </div>
        </div>
    );
};

export default MyOrders;