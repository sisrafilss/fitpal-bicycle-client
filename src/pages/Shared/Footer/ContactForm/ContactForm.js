import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <h4 className="my-4">Contact Form!</h4>
            <div >
                <div className="mb-3">
                    <input type="name" className="form-control" id="name" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email address" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Message" id="message" rows="3"></textarea>
                </div>
                <div>
                    <button style={{ fontSize: '1rem', textTransform: 'capitalize' }} className="btn btn-primary">
                        Send Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;