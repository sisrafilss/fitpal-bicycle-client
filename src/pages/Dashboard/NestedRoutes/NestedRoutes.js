import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import LogOut from '../LogOut/LogOut';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
const NestedRoutes = ({ setPageTitle }) => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/my-orders`}>
                <MyOrders setPageTitle={setPageTitle} />
            </Route>
            <Route path={`${path}/payment`}>
                <Payment setPageTitle={setPageTitle} />
            </Route>
            <Route path={`${path}/review`}>
                <Review setPageTitle={setPageTitle} />
            </Route>
            <Route path={`${path}/logout`}>
                <LogOut setPageTitle={setPageTitle} />
            </Route>
            <AdminRoute path={`${path}/manage-all-orders`}>
                <ManageAllOrders setPageTitle={setPageTitle} />
            </AdminRoute>
            <AdminRoute path={`${path}/add-product`}>
                <AddProduct setPageTitle={setPageTitle} />
            </AdminRoute>
            <AdminRoute path={`${path}/make-admin`}>
                <MakeAdmin setPageTitle={setPageTitle} />
            </AdminRoute>
            <AdminRoute path={`${path}/manage-products`}>
                <ManageProducts setPageTitle={setPageTitle} />
            </AdminRoute>
        </Switch>
    );
};

export default NestedRoutes;