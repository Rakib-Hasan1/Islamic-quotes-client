import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {


    const authInfo = {
        name: "Rakib Hasan",
        email: "dev.rakibhasan1@gmail.com"
    }



    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;