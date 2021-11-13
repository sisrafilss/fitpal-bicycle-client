import axios from 'axios';
import React, { useEffect, useState } from 'react';


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
                                <th scope="col"></th>
                                <th scope="col">Cancel</th>
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
                                    <td>
                                        {order.status === "Pending" && (
                                            <button
                                            // onClick={() => handleApproval(order._id)}
                                            >
                                                Approve
                                            </button>
                                        )}
                                    </td>
                                    <td
                                        // onClick={() => handleCancelOrder(order._id)}
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

export default ManageAllOrders;