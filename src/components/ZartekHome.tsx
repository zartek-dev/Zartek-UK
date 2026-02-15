import React from 'react';
import { motion } from 'motion/react';
import Hero from './Hero';
import TheShift from './TheShift';
import Solutions from './Solutions';
import CaseStudy from './CaseStudy';
import Methodology from './Methodology';
import WhyZartek from './WhyZartek';
import Contact from './Contact';
import Footer from './Footer';

interface ZartekHomeProps { }

const ZartekHome: React.FC<ZartekHomeProps> = () => {
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



            {/* Sections */}
            <div className="relative">
                <Hero />
                <div id="the-shift"><TheShift /></div>
                <div id="solutions"><Solutions /></div>
                <div id="case-studies"><CaseStudy /></div>
                <div id="methodology"><Methodology /></div>
                <WhyZartek />
                <Contact />
                <Footer />
            </div>

            {/* Grid Pattern Overlay - Subtler for Light Mode */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

        </div>
    );
};

export default ZartekHome;
