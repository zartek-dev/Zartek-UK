import React from 'react';
import { motion } from 'motion/react';
import Hero from './Hero';
import TheShift from './TheShift';
import Solutions from './Solutions';
import CaseStudy from './CaseStudy';
import Methodology from './Methodology';
import WhyZartek from './WhyZartek';
import Contact from './Contact';

interface ZartekHomeProps { }

const ZartekHome: React.FC<ZartekHomeProps> = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden text-slate-900 font-sans selection:bg-slate-900 selection:text-white">

            {/* Background Blurs - Refined Apple Style */}
            <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-50 blur-[150px] rounded-full pointer-events-none"
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
            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

        </div>
    );
};

export default ZartekHome;
