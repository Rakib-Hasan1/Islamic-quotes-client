import React from 'react';
import { Button } from './ui/button';
import { FcGoogle } from "react-icons/fc";
import useAuth from '@/Hooks/useAuth';


const SocialLogin = ({ label }) => {

    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
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