import React from 'react';
import { motion } from 'motion/react';

interface AboutProps {
    onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
    const values = [
        {
            title: "Strategy First",
            desc: "We don't just build models; we build business cases. Our consultation begins with a deep dive into your operational bottlenecks to ensure AI solves real problems, not hypothetical ones.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.482V4.518a2 2 0 011.553-1.954l5.447-2.724m0 20l5.447-2.724A2 2 0 0017 15.482V4.518a2 2 0 00-1.447-1.954l-5.447-2.724m0 20V4m0 0l-5.447 2.724" />
                </svg>
            )
        },
        {
            title: "Local UK Presence",
            desc: "Based in the heart of London, we offer on-site workshops, face-to-face strategy sessions, and a team that understands the UK market nuances, regulations, and business culture.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: "Secure & Compliant",
            desc: "Enterprise-grade security is our baseline. We specialize in GDPR-compliant AI architectures, ensuring your data sovereignty and customer privacy are never compromised.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-[#00eeff] selection:text-black overflow-hidden font-sans">
            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00eeff]/20 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none"
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/5">
                <div className="text-2xl font-bold tracking-tighter font-display">
                    ZARTEK <span className="text-[#00eeff]">UK</span>
                </div>
                <button
                    onClick={onBack}
                    className="px-6 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer"
                >
                    Back to Home
                </button>
            </nav>

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-32">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00eeff]"
                        >
                            About Zartek UK
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold font-display mt-4 mb-8 leading-tight tracking-tight"
                        >
                            Bridging Silicon Valley Tech with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eeff] to-purple-400">London Business Heritage</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-3xl space-y-6 text-xl text-gray-400 font-light leading-relaxed"
                        >
                            <p>
                                Founded by a collective of ex-FAANG engineers and London-based strategy consultants, Zartek was born from a simple observation: UK enterprises have the data, but often lack the specialized roadmap to leverage generative AI effectively.
                            </p>
                            <p>
                                We aren't just a dev shop. We are your local partners in digital transformation. From our headquarters in Shoreditch, we work intimately with FTSE 100 companies and high-growth startups to deploy AI that is ethical, explainable, and exceptionally powerful.
                            </p>
                        </motion.div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#00eeff]/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#00eeff]/20 text-[#00eeff] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,238,255,0.2)]">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#00eeff]/5 to-purple-500/5 border border-white/5 overflow-hidden group"
                    >
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build the Future?</h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Whether you're a startup looking to scale or an enterprise aiming to optimize, our team is here to guide you through the AI landscape.
                            </p>
                            <button
                                onClick={onBack}
                                className="px-10 py-4 bg-[#00eeff] text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(0,238,255,0.4)] cursor-pointer"
                            >
                                Start Your AI Journey
                            </button>
                        </div>
                        {/* Decorative orbs in the card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00eeff]/10 blur-[100px] -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] -ml-32 -mb-32" />
                    </motion.div>
                </div>
            </main>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default About;
