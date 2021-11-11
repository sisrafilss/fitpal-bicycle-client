import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div>
            <h1>Google Login</h1>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;