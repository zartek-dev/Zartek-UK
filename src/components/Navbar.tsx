import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
    currentView: 'home' | 'industries' | 'services' | 'success-stories' | 'about' | 'contact';
    onViewChange: (view: 'home' | 'industries' | 'services' | 'success-stories' | 'about' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
    const navItems = [
        { name: 'Home', view: 'home' as const },
        { name: 'Services', view: 'services' as const },
        { name: 'Industries', view: 'industries' as const },
        { name: 'Success Stories', view: 'success-stories' as const },
        { name: 'About Us', view: 'about' as const },
        { name: 'Contact Us', view: 'contact' as const },
    ];

    const handleNavClick = (item: { name: string; view?: 'home' | 'industries' | 'services' | 'success-stories' | 'about' | 'contact'; href?: string }) => {
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
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/80 border-b border-gray-100">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold tracking-tighter font-display text-slate-900 cursor-pointer"
                onClick={() => handleNavClick({ name: 'Home', view: 'home' })}
            >
                ZARTEK <span className="text-black">UK</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                    <motion.button
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onClick={() => handleNavClick(item)}
                        className={`text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${(item.view && currentView === item.view) ? 'text-black' : 'text-slate-400 hover:text-slate-900'
                            }`}
                    >
                        {item.name}
                    </motion.button>
                ))}
            </div>

            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleNavClick({ name: 'Contact Us', view: 'contact' })}
                className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
            >
                Start Your Journey
            </motion.button>
        </nav>
    );
};

export default Navbar;
