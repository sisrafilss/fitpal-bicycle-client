import React from 'react';

const OpeningHours = () => {
    return (
        <div>
            <h4 className="my-4">Opening Hours!</h4>
            <div className="row me-4">
                <div className="col-6">
                    <p className='pb-1 mb-0'>Monday - Friday</p>
                    <p className='pb-1 mb-0'>Saturday - Sunday</p>
                    <p className='pb-1 mb-0'>Emergency Services</p>
                </div>
                <div className="col-6">
                    <p className='pb-1 mb-0'>08:00am - 10:00pm</p>
                    <p className='pb-1 mb-0'>09:00am - 06:00pm</p>
                    <p className='pb-1 mb-0'>24 hours Open</p>
                </div>
            </div>
        </div>
    );
};

export default OpeningHours;