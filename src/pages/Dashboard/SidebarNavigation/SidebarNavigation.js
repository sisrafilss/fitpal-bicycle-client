import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './SidebarNavigation.css'
import logo from '../../../images/logo.png'

const SidebarNavigation = () => {

    let { url } = useRouteMatch();

    return (
        <div>
            <div className="logo-section">
                <Link to="/home">
                    <img src={logo} style={{ width: '35px', height: '35px' }} className="d-block mx-auto" alt="" />
                    <span className="ms-2 h3 d-inline-block" style={{ color: '#f1f1f1' }}>FitPal</span>
                </Link>
            </div>
            <div class="sidenav">
                <Link to={`${url}/my-orders`}>My Orders</Link>
                <Link to={`${url}/payment`}>Payment</Link>
                <Link to={`${url}/review`}>Review</Link>
                <Link to={`${url}/logout`}>Log Out</Link>

            </div>
        </div>
    );
};

export default SidebarNavigation;