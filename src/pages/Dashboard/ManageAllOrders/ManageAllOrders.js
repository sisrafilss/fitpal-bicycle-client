import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'


const ManageAllOrders = ({ setPageTitle }) => {
    setPageTitle('Manage Orders')

    const [orders, setOrders] = useState([]);
    const [ordersChange, setOrdersChange] = useState(false);

    // Load all orders from Server
    useEffect(() => {
        axios.get(`https://gentle-lake-31657.herokuapp.com/all-orders`)
            .then(res => {
                setOrders(res.data);
            })
    }, [ordersChange]);

    // Handle Order Status
    const handleApprove = (id) => {
        axios.put(`https://gentle-lake-31657.herokuapp.com/all-orders/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setOrdersChange(true);
                }
            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, want to delete?');
        if (proceed) {
            axios.delete(`https://gentle-lake-31657.herokuapp.com/all-orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        setOrdersChange(true);
                        alert('Deleted Successfully!');
                    };
                });
        }
    }

    return (
        <div className="container py-4">
            <div className="orders-container">
                {/* <h1 className={orders.length && "hidden"}>There is no Order Yet!</h1> */}
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Ordered By</th>
                                <th scope="col">Placed At</th>
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
                                    <td> {order?.placedAt} </td>
                                    <td> {order?.status} </td>
                                    <td
                                        // onClick={() => handleCancelOrder(order._id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                Actions
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-dark actions-container" aria-labelledby="dropdownMenuButton2">
                                                <li onClick={() => handleApprove(order?._id)} className="dropdown-item">Approve</li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li onClick={() => handleDelete(order?._id)} className="dropdown-item">Delete</li>

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