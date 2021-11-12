import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SectionHead from '../../Shared/SectionHead/SectionHead';
import SingleReview from '../SingleReview/SingleReview';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    // Load Highlighted products
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                setReviews(res.data);
            })
    }, [])


    // Section Head props object
    const sectionHead = {
        title: 'What Our Customers are Saying',
        subtitle: 'Take a loot, what our customers are saying about our products'
    }
    return (
        <div style={{ marginBottom: '80px' }}>
            <SectionHead sectionHead={sectionHead} />
            <div className="container mb-5">
                <div className="row g-4">
                    {/* Add Slider for each SingleReview if have enough time. */}
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;