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
const NestedRoutes = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/my-orders`}>
                <MyOrders />
            </Route>
            <Route path={`${path}/payment`}>
                <Payment />
            </Route>
            <Route path={`${path}/review`}>
                <Review />
            </Route>
            <Route path={`${path}/logout`}>
                <LogOut />
            </Route>
            <AdminRoute path={`${path}/manage-all-orders`}>
                <ManageAllOrders />
            </AdminRoute>
            <AdminRoute path={`${path}/add-product`}>
                <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/make-admin`}>
                <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/manage-products`}>
                <ManageProducts />
            </AdminRoute>
        </Switch>
    );
};

export default NestedRoutes;