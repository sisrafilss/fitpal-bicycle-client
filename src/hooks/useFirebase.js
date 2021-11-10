import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    // Sing In Using Google
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return {
        signInWithGoogle
    }

}

export default useFirebase;