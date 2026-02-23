import React from 'react';
import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Blogs', path: '/blog' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/80 border-b border-gray-100">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="cursor-pointer"
                onClick={() => navigate('/')}
            >
                <img
                    src="/assets/zartek-logo.png"
                    alt="Zartek UK - AI Development Company London"
                    className="h-9 w-auto"
                />
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                    >
                        <NavLink
                            to={item.path}
                            className={({ isActive }: { isActive: boolean }) =>
                                `text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${isActive ? 'text-black' : 'text-slate-400 hover:text-slate-900'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </motion.div>
                ))}
            </div>

            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
            >
                Start Your Journey
            </motion.button>
        </nav>
    );
};

export default Navbar;
