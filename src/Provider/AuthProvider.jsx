import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)

    const [istLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUserInGoogle = () => {
        return signInWithPopup(auth, googleProvider)

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
                console.log(error.message);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log(currentUser);
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
    }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>)
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;