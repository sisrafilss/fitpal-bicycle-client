import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import bicycle from '../../../images/products/bicycle-1.jpg';
import './MyOrders.css'

const myOrders = [
    {
        id: 1,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending'
    },
    {
        id: 2,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending'
    },
    {
        id: 3,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending'
    },
    {
        id: 4,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending'
    },
    {
        id: 5,
        title: 'Mountain Bike',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234,
        status: 'Pending'
    },
]

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    // Load my orders from database
    useEffect(() => {
        const url = `http://localhost:5000/my-orders?email=${user.email}`;
        axios.get(url)
            .then(res => {
                setMyOrders(res.data);
            })
    }, [])

    return (
        <div className="container">
            <div className="orders-container">
                {/* <h1 className={myOrders.length && "hidden"}>You have no Order Yet!</h1> */}
                <h2 className="display-5 text-center my-4">Your All Orders</h2>
                <div className={!myOrders.length && "hidden"}>
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

export default MyOrders;