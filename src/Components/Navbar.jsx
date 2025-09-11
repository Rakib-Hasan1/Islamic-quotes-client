import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logoutUser } = useAuth();

    const links = [
        { name: "Home", path: "/" },
        { name: "Quotes List", path: "/quotes" },
        { name: "Add Quote", path: "/add-quote" },
        { name: "My Quotes", path: "/my-quotes" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                // Sign-out successful.
                toast.warn("Logout Successful")
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    return (
        <nav className="bg-slate-900 shadow-md sticky top-0 z-50 nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-red-100"
                    >
                        🕌 Islamic Quotes
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6 text-red-100 font-medium">
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `hover:text-orange-500 font-semibold transition ${isActive ? "text-orange-500" : ""
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>

                            </li>
                        ))}
                    </ul>
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                Login
                            </button>
                        </Link>
                    )}

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-red-100 hover:text-orange-500 text-2xl focus:outline-none cursor-pointer"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-slate-900 shadow-md transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <ul className="px-4 py-3 space-y-3 text-red-100 font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block hover:text-orange-500 transition ${isActive ? "text-orange-500 font-semibold" : ""
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
