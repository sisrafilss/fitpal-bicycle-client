import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    // Sing In Using Google
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            });
    }

    // Observing user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setAuthError('');
            } else {

            }
        });
    }, []);

    // Log Our
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setAuthError(error);
        });
    }

    return {
        user,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;