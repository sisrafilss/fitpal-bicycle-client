import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarNavigation.css'
import logo from '../../../images/logo.png'

const SidebarNavigation = () => {
    return (
        <div>
            <div className="logo-section">
                <Link to="/home">
                    <img src={logo} style={{ width: '35px', height: '35px' }} className="d-block mx-auto" alt="" />
                    <span className="ms-2 h3 d-inline-block" style={{ color: '#f1f1f1' }}>FitPal</span>
                </Link>
            </div>
            <div class="sidenav">
                <Link to="/user-dashboard">Dashboard</Link>
                <Link>My Orders</Link>
                <Link>Payment</Link>
                <Link>Review</Link>
                <Link>Log Out</Link>

            </div>
        </div>
    );
};

export default SidebarNavigation;