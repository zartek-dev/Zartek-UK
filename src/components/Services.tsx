import React from 'react';
import { motion } from 'motion/react';

const Services: React.FC = () => {
    const services = [
        {
            title: "Conversational AI",
            desc: "Advanced LLM implementations for automated support and sales intelligence. We build models that understand your business dialect.",
            tag: "Intelligence",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        },
        {
            title: "AI Automation Systems",
            desc: "Streamlining operations with intelligent agents that automate complex workflows and document auditing with high precision.",
            tag: "Efficiency",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Custom AI Applications",
            desc: "Bespoke, AI-native software architectures tailored to specific industry needs, ensuring seamless stack integration and security.",
            tag: "Architecture",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    const methodology = [
        { title: "Discover", desc: "Auditing workflows to identify high-impact AI opportunities." },
        { title: "Design", desc: "Architecting solutions with a focus on security and UX." },
        { title: "Build", desc: "Rapid engineering and fine-tuning using proprietary data." },
        { title: "Optimise", desc: "Continuous performance monitoring and refinement." }
    ];

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-[#00eeff] selection:text-black overflow-hidden font-sans">
            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00eeff]/10 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="fixed bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"
            />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-32 text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00eeff]"
                        >
                            Specialized Capabilities
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-bold font-display mt-4 mb-8 leading-tight tracking-tight"
                        >
                            Architecting the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eeff] via-white to-purple-400">Intelligence Era</span>
                        </h1 >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
                        >
                            Zartek UK delivers premium AI consultation and bespoke neural infrastructure for forward-thinking enterprises across specific vertical markets.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-[#00eeff]/30 transition-all group relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-[#00eeff]/20 text-[#00eeff] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,238,255,0.2)]">
                                        {service.icon}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#00eeff]/60 mb-2 block">{service.tag}</span>
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00eeff]/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#00eeff]/10 transition-colors" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Methodology Section */}
                    <div className="mb-32">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00eeff]">The Process</span>
                            <h2 className="text-4xl md:text-6xl font-bold font-display mt-4">Autonomous Workflows</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />

                            {methodology.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative z-10 text-center px-4"
                                >
                                    <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)] group hover:border-[#00eeff]/50 transition-colors">
                                        <span className="text-3xl font-black text-white/10 group-hover:text-[#00eeff] transition-colors">0{i + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-[#00eeff]/10 to-transparent border border-white/5 text-center relative overflow-hidden"
                    >
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Premium AI Consultation</h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Whether you're fine-tuning open-source models or building a multi-agent ecosystem, our team delivers the roadmap for absolute performance.
                            </p>
                            <button className="px-12 py-5 bg-[#00eeff] text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(0,238,255,0.5)] cursor-pointer">
                                Consult with an Expert
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
                    </motion.div>
                </div>
            </main>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default Services;
