import React from 'react';
import AboutCompanyInShort from '../AboutCompanyInShort/AboutCompanyInShort';
import ContactForm from '../ContactForm/ContactForm';
import HelpfulLinks from '../HelpfulLInks/HelpfulLinks';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <AboutCompanyInShort />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* <OpeningHours /> */}
                            <HelpfulLinks />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <ContactForm />
                        </div>
                    </div>

                </div>

            </div>
            <div className="py-1" style={{ backgroundColor: '#222222', color: '#ccc' }}>
                <p className="text-center">&copy; Copyrights 2021 FitPal Bicycle</p>
            </div>
        </>
    );
};

export default Footer;