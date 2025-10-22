import { useState, useEffect } from 'react';

// Animation delay utility classes for Tailwind
export const animationDelays = {
    0: 'animation-delay-0',
    100: 'animation-delay-100',
    200: 'animation-delay-200',
    300: 'animation-delay-300',
    500: 'animation-delay-500',
    700: 'animation-delay-700',
    1000: 'animation-delay-1000',
};

// Staggered animation helper
export const getStaggerDelay = (index, baseDelay = 100) => {
    return `${index * baseDelay}ms`;
};

// Scroll direction detection
export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            setLastScrollY(scrollY > 0 ? scrollY : 0);
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection, lastScrollY]);

    return scrollDirection;
};