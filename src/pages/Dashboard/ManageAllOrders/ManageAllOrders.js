import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';
import bicycle from '../../../images/products/bicycle-1.jpg'

const orders = [
    {
        id: 1,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending',
        email: 'email@gmail.com'
    },
    {
        id: 2,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending',
        email: 'email@gmail.com'
    },
    {
        id: 3,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending',
        email: 'email@gmail.com'
    },
    {
        id: 4,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending',
        email: 'email@gmail.com'
    },
    {
        id: 5,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending',
        email: 'email@gmail.com'
    },
]

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    // Load all orders from Server
    useEffect(() => {
        axios.get(`http://localhost:5000/all-orders?email=${user.email}`)
            .then(res => {
                console.log(res.data);
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
                                                src={order?.img}
                                                style={{ height: "40px", width: "40px" }}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        }{" "}
                                    </th>
                                    <td> {order?.title} </td>
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