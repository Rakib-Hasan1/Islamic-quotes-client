import Spinner from '@/Components/Spinner';
import useAuth from '@/Hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Spinner/>
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;