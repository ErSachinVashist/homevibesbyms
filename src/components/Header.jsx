import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { siteConfig, animationConfig } from '../config/siteConfig';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const { navigation, brand } = siteConfig;

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            const offsetTop = element.offsetTop - animationConfig.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'categories', 'rooms', 'products', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial active section

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            onClick={() => scrollToSection('#home')}
                            className="text-2xl font-bold text-gray-900 hover:text-primary-500 transition-colors duration-200"
                        >
                            <span className="text-primary-500">{brand.name.charAt(0)}</span>{brand.name.slice(1, 4)}<span className="text-primary-500">{brand.name.charAt(4)}</span>{brand.name.slice(5)}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.main.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`relative font-medium transition-all duration-300 py-2 ${activeSection === item.href.replace('#', '')
                                    ? 'text-primary-500'
                                    : 'text-gray-700 hover:text-primary-500'
                                    }`}
                            >
                                {item.name}
                                {/* Active indicator */}
                                {activeSection === item.href.replace('#', '') && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full transform transition-all duration-300"></span>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="hidden flex items-center space-x-4">
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
                    <div className="md:hidden py-4 border-t border-gray-100 animate-slideDown">
                        <nav className="flex flex-col space-y-4">
                            {navigation.main.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`text-left font-medium transition-all duration-200 py-2 px-2 rounded-lg ${activeSection === item.href.replace('#', '')
                                        ? 'text-primary-500 bg-primary-50'
                                        : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <a href="#" className="text-gray-700 hover:text-primary-500 font-medium block py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
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