import React from 'react';
import SectionHead from '../../Shared/SectionHead/SectionHead';
import SingleReview from '../SingleReview/SingleReview';

import customer from '../../../images/customer-1.jpg';

const feedbacks = [
    {
        id: 1,
        img: customer,
        feedback: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi assumenda a sed sapiente itaque error fuga animi, necessitatibus voluptatem vel.',
        rating: 4.4,
    },
    {
        id: 2,
        img: customer,
        feedback: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi assumenda a sed sapiente itaque error fuga animi, necessitatibus voluptatem vel.',
        rating: 5,
    },
    {
        id: 3,
        img: customer,
        feedback: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi assumenda a sed sapiente itaque error fuga animi, necessitatibus voluptatem vel.',
        rating: 3.4,
    },
]

const Reviews = () => {
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
                        feedbacks.map(feedback => <SingleReview key={feedback.id} feedback={feedback} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;