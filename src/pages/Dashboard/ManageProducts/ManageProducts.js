import React from 'react';
import bicycle from '../../../images/products/bicycle-1.jpg';

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

const ManageProducts = () => {
    return (
        <div className="container">
            <div className="orders-container">
                {/* <h1 className={myOrders.length && "hidden"}>You have no Order Yet!</h1> */}
                <h2 className="display-5 text-center my-4">Manage Products</h2>
                <div className={!myOrders.length && "hidden"}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders.map((order) => (
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
                                    <td> ${order?.price} </td>
                                    <td
                                        // onClick={() => handleCancelOrder(order._id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <button className="btn btn-danger btn-sm">Delete</button>
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

export default ManageProducts;