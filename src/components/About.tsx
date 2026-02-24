import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {
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
            title: "Global Presence",
            desc: "We maintain a global presence with strategic offices in India, Canada, and Qatar.",
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
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            <Helmet>
                <title>About Zartek UK | Leading AI Company</title>
                <meta name="description" content="Zartek UK is a collective of ex-FAANG engineers and consultants, helping enterprises architect the future with AI." />
            </Helmet>
            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.05, 1, 0.05], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-50 blur-[150px] rounded-full pointer-events-none"
            />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-32">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400"
                        >
                            About Zartek UK
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold font-display mt-4 mb-8 leading-tight tracking-tight text-slate-900"
                        >
                            Bridging Silicon Valley Tech with <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Global Business Heritage</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-3xl space-y-6 text-xl text-slate-600 font-light leading-relaxed"
                        >
                            <p>
                                Founded by a collective of ex-FAANG engineers and global strategy consultants, Zartek was born from a simple observation: Enterprises have the data, but often lack the specialized roadmap to leverage generative AI effectively.
                            </p>
                            <p>
                                We aren't just a dev shop. We are your global partners in digital transformation. From our strategic offices in India, Canada, and Qatar, we work intimately with Fortune 500 companies and high-growth startups to deploy AI that is ethical, explainable, and exceptionally powerful.
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
                                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 backdrop-blur-sm hover:border-black/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-black/5 text-slate-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{v.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-12 md:p-20 rounded-[3rem] bg-slate-900 text-white overflow-hidden group shadow-2xl"
                    >
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build the Future?</h2>
                            <p className="text-white/60 text-lg mb-10">
                                Whether you're a startup looking to scale or an enterprise aiming to optimize, our team is here to guide you through the AI landscape.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
                            >
                                Start Your AI Journey
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default About;
