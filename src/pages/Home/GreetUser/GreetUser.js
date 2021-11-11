import React from 'react';
import SectionHead from '../../Shared/SectionHead/SectionHead';
import './GreetUser.css'
import icon1 from '../../../images/icons/icon-1.png';
import icon2 from '../../../images/icons/icon-2.png';
import icon3 from '../../../images/icons/icon-3.png';

const GreetUser = () => {

    const sectionHead = {
        title: 'Welcome to FitPal Bicycle',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!'
    }

    return (
        <div>
            <SectionHead sectionHead={sectionHead} />
            <div>
                <div className="container greeting-container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 single-item">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="mb-4">
                                    <img
                                        src={icon1}
                                        className="img-fluid"
                                        style={{ height: "80px", width: "80px" }}
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="text-dark">Stay Fit by Bicycling</h3>
                                    <p className="card-description px-3 my-3">
                                        SThe healthcare workforce comprises a wide variety of
                                        professions and occupations who provide some type of
                                        healthcare service, including such direct care practitioners
                                        as...
                                    </p>
                                    <button className="btn btn-primary">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 single-item">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="mb-4">
                                    <img
                                        src={icon2}
                                        className="img-fluid"
                                        style={{ height: "80px", width: "80px" }}
                                        alt=""
                                    />{" "}
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="text-dark">Move without Polution</h3>
                                    <p className="card-description px-3 my-3">
                                        Clinical excellence must be the priority for any health care
                                        system. ... According to the federal Agency for Healthcare
                                        Research and Quality (AHRQ), exceptional healthcare is...{" "}
                                    </p>
                                    <button className="btn btn-primary">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="mb-4">
                                    <img
                                        src={icon3}
                                        className="img-fluid"
                                        style={{ height: "80px", width: "80px" }}
                                        alt=""
                                    />{" "}
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="text-dark">Move Securly</h3>
                                    <p className="card-description px-3 my-3">
                                        Emerging technologies are technologies whose development,
                                        practical applications, or both are still largely unrealized,
                                        such that they...
                                    </p>
                                    <button className="btn btn-primary">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreetUser;