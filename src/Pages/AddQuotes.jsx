import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import useAxios from "@/Hooks/useAxios";
import useAuth from "@/Hooks/useAuth";
import { toast } from "react-toastify";


const AddQuote = () => {
    const { user } = useAuth();
    const axiosInstance = useAxios();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const quotesInfo = {
            publisher_name: user?.displayName,
            publisher_email: user?.email,
            quote: data?.quote,
            reference: data?.reference,
            status: "pending"
        }
        const userRes = axiosInstance.post("/add-quote", quotesInfo);
        console.log(userRes);
        toast.success("quote added successful")
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
            >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <FaQuoteRight className="text-emerald-600 text-2xl" />
                    <h2 className="text-xl font-bold text-gray-800">
                        Add an Islamic Quote
                    </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Quote Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Quote <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            {...register("quote", { required: true })}
                            rows="3"
                            placeholder="Enter the Islamic quote..."
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                        />
                        {errors.quote && (
                            <p className="text-red-500 text-sm mt-1">
                                Quote is required
                            </p>
                        )}
                    </div>

                    {/* Reference Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Reference <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("reference", { required: true })}
                            type="text"
                            placeholder="e.g. Sahih Bukhari, Surah Al-Baqarah 2:286"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        {errors.reference && (
                            <p className="text-red-500 text-sm mt-1">
                                Reference is required
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md cursor-pointer hover:bg-emerald-700 transition"
                    >
                        Add Quote
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default AddQuote;
