import React from 'react';
import { useState } from 'react/cjs/react.development';
import NestedRoutes from '../NestedRoutes/NestedRoutes';
import SidebarNavigation from '../SidebarNavigation/SidebarNavigation';
import './Dashboard.css'

const Dashboard = () => {

    const [pageTitle, setPageTitle] = useState('');

    return (
        <div>
            <SidebarNavigation />
            <div style={{ marginLeft: '200px' }}>

                <div className="w-100 py-4 mt-0 dashboard-top">
                    <h3 className="ms-5"> {pageTitle} </h3>
                </div>
                <div className="nested-routes">
                    <NestedRoutes setPageTitle={setPageTitle} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;