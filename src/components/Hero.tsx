import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center pt-20 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 backdrop-blur-md mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide uppercase text-slate-500">Future of Enterprise AI</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="font-display font-bold text-6xl md:text-8xl tracking-tight leading-[1.1] mb-6 text-slate-900"
            >
                AI That Works <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">For Your Business.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light"
            >
                Not The Other Way Around. Scale operations and eliminate bottlenecks with custom AI automation. We build high-performance intelligence systems designed for enterprise-grade complexity.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center justify-center"
            >
                <Link
                    to="/contact"
                    className="group relative px-8 py-4 bg-black text-white font-bold rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                >
                    <span className="relative z-10">Start Your AI Project</span>
                </Link>

                <Link
                    to="/services"
                    className="px-8 py-4 rounded-lg border border-slate-200 transition-all font-medium cursor-pointer text-slate-800 hover:scale-105 hover:bg-slate-50"
                >
                    Explore Services
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-20 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]"
            >
                Trusted By Ambitious Companies Building The Future
            </motion.div>
        </main>
    );
};

export default Hero;
