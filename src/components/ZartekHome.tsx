import React from 'react';
import { motion } from 'motion/react';
import Hero from './Hero';
import TheShift from './TheShift';
import Solutions from './Solutions';
import CaseStudy from './CaseStudy';
import Methodology from './Methodology';
import WhyZartek from './WhyZartek';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

interface ZartekHomeProps {
    onViewChange: (view: 'home' | 'industries') => void;
}

const ZartekHome: React.FC<ZartekHomeProps> = ({ onViewChange }) => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden text-black font-sans selection:bg-[#00eeff] selection:text-black">

            {/* Background Blurs - Adjusted for Light Mode */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00eeff]/20 blur-[150px] rounded-full pointer-events-none mix-blend-multiply"
            />
            <motion.div
                animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply"
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-white/50 border-b border-gray-100">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold tracking-tighter font-display text-black"
                >
                    ZARTEK <span className="text-[#00eeff]">UK</span>
                </motion.div>

                <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <button
                        onClick={() => onViewChange('industries')}
                        className="hover:text-black transition-colors cursor-pointer"
                    >
                        Industries
                    </button>
                    {['Solutions', 'Case Studies', 'Methodology', 'About', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="hover:text-black transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-6 py-2.5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Contact Us
                </motion.button>
            </nav>

            {/* Sections */}
            <div className="relative">
                <Hero />
                <div id="the-shift"><TheShift /></div>
                <div id="solutions"><Solutions /></div>
                <div id="case-studies"><CaseStudy /></div>
                <div id="methodology"><Methodology /></div>
                <WhyZartek />
                <About />
                <div id="about"><Team /></div>
                <Contact />
                <Footer />
            </div>

            {/* Grid Pattern Overlay - Subtler for Light Mode */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

        </div>
    );
};

export default ZartekHome;
