import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
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
        <section className="relative z-10 py-32 px-6 md:px-12 bg-[#f8fbff]/50">
            <div className="max-w-7xl mx-auto">
                {/* Values Sub-section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00eeff]">Why Choose Zartek</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 text-black">Built for Business Excellence</h2>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">We combine local expertise with global innovation to deliver AI solutions that drive measurable ROI.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#003366]">{v.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* About Mission Sub-section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-blue-50 pt-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00eeff]">About Zartek UK</span>
                        <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight mt-6 mb-8 text-black">
                            Bridging Silicon Valley Tech with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">London Business Heritage</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                Founded by a collective of ex-FAANG engineers and London-based strategy consultants, Zartek was born from a simple observation: UK enterprises have the data, but often lack the specialized roadmap to leverage generative AI effectively.
                            </p>
                            <p>
                                We aren't just a dev shop. We are your local partners in digital transformation. From our headquarters in Shoreditch, we work intimately with FTSE 100 companies and high-growth startups to deploy AI that is ethical, explainable, and exceptionally powerful.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                                ))}
                            </div>
                            <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 group cursor-pointer">
                                Learn more about our team <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-gray-900 to-black overflow-hidden shadow-2xl border border-white/10 group">
                            {/* 3D-like Visualization Placeholder Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full border border-blue-500/30 animate-[ping_3s_linear_infinite]" />
                                <div className="absolute w-48 h-48 rounded-full border border-cyan-400/50 animate-[pulse_2s_linear_infinite]" />
                                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl opacity-20" />
                                <div className="z-10 text-center">
                                    <div className="text-cyan-400 text-xs font-bold tracking-[.3em] uppercase mb-2">Neural Network</div>
                                    <div className="text-white text-5xl font-black opacity-10">ZRTK</div>
                                </div>
                            </div>

                            {/* Project Label Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Current Project</div>
                                        <div className="text-white font-bold">FinTech Risk Analysis Engine</div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[80px]" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/10 blur-[80px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
