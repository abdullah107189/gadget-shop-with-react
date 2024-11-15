import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [istLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUserInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const createUserInEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUserInEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const serUserNameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const singOutUser = () => {
        setIsLoading(true)
        return signOut(auth)
            .then(() => {
                Swal.fire({
                    title: "Log Out",
                    text: "Log out successfully done !!",
                    icon: "success"
                });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUserInGoogle,
        singOutUser,
        istLoading,
        createUserInEmailAndPass,
        serUserNameAndPhoto,
        loginUserInEmailAndPass,
    }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>)
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;