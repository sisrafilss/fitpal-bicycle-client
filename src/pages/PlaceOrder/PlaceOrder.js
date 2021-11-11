import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header';
import bicycle from '../../images/products/bicycle-1.jpg'

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

    const { productId } = useParams();

    const product = products.find(pd => pd.id == productId);
    const { title, description, img, price } = product;


    return (
        <div>
            <Header />
            <div className="container my-5">
                <div class="card mb-3">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <img src={img} class="img-fluid rounded-start w-100" alt="..." />
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="card-body ps-4">
                                <h4 class="h1 text-primary"> {title} </h4>
                                <p class="card-text"> {description} </p>
                                <p class="card-text h2">Price: ${price} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;