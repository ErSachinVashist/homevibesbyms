// Site configuration file - All static content consolidated
export const siteConfig = {
  // Brand Information
  brand: {
    name: 'HomeVibes',
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
      { name: 'Decor', href: '#categories' },
      { name: 'Inspiration', href: '#rooms' },
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
      company: 'HomeVibes Decor',
      established: 'Est. 2020'
    },
    announcement: 'NEW COLLECTION',
    title: 'Autumn',
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
      { name: 'Customer Favorites', active: false },
      { name: 'Trending Decor', active: false }
    ],
    ctaText: 'Browse All Decor',
    products: [
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
      }
    ]
  },

  // Social Media Links
  socialMedia: [
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' }
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
    autumn: 'from-orange-100 to-amber-200',
    decorDisplay: 'from-amber-400 to-orange-500'
  }
};