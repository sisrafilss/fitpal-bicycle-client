import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import bicycle from '../../../images/products/bicycle-1.jpg';
import './MyOrders.css'

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [productState, setProductState] = useState(false);

    // Load my orders from database
    useEffect(() => {
        const url = `http://localhost:5000/my-orders?email=${user.email}`;
        axios.get(url)
            .then(res => {
                setMyOrders(res.data);
            })
    }, [productState]);

    // handle Cancel/delete order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are sure, want to cancell?');
        if (proceed) {
            const url = `http://localhost:5000/my-orders/${id}`
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
                {/* <h1 className={myOrders.length && "hidden"}>You have no Order Yet!</h1> */}
                <h2 className="display-5 text-center my-4">Your All Orders: {myOrders.length} </h2>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders.map((order) => (
                                <tr key={order._id}>
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
                                    <td> {order?.status} </td>
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
            </div>
        </div>
    );
};

export default MyOrders;