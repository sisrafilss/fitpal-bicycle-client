import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'


const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    // Load all orders from Server
    useEffect(() => {
        axios.get(`https://gentle-lake-31657.herokuapp.com/all-orders`)
            .then(res => {
                setOrders(res.data);
            })
    }, [])

    return (
        <div className="container py-4">
            <div className="orders-container">
                {/* <h1 className={orders.length && "hidden"}>There is no Order Yet!</h1> */}
                <div className={!orders.length && "hidden"}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Ordered By</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
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
                                    <td> {order?.email} </td>
                                    <td> {order?.status} </td>
                                    <td
                                        // onClick={() => handleCancelOrder(order._id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                Actions
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-dark actions-container" aria-labelledby="dropdownMenuButton2">
                                                <li class="dropdown-item">Approve</li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li class="dropdown-item">Delete</li>

                                            </ul>
                                        </div>
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

export default ManageAllOrders;