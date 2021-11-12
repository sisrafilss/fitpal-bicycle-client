import React from 'react';
import SidebarNavigation from '../SidebarNavigation/SidebarNavigation';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <SidebarNavigation />
            <div style={{ marginLeft: '200px' }}>
                <div className="w-100 py-4 mt-0 dashboard-top">
                    <h3 className="ms-5">Dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;