import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const HotProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Autumn Leaf Wall Art',
            originalPrice: 89.00,
            salePrice: 65.00,
            rating: 4.5,
            reviews: 15,
            badge: 'SALE',
            badgeColor: 'bg-red-500',
            image: 'wall-art',
            color: 'bg-amber-400'
        },
        {
            id: 2,
            name: 'Ceramic Vase Set',
            originalPrice: 75.00,
            salePrice: 55.00,
            rating: 4.8,
            reviews: 23,
            badge: 'HOT',
            badgeColor: 'bg-orange-500',
            image: 'ceramic-vase',
            color: 'bg-orange-300'
        },
        {
            id: 3,
            name: 'Boho Throw Pillows',
            originalPrice: 45.99,
            salePrice: 32.99,
            rating: 4.3,
            reviews: 8,
            badge: 'SALE',
            badgeColor: 'bg-red-500',
            image: 'throw-pillows',
            color: 'bg-rose-400'
        },
        {
            id: 4,
            name: 'Macrame Plant Hanger',
            originalPrice: 35.99,
            salePrice: 28.99,
            rating: 4.7,
            reviews: 12,
            badge: 'HOT',
            badgeColor: 'bg-orange-500',
            image: 'macrame-hanger',
            color: 'bg-green-400'
        },
        {
            id: 5,
            name: 'Edison Bulb Lamp',
            originalPrice: 89.99,
            salePrice: 69.99,
            rating: 4.2,
            reviews: 18,
            badge: 'HOT',
            badgeColor: 'bg-orange-500',
            image: 'edison-lamp',
            color: 'bg-yellow-600'
        },
        {
            id: 6,
            name: 'Woven Storage Basket',
            originalPrice: 65.00,
            salePrice: 48.00,
            rating: 4.9,
            reviews: 45,
            badge: 'HOT',
            badgeColor: 'bg-orange-500',
            image: 'storage-basket',
            color: 'bg-amber-300'
        },
        {
            id: 7,
            name: 'Golden Mirror Set',
            originalPrice: 159.99,
            salePrice: 129.99,
            rating: 4.6,
            reviews: 31,
            badge: 'HOT',
            badgeColor: 'bg-orange-500',
            image: 'golden-mirror',
            color: 'bg-yellow-400'
        },
        {
            id: 8,
            name: 'Minimalist Wall Clock',
            originalPrice: 79.99,
            salePrice: 59.99,
            rating: 4.4,
            reviews: 22,
            badge: 'SALE',
            badgeColor: 'bg-red-500',
            image: 'wall-clock',
            color: 'bg-slate-400'
        },
    ];

    const categories = [
        { name: 'New Arrivals', active: true },
        { name: 'Customer Favorites', active: false },
        { name: 'Trending Decor', active: false },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`h-3 w-3 ${index < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Decor</h2>

                        {/* Category Tabs */}
                        <div className="flex space-x-8">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`text-sm font-medium pb-2 border-b-2 transition-colors duration-200 ${category.active
                                        ? 'text-primary-500 border-primary-500'
                                        : 'text-gray-600 border-transparent hover:text-gray-900'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* All Products Link */}
                    <button className="mt-4 lg:mt-0 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200">
                        Browse All Decor
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer"
                        >
                            {/* Product Image */}
                            <div className="relative p-4">
                                <div className={`${product.color} rounded-xl h-48 flex items-center justify-center relative overflow-hidden`}>
                                    {/* Badge */}
                                    <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded`}>
                                        {product.badge}
                                    </span>

                                    {/* Product placeholder */}
                                    <div className="text-white text-center">
                                        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                                        <span className="text-xs opacity-80">{product.image}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                                </div>

                                {/* Product Name */}
                                <h3 className="text-sm font-medium text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                                    {product.name}
                                </h3>

                                {/* Dimensions */}
                                <p className="text-xs text-gray-500 mb-3">
                                    Sold: 20th • 37th • 29th
                                </p>

                                {/* Pricing */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-gray-900">
                                        ${product.salePrice.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotProducts;