import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="relative w-16 h-16">
                {/* Outer fast spinner */}
                <div className="absolute w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                {/* Inner slow spinner */}
                <div className="absolute w-10 h-10 top-3 left-3 border-4 border-emerald-300 border-b-transparent rounded-full animate-spin-slow"></div>
            </div>
        </div>
    );
};

export default Spinner;