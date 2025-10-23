import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
    const { navigation, brand, socialMedia } = siteConfig;

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="text-2xl font-bold mb-4">
                            {brand.name}
                        </div>
                        <p className="text-gray-300 mb-4">
                            {brand.description}
                        </p>
                        <div className="flex space-x-4">
                            {socialMedia.map((social, index) => {
                                const IconComponent = social.icon;

                                return IconComponent ? (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-5 w-5 text-gray-300 hover:text-primary-500 cursor-pointer transition-colors"
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navigation.footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-300 hover:text-primary-500 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Categories */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4">Decor Styles</h3>
                        <ul className="space-y-2">
                            {navigation.footer.decorStyles.map((style, index) => (
                                <li key={index}>
                                    <a href={style.href} className="text-gray-300 hover:text-primary-500 transition-colors">
                                        {style.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <Phone className="h-4 w-4 mr-3 text-primary-500" />
                                <span className="text-gray-300">+918860496464</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-4 w-4 mr-3 text-primary-500" />
                                <span className="text-gray-300">sachinvashist82@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-4 w-4 mr-3 mt-1 text-primary-500" />
                                <span className="text-gray-300">Gurugram Sec-77<br />Haryana, IN 122004</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {brand.name}. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {navigation.footer.legal.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-primary-500 text-sm transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;