import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import LogOut from '../LogOut/LogOut';
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
        </Switch>
    );
};

export default NestedRoutes;