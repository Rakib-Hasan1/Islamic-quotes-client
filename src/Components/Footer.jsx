// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router";
import { FaGithub, FaFacebook, FaLinkedin, FaBriefcase } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-red-100 nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo & About */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-red-100">
                            🕌 Islamic Quotes
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed">
                            A platform to share and discover inspiring Islamic quotes.
                            Spreading positivity, wisdom, and faith.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-red-100 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-orange-400 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/quotes" className="hover:text-orange-400 transition">
                                    Quotes List
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-quote" className="hover:text-orange-400 transition">
                                    Add Quote
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-orange-400 transition">
                                    Login / Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-red-100 mb-4">Follow Us</h3>
                        <div className="flex space-x-4 text-2xl">
                            <a
                                href="https://github.com/Rakib-Hasan1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-400 transition"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://modern-portfolio-lovat.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-400 transition"
                            >
                                <FaBriefcase />
                            </a>
                            <a
                                href="https://www.facebook.com/md.rakib.hasan.0001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-400 transition"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dev-mdrakib/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-400 transition"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>
                        © {new Date().getFullYear()} Islamic Quotes. All rights reserved.
                        <span className="text-green-400"> ✨ Built with Faith & Code</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
