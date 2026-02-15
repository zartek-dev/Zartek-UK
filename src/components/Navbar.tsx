import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
    currentView: 'home' | 'industries' | 'services' | 'success-stories' | 'about';
    onViewChange: (view: 'home' | 'industries' | 'services' | 'success-stories' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
    const navItems = [
        { name: 'Home', view: 'home' as const },
        { name: 'Services', view: 'services' as const },
        { name: 'Industries', view: 'industries' as const },
        { name: 'Success Stories', view: 'success-stories' as const },
        { name: 'About Us', view: 'about' as const },
    ];

    const handleNavClick = (item: { name: string; view?: 'home' | 'industries' | 'services' | 'success-stories' | 'about'; href?: string }) => {
        if (item.view) {
            onViewChange(item.view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (item.href) {
            if (currentView !== 'home') {
                onViewChange('home');
                // Small delay to allow home to render before scrolling
                setTimeout(() => {
                    const el = document.querySelector(item.href!);
                    el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const el = document.querySelector(item.href!);
                el?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/5">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold tracking-tighter font-display text-white cursor-pointer"
                onClick={() => handleNavClick({ name: 'Home', view: 'home' })}
            >
                ZARTEK <span className="text-[#00eeff]">UK</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                    <motion.button
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onClick={() => handleNavClick(item)}
                        className={`text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${(item.view && currentView === item.view) ? 'text-[#00eeff]' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {item.name}
                    </motion.button>
                ))}
            </div>

            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                    if (currentView !== 'home') {
                        onViewChange('home');
                        setTimeout(() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    } else {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className="px-6 py-2 bg-[#00eeff] text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(0,238,255,0.3)] cursor-pointer"
            >
                Contact Us
            </motion.button>
        </nav>
    );
};

export default Navbar;
