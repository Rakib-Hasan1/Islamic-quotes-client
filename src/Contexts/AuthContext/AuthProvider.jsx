import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("user in the auth state change", currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logoutUser,
        googleSignIn
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

};

export default AuthProvider;