import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './SidebarNavigation.css'
import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';

const SidebarNavigation = () => {

    let { url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div>
            <div className="logo-section">
                <Link to="/home">
                    <img
                        src={logo}
                        style={{ width: '35px', height: '35px' }}
                        className="d-block mx-auto"
                        alt=""
                    />
                    <span
                        className="ms-2 h3
                    d-inline-block"
                        style={{ color: '#f1f1f1' }}
                    >
                        FitPal
                    </span>
                </Link>
            </div>
            <div className="sidenav">
                {
                    !admin && <div>
                        <Link to={`${url}/my-orders`}>My Orders</Link>
                        <Link to={`${url}/review`}>Review</Link>
                    </div>
                }
                {
                    admin && <div>
                        <Link to={`${url}/manage-all-orders`}>All Orders</Link>
                        <Link to={`${url}/add-product`}>Add Product</Link>
                        <Link to={`${url}/make-admin`}>Make Admin</Link>
                        <Link to={`${url}/manage-products`}>Manage Products</Link>
                    </div>
                }
                <Link to={`${url}/logout`}>Log Out</Link>
            </div>
        </div>
    );
};

export default SidebarNavigation;