import React, { useEffect, useState } from "react";

const QuotesList = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/quotes")
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-gray-500 animate-pulse">
                    Loading quotes...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
                ✨ Inspiring Islamic Quotes ✨
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {quotes.map((quote) => (
                    <div
                        key={quote._id}
                        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1"
                    >
                        <p className="text-gray-700 italic font-semibold mb-4 leading-relaxed">
                            “{quote.quote}”
                        </p>
                        {quote.author && (
                            <p className="text-right text-indigo-600 font-semibold">
                                — {quote.author}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuotesList;
