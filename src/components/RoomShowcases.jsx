import React from 'react';
import { ArrowRight } from 'lucide-react';

const RoomShowcases = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Living Room */}
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                        <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            {/* Living Room Image Placeholder */}
                            <div className="absolute inset-0 bg-cover bg-center bg-gray-300">
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                {/* Simulated furniture elements */}
                                <div className="absolute bottom-8 left-8 w-32 h-20 bg-white rounded-lg shadow-lg"></div>
                                <div className="absolute bottom-8 right-8 w-16 h-32 bg-green-400 rounded-t-full"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-gray-600 rounded-lg"></div>
                            </div>

                            {/* Overlay Content */}
                            <div className="relative z-10 text-center text-white">
                                <p className="text-sm uppercase tracking-wide mb-2 opacity-90">DECOR INSPIRATION</p>
                                <h3 className="text-3xl font-bold mb-4">Cozy Living</h3>
                                <button className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 group">
                                    Get Ideas
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Dining Room */}
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                        <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            {/* Dining Room Image Placeholder */}
                            <div className="absolute inset-0 bg-cover bg-center bg-gray-200">
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                {/* Simulated kitchen/dining elements */}
                                <div className="absolute inset-0">
                                    {/* Kitchen cabinets simulation */}
                                    <div className="absolute top-0 left-0 right-0 h-16 bg-white"></div>
                                    <div className="absolute top-16 left-0 right-0 h-32 bg-gray-100"></div>
                                    {/* Counter */}
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800"></div>
                                    {/* Grid pattern for tiles */}
                                    <div className="absolute inset-0 opacity-10" style={{
                                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>
                            </div>

                            {/* Overlay Content */}
                            <div className="relative z-10 text-center text-white">
                                <p className="text-sm uppercase tracking-wide mb-2 opacity-90">STYLING GUIDE</p>
                                <h3 className="text-3xl font-bold mb-4">Kitchen Decor</h3>
                                <button className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 group">
                                    Explore Style
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomShowcases;