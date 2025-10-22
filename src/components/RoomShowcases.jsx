import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const RoomShowcases = () => {
    const { roomShowcases } = siteConfig;

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{roomShowcases.title}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {roomShowcases.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {roomShowcases.rooms.map((room, index) => (
                        <div key={room.id} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                            <div className={`relative h-80 ${room.backgroundClass} flex items-center justify-center`}>
                                {/* Dynamic Room Image Placeholder */}
                                <div className="absolute inset-0 bg-cover bg-center">
                                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                    {/* Room-specific decorative elements */}
                                    {room.decorativeElements?.map((element, elemIndex) => (
                                        <div
                                            key={elemIndex}
                                            className={element.className}
                                        ></div>
                                    ))}
                                </div>

                                {/* Overlay Content */}
                                <div className="relative z-10 text-center text-white">
                                    <p className="text-sm uppercase tracking-wide mb-2 opacity-90">{room.category}</p>
                                    <h3 className="text-3xl font-bold mb-4">{room.title}</h3>
                                    <button className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 group">
                                        {room.buttonText}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomShowcases;