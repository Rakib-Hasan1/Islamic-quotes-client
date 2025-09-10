import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import SocialLogin from "@/Components/SocialLogin";
import useAxios from "@/Hooks/useAxios";

const Register = () => {
    const { createUser } = useAuth();
    const axiosInstance = useAxios();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(async(result) => {
                console.log(result.user);
                // Signed up 
                const userInfo = {
                    email: data?.email,
                    name: data?.displayName,

                    // default role
                    role: "user",
                    created_at: new Date().toISOString(),
                    last_log_in: new Date().toISOString(),
                };

                const userRes = await axiosInstance.post("/users", userInfo);
                console.log(userRes);

                toast('Register Successful');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-md">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-red-100 dark:text-white text-center mb-2">
                    Create Account
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
                    Register to get started with your journey
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                        <input
                            placeholder="Full Name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email",
                                },
                            })}
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
                    >
                        Register
                    </button>
                    <SocialLogin label="Register with Google" />
                </form>
            </div>
        </div>
    );
};

export default Register;
