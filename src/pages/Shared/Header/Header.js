import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">FitPal Bicycle</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item  fitpal-nav-item me-4">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item  fitpal-nav-item me-4">
                            <Link to="/all-products">All Products</Link>
                        </li>
                        {
                            user?.email ? <button onClick={logOut} style={{ outline: 0, border: 0, borderRadius: '3px' }}>
                                LogOut
                            </button> : <li className="nav-item fitpal-nav-item me-4">
                                <Link to="/login">Login</Link>
                            </li>
                        }


                    </ul>
                    {user.email && (
                        <div className="mx-3">
                            <img
                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                src={user?.photoURL}
                                alt=""
                            />
                            <span className="text-light"> {user?.displayName} </span>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Header;