import React from 'react';

const SectionHead = (props) => {
    const { title, subtitle } = props.sectionHead;
    return (
        <div style={{ marginTop: '100px' }} className="text-center mb-5">
            <h2 className="display-5 fw-bold">{title}</h2>
            <p className="lead"> {subtitle} </p>
        </div>
    );
};

export default SectionHead;