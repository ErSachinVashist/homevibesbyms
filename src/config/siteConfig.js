// Site configuration file - All static content consolidated
import { Instagram, MessageCircleHeart as Whatsapp } from 'lucide-react';
import mcbox from '/mcbox.png';
import nameplate from '/nameplate.png';


export const siteConfig = {
    // Brand Information
    brand: {
        name: 'HomeVibesByMS',
        fullName: 'HomeVibes Decor',
        establishedYear: '2020',
        tagline: 'Transforming spaces with beautiful home decor and accessories since 2020.',
        contact: {
            email: 'hello@homevibes.com',
            phone: '+1 (555) 123-4567',
            address: {
                street: '456 Decor Lane',
                city: 'Style City, SC 67890'
            }
        }
    },

    // Navigation Configuration
    navigation: {
        main: [
            { name: 'Home', href: '#home' },
            // { name: 'Decor', href: '#categories' },
            // { name: 'Inspiration', href: '#rooms' },
            { name: 'Collections', href: '#products' },
            { name: 'Contact', href: '#contact' }
        ],
        footer: {
            quickLinks: [
                { name: 'About Us', href: '#' },
                { name: 'Decor Collections', href: '#' },
                { name: 'Design Blog', href: '#' },
                { name: 'Contact', href: '#' }
            ],
            decorStyles: [
                { name: 'Wall Art', href: '#' },
                { name: 'Lighting', href: '#' },
                { name: 'Textiles', href: '#' },
                { name: 'Plants & Vases', href: '#' }
            ],
            legal: [
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookie Policy', href: '#' }
            ]
        }
    },

    // Hero Section Content
    hero: {
        badge: {
            company: 'MSDecor',
            established: 'Est. 2025'
        },
        announcement: 'NEW COLLECTION',
        title: 'Asthetic',
        subtitle: 'Decor',
        cta: 'Explore Collection'
    },

    // Product Categories
    categories: {
        sectionTitle: 'Explore',
        sectionSubtitle: 'decor styles',
        stats: {
            icon: '🏠',
            category: 'Home Decor',
            description: 'Seasonal Collections'
        },
        ctaText: 'BROWSE ALL DECOR',
        items: [
            {
                id: 1,
                name: 'Wall Art',
                icon: '🖼️',
                bgColor: 'bg-purple-100',
                hoverColor: 'hover:bg-purple-200',
            },
            {
                id: 2,
                name: 'Lighting',
                icon: '💡',
                bgColor: 'bg-amber-100',
                hoverColor: 'hover:bg-amber-200',
            },
            {
                id: 3,
                name: 'Textiles',
                icon: '🏺',
                bgColor: 'bg-rose-100',
                hoverColor: 'hover:bg-rose-200',
            }
        ]
    },

    // Room Showcases
    roomShowcases: {
        rooms: [
            {
                id: 1,
                badge: 'DECOR INSPIRATION',
                title: 'Cozy Living',
                cta: 'Get Ideas',
                backgroundClass: 'bg-gradient-to-br from-gray-200 to-gray-300'
            },
            {
                id: 2,
                badge: 'STYLING GUIDE',
                title: 'Kitchen Decor',
                cta: 'Explore Style',
                backgroundClass: 'bg-gradient-to-br from-gray-100 to-gray-200'
            }
        ]
    },

    // Hot Products Section
    hotProducts: {
        sectionTitle: 'Featured Decor',
        categories: [
            { name: 'New Arrivals', active: true },
            // { name: 'Customer Favorites', active: false },
            // { name: 'Trending Decor', active: false }
        ],
        ctaText: 'Browse All Decor',
        products: [
            {
                id: 1,
                name: 'Name Plates',
                originalPrice: 4500,
                salePrice: 3500,
                rating: 5.0,
                reviews: 15,
                badge: 'HOT',
                badgeColor: 'bg-red-500',
                image: 'wall-art',
                color: 'bg-amber-400',
                sold: '12',
                image: nameplate
            },
            {
                id: 2,
                name: 'Circuit box covers',
                originalPrice: 4000,
                salePrice: 3000,
                rating: 4.8,
                reviews: 23,
                badge: 'HOT',
                badgeColor: 'bg-orange-500',
                image: 'ceramic-vase',
                color: 'bg-orange-300',
                sold: '7',
                image: mcbox
            }
        ]
    },

    // Social Media Links
    socialMedia: [
        // { name: 'Facebook', icon: Facebook, href: '#' },
        // { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/doorvibesbyms' },
        { name: 'WhatsApp', icon: Whatsapp, href: 'https://wa.me/8860496464?text=%22hi,%20i%20am%20intrested%20in%20your%20decors%22' },
    ],

    // Copyright Information
    copyright: {
        year: '2025',
        company: 'HomeVibes'
    }
};

// Animation Configuration
export const animationConfig = {
    scrollOffset: 80, // Offset for fixed header
    intersectionThreshold: {
        header: 0.2,
        content: 0.2,
        grid: 0.1,
        image: 0.3
    },
    delays: {
        badge: 200,
        announcement: 300,
        title: 400,
        cta: 600,
        staggerBase: 150
    }
};

// Theme Configuration
export const themeConfig = {
    colors: {
        primary: {
            50: '#fff8f1',
            100: '#ffedd3',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c'
        }
    },
    gradients: {
        hero: 'from-gray-50 via-green-50 to-gray-100',
        asthetic: 'from-orange-100 to-amber-200',
        decorDisplay: 'from-amber-400 to-orange-500'
    }
};