import useAuth from '@/Hooks/useAuth';
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxios from '@/Hooks/useAxios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyQuotes = () => {
    const { user } = useAuth();
    const axiosInstance = useAxios();
    const [quotes, setQuotes] = useState([]);

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [editQuote, setEditQuote] = useState("");
    const [editReference, setEditReference] = useState("");

    useEffect(() => {
        if (user?.email) {
            axiosInstance
                .get(`/my-quotes?email=${user.email}`)
                .then(res => setQuotes(res.data))
                .catch(err => console.error(err));
        }
    }, [user, axiosInstance]);

    // Open modal and set default values
    const handleEdit = (quote) => {
        setSelectedQuote(quote);
        setEditQuote(quote.quote);
        setEditReference(quote.reference || "");
        setIsModalOpen(true);
    };

    // Update API call
    const handleUpdate = async () => {
        try {
            const res = await axiosInstance.patch(`/quote/${selectedQuote._id}`, {
                quote: editQuote,
                reference: editReference
            });
            console.log(res);
            // Update local state
            setQuotes(quotes.map(q => q._id === selectedQuote._id ? { ...q, quote: editQuote, reference: editReference } : q));
            setIsModalOpen(false);
            toast.success("Quote Update successful")
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/quote/${id}`);
            setQuotes(quotes.filter(q => q._id !== id));
            toast.success("Quote delete successful")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
                My Quotes
            </h2>

            {quotes.length === 0 ? (
                <p className="text-gray-500 text-center">No quotes found.</p>
            ) : (
                <ul className="space-y-4">
                    {quotes.map((q) => (
                        <li
                            key={q._id}
                            className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
                        >
                            <p className="text-gray-800 italic font-semibold text-lg">
                                "{q.quote}"
                            </p>

                            {q.reference && (
                                <p className="text-right text-sm text-indigo-600 mt-2">
                                    — {q.reference}
                                </p>
                            )}

                            <p className="text-md text-gray-700 mt-2">
                                Status:{" "}
                                <span
                                    className={`font-semibold ${q.status === "published"
                                        ? "text-green-600"
                                        : "text-yellow-600"
                                        }`}
                                >
                                    {q.status}
                                </span>
                            </p>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-4">
                                <button
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm cursor-pointer transition ${q.status === "published"
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                                        }`}
                                    disabled={q.status === "published"}
                                    onClick={() => handleEdit(q)}
                                >
                                    <FaEdit /> Edit
                                </button>

                                <button
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm cursor-pointer transition ${q.status === "published"
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-red-600 text-white hover:bg-red-700"
                                        }`}
                                    disabled={q.status === "published"}
                                    onClick={() => handleDelete(q._id)}
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
                        <h3 className="text-xl font-bold mb-4">Edit Quote</h3>

                        <label className="block text-gray-700 font-medium mb-1">Quote</label>
                        <textarea
                            value={editQuote}
                            onChange={(e) => setEditQuote(e.target.value)}
                            rows="3"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none mb-4"
                        />

                        <label className="block text-gray-700 font-medium mb-1">Reference</label>
                        <input
                            type="text"
                            value={editReference}
                            onChange={(e) => setEditReference(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none mb-4"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                                onClick={handleUpdate}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyQuotes;
