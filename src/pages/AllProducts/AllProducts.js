import React from 'react';
import Footer from '../Shared/Footer/Footer/Footer';
import Header from '../Shared/Header/Header';
import SectionHead from '../Shared/SectionHead/SectionHead';
import bicycle from '../../images/products/bicycle-1.jpg';
import SingleProduct from '../Shared/SingleProduct/SingleProduct';

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
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis repudiandae eligendi vero culpa sunt eos at qui reiciendis aspernatur repellendus numquam obcaecati vitae, doloribus eaque tempore dignissimos tenetur iusto!',
        img: bicycle,
        price: 234
    },
]

const AllProducts = () => {
    const sectionHead = {
        title: 'Choose Your Favorite Bike',
        subtitle: 'Choose your favorite bicycle from our Variety of Bikes Collection'
    }
    return (
        <div>
            <Header />

            <div style={{ marginTop: '-60px' }}>
                <SectionHead sectionHead={sectionHead} />
                <div className="container">
                    <div style={{ marginBottom: '60px' }} className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <SingleProduct key={product.id} product={product} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProducts;