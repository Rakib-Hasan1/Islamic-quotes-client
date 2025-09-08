import React from "react";
import { Outlet, Link } from "react-router"; // Outlet for nested login/register routes

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side - Form Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
                <div className="w-full max-w-md space-y-8">

                    {/* Nested Routes Render Here (Login/Register) */}
                    <Outlet />

                    {/* Toggle Links */}
                    <div className="text-center mt-6 text-gray-600">
                        <p className="text-lg font-semibold">
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-green-600 font-medium hover:underline">
                                Register
                            </Link>
                        </p>
                        <p className="mt-2 text-lg font-semibold">
                            Already have an account?{" "}
                            <Link to="/login" className="text-green-600 font-medium hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Image Section */}
            <div className="hidden md:flex w-1/2 bg-green-50 items-center justify-center p-6">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" // replace with your image
                    alt="Authentication Illustration"
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    );
};

export default AuthLayout;
