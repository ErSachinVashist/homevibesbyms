import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const HotProducts = () => {
    const { hotProducts } = siteConfig;
    const products = hotProducts.products
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
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{hotProducts.sectionTitle}</h2>

                        {/* Category Tabs */}
                        <div className="flex space-x-8">
                            {hotProducts.categories.map((category, index) => (
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
                    {/* <button className="mt-4 lg:mt-0 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200">
                        {hotProducts.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button> */}
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
                                    <img
                                        src={product.image}
                                        alt="Home Decor"
                                        className="h-full"
                                    />

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
                                    Sold: {product.sold}
                                </p>

                                {/* Pricing */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-gray-900">
                                        ₹{product.salePrice}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                        ₹{product.originalPrice}
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