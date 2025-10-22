import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../utils/scrollUtils';

const ProductCategories = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
    const [gridRef, isGridVisible] = useScrollAnimation(0.1);
    const categories = [
        {
            id: 1,
            name: 'Dining Chair',
            icon: '🪑',
            bgColor: 'bg-orange-100',
            hoverColor: 'hover:bg-orange-200',
        },
        {
            id: 2,
            name: 'Sofas',
            icon: '🛋️',
            bgColor: 'bg-gray-100',
            hoverColor: 'hover:bg-gray-200',
        },
        {
            id: 3,
            name: 'Tables',
            icon: '🪑',
            bgColor: 'bg-green-100',
            hoverColor: 'hover:bg-green-200',
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`mb-12 transition-all duration-700 ${isHeaderVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Shop
                        <br />
                        <span className="text-gray-600">by categories</span>
                    </h2>

                    {/* Category Stats */}
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-800 rounded mr-2 flex items-center justify-center">
                                <span className="text-white text-xs">🪑</span>
                            </div>
                            <span>Chair</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium">Office Products</span>
                        </div>
                    </div>

                    {/* See All Categories Link */}
                    <div className="mt-4">
                        <button className="text-sm text-gray-600 hover:text-primary-500 transition-colors duration-200 flex items-center">
                            <span className="border-b border-gray-300 hover:border-primary-500 transition-colors duration-200">
                                SEE ALL CATEGORIES
                            </span>
                            <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                    </div>
                </div>

                {/* Category Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`${category.bgColor} ${category.hoverColor} rounded-2xl p-8 transition-all duration-500 cursor-pointer group hover:scale-105 hover:shadow-lg ${isGridVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: isGridVisible ? `${index * 150}ms` : '0ms'
                            }}
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Category Icon */}
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>

                                {/* Category Name */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {category.name}
                                </h3>

                                {/* Arrow Icon */}
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                    <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-primary-500 transition-colors duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;