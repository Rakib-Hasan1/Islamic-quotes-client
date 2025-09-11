import React from 'react';
import { Button } from './ui/button';
import { FcGoogle } from "react-icons/fc";
import useAuth from '@/Hooks/useAuth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const SocialLogin = ({ label, from }) => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                navigate(from || "/");
                toast.success("Login with Google Successful")
                console.log(result);
            })
            .then((error) => {
                console.log(error);
            })
    }



    return (
        <div className="text-white text-center space-y-3">
            <p className="text-white text-center">OR</p>
            <Button onClick={handleGoogleSignIn} type="button" className={"text-white border border-gray-300 bg-gray-800 w-full py-5 cursor-pointer hover:bg-gray-700 transition duration-300"}>
                <FcGoogle className="text-white" /> {label}
            </Button>
        </div>
    );
};

export default SocialLogin;