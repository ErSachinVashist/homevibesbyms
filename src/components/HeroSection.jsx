import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollUtils';

const HeroSection = () => {
    const [contentRef, isContentVisible] = useScrollAnimation(0.2);
    const [imageRef, isImageVisible] = useScrollAnimation(0.3);

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center min-h-[600px] lg:min-h-[700px]">
                    {/* Left Content */}
                    <div
                        ref={contentRef}
                        className={`relative z-10 max-w-lg lg:max-w-xl transition-all duration-1000 ${isContentVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        {/* Badge */}
                        <div className={`inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6 transition-all duration-500 delay-200 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            <span className="text-sm font-medium text-gray-700">Davies furniture</span>
                            <span className="ml-2 text-sm text-gray-500">2020</span>
                        </div>

                        {/* New Arrivals */}
                        <p className={`text-primary-500 font-semibold text-sm uppercase tracking-wide mb-4 transition-all duration-500 delay-300 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            NEW ARRIVALS
                        </p>

                        {/* Main Heading */}
                        <h1 className={`text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-400 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                            Spring
                            <br />
                            <span className="text-gray-700">Collection</span>
                        </h1>

                        {/* CTA Button */}
                        <button className={`inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 delay-600 group hover:scale-105 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            Shop now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>

                    {/* Right Content - Furniture Display */}
                    <div
                        ref={imageRef}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 lg:relative lg:right-auto lg:top-auto lg:transform-none lg:flex-1 lg:flex lg:justify-end transition-all duration-1000 delay-300 ${isImageVisible
                                ? 'opacity-100 translate-x-0 scale-100'
                                : 'opacity-0 translate-x-10 scale-95'
                            }`}
                    >
                        {/* Main Chair */}
                        <div className="relative group cursor-pointer">
                            {/* Chair placeholder - you can replace with actual image */}
                            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-105">
                                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gray-600 rounded-2xl transform rotate-12 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                                    <span className="text-white text-lg font-semibold transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500">Modern Chair</span>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>

                            {/* Plant Element */}
                            <div className="absolute top-8 left-8 w-16 h-24 bg-green-400 rounded-t-full opacity-80 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-green-500 rounded-t-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-8 lg:transform-none flex space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-400 rounded-full"></div>
                        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gray-400 rounded-full"></div>
                        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;