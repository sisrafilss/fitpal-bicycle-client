import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle } = useAuth();

    return (
        <div>
            <h1>Google Login</h1>
            <button onClick={signInWithGoogle}>Google Login</button>
        </div>
    );
};

export default Login;