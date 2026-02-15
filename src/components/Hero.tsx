import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
    return (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 backdrop-blur-md mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-[#00eeff] animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide uppercase text-gray-500">Future of Enterprise AI</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 text-black"
            >
                AI That Works <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">For Your Business.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light"
            >
                Not The Other Way Around. Scale operations and eliminate bottlenecks with custom AI automation. We build high-performance intelligence systems designed for enterprise-grade complexity.
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
                    className="group relative px-8 py-4 bg-black text-white font-bold rounded-lg overflow-hidden cursor-pointer"
                >
                    <span className="relative z-10">Start Your AI Project</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.02)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg border border-black/10 transition-colors font-medium cursor-pointer text-gray-800"
                >
                    Explore Services
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-20 text-xs font-medium text-gray-400 uppercase tracking-widest"
            >
                Trusted By Ambitious Companies Building The Future
            </motion.div>
        </main>
    );
};

export default Hero;
