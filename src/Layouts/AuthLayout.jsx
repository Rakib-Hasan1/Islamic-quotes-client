import React from "react";
import { Outlet, Link } from "react-router"; // Outlet for nested login/register routes

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side - Form Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-green-700">Welcome Back</h1>
                        <p className="mt-2 text-gray-600">
                            Login to continue or create a new account to get started.
                        </p>
                    </div>

                    {/* Nested Routes Render Here (Login/Register) */}
                    <Outlet />

                    {/* Toggle Links */}
                    <div className="text-center mt-6 text-gray-600">
                        <p>
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-green-600 font-medium hover:underline">
                                Register
                            </Link>
                        </p>
                        <p className="mt-2">
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
