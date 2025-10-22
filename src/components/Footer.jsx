import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="text-2xl font-bold mb-4">
                            <span className="text-primary-500">D</span>AVICI
                        </div>
                        <p className="text-gray-300 mb-4">
                            Creating beautiful, functional furniture for modern homes since 2020.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-5 w-5 text-gray-300 hover:text-primary-500 cursor-pointer transition-colors" />
                            <Twitter className="h-5 w-5 text-gray-300 hover:text-primary-500 cursor-pointer transition-colors" />
                            <Instagram className="h-5 w-5 text-gray-300 hover:text-primary-500 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Products</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Living Room</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Dining Room</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Bedroom</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Office</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <Phone className="h-4 w-4 mr-3 text-primary-500" />
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-4 w-4 mr-3 text-primary-500" />
                                <span className="text-gray-300">info@davici.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-4 w-4 mr-3 mt-1 text-primary-500" />
                                <span className="text-gray-300">123 Furniture St.<br />Design City, DC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 DAVICI. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;