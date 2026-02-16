import React from 'react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
    const experts = [
        {
            name: "David Sterling",
            role: "Chief AI Architect",
            desc: "Former DeepMind researcher specializing in NLP and predictive modeling for fintech.",
            initials: "DS"
        },
        {
            name: "Sarah Jenkins",
            role: "Head of Data Science",
            desc: "PhD in Computational Statistics from Imperial College. Expert in large-scale data pipelines.",
            initials: "SJ"
        },
        {
            name: "Marcus Thorne",
            role: "Enterprise Solutions Lead",
            desc: "Bridging the gap between technical complexity and business value for Fortune 500 clients.",
            initials: "MT"
        },
        {
            name: "Elena Rodriguez",
            role: "Machine Learning Engineer",
            desc: "Specializes in computer vision and generative AI models for creative industries.",
            initials: "ER"
        },
        {
            name: "James Wu",
            role: "Cloud Infrastructure Architect",
            desc: "AWS Certified Solutions Architect ensuring scalable and secure AI deployments.",
            initials: "JW"
        },
        {
            name: "Priya Patel",
            role: "Strategy Consultant",
            desc: "Helping startups navigate the AI landscape and secure Series A funding.",
            initials: "PP"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-slate-50 blur-[150px] rounded-full pointer-events-none"
            />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-32">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400"
                        >
                            Get in Touch
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold font-display mt-4 mb-8 leading-tight tracking-tight text-slate-900"
                        >
                            Let's Build the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">Intelligent Future.</span>
                        </motion.h1>
                        <p className="text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
                            Tell us about your project or idea. Our AI consultants will review your request and get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 backdrop-blur-3xl"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-black transition-colors outline-none text-slate-900" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Work Email</label>
                                        <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-black transition-colors outline-none text-slate-900" placeholder="john@company.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Industry</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-black transition-colors outline-none text-slate-900 appearance-none">
                                        <option>FinTech</option>
                                        <option>Healthcare</option>
                                        <option>Retail</option>
                                        <option>Logistics</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Details</label>
                                    <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-black transition-colors outline-none text-slate-900 resize-none" placeholder="How can we help you scale with AI?"></textarea>
                                </div>
                                <button className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl">
                                    Submit Request
                                </button>
                            </form>
                        </motion.div>

                        {/* Office Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6 text-slate-900">London Office</h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Level 39, One Canada Square <br />
                                        Canary Wharf, London E14 5AB <br />
                                        United Kingdom
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-900 font-medium">hello@zartek.co.uk</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-900 font-medium">+44 (0) 20 7123 4567</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Experts Section */}
                    <div className="mt-40">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900">Meet the Experts</h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Our London-based team combines decades of experience in machine learning, data science, and enterprise architecture.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {experts.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-black/20 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-8 group-hover:scale-110 transition-transform shadow-lg">
                                        {item.initials}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{item.name}</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">{item.role}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
