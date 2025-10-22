import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Home', 'Shop', 'Blog', 'Vendors', 'Pages'];

    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-gray-900">
                            <span className="text-primary-500">D</span>AVICI
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-2">
                            <Search className="h-4 w-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400"
                            />
                        </div>

                        {/* User Account */}
                        <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors">
                            <User className="h-5 w-5" />
                        </button>

                        {/* Login */}
                        <a href="#" className="hidden sm:inline-block text-gray-700 hover:text-primary-500 font-medium">
                            Login
                        </a>

                        {/* Cart */}
                        <button className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-primary-500"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <a href="#" className="text-gray-700 hover:text-primary-500 font-medium">
                                    Login
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;