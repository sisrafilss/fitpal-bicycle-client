import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(true); // Setting true at inital state only for testing purpose. It will change after connecting database.

    const auth = getAuth();

    // Register new user using email and password
    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setAuthError('');

                // Set user to user state
                const newUser = { email, displayName: name }
                setUser(newUser);

                // Set user to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    history.replace("/");
                }).catch((error) => {
                    setAuthError(error);
                });
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });


    }

    // Login user using email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setAuthError('');

                // Redirect user where he/she wanted to go
                const destination = location?.from?.state || "/";
                history.replace(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

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
    }, [auth]);

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
        authError,
        admin,
        signInWithGoogle,
        registerUser,
        loginUser,
        setAuthError,
        logOut
    }

}

export default useFirebase;