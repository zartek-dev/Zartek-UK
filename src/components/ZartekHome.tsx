import React from 'react';
import { motion } from 'motion/react';

const ZartekHome: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden text-white font-sans selection:bg-[#00eeff] selection:text-black">

            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00eeff]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"
            />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/40 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold tracking-tighter font-display"
                >
                    ZARTEK <span className="text-[#00eeff]">UK</span>
                </motion.div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    {['Services', 'Work', 'About', 'Insights'].map((item, index) => (
                        <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="hover:text-white transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block px-6 py-2.5 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer"
                >
                    Contact Us
                </motion.button>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#00eeff] animate-pulse"></span>
                    <span className="text-xs font-medium tracking-wide uppercase text-gray-300">Future of Enterprise</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6"
                >
                    Build the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Unimaginable</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light"
                >
                    We craft high-performance digital solutions that redefine industries.
                    Expertise in AI, Cloud, and Next-Gen Web Technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-[#00eeff] text-black font-bold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,238,255,0.5)] cursor-pointer"
                    >
                        <span className="relative z-10">Book a Consultation</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg border border-white/20 transition-colors backdrop-blur-sm font-medium cursor-pointer"
                    >
                        View Our Work
                    </motion.button>
                </motion.div>

            </main>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        </div>
    );
};

export default ZartekHome;
