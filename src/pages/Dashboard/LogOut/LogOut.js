import React from 'react';
import useAuth from '../../../hooks/useAuth';

const LogOut = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container my-5">
            <div className="p-4 bg-secondary border rounded text-center text-light w-50 mx-auto">
                <h4>You are Logged In as: <span className="text-white h3">{user?.displayName}</span></h4>
                <h6>Email: {user?.email} </h6>
                <div className="my-4">
                    <img src={user?.photoURL} className="" alt="" />
                </div>
                <button onClick={logOut} className="btn btn-primary d-inline-block">Lot Out</button>
            </div>
        </div>
    );
};

export default LogOut;