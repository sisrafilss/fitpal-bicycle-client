import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // Sing In Using Google
    const signInWithGoogle = (location, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
                setUser(user);
                const destination = location?.state?.from || "/";
                history.replace(destination);
            }).catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            });
    }

    // Observing user state
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setAuthError('');
                setIsLoading(false);
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
        isLoading,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;