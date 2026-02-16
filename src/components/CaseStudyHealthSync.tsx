import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

interface CaseStudyHealthSyncProps {
    onBack: () => void;
}

const CaseStudyHealthSync: React.FC<CaseStudyHealthSyncProps> = ({ onBack }) => {
    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            <Helmet>
                <title>HealthSync Case Study | Zartek UK</title>
                <meta name="description" content="How Zartek UK helped HealthSync achieve 2.4x faster triage through automated patient data processing and predictive diagnostics." />
            </Helmet>

            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <button
                        onClick={onBack}
                        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Success Stories
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                            HealthTech
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900">
                            HealthSync
                        </h1>
                        <p className="text-2xl text-slate-600 font-light">
                            Automated patient triage and predictive diagnostics for 2.4x faster critical care
                        </p>
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
                        >
                            <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">2.4x</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Faster Triage</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
                        >
                            <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">94%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Diagnostic Accuracy</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
                        >
                            <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">60%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Reduced Wait Times</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="relative z-10 py-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto space-y-20">
                    {/* Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">The Challenge</h2>
                        <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                            HealthSync's emergency departments were overwhelmed with patient data processing, causing delays in critical care delivery. Medical staff spent valuable time on administrative tasks instead of patient care.
                        </p>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            They needed an intelligent triage system that could rapidly process patient data, identify critical cases, and provide predictive diagnostic insights to medical staff.
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12"
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Our Solution</h2>
                        <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                            We implemented an AI-powered triage and diagnostic support system that automates patient data processing and provides real-time clinical decision support:
                        </p>
                        <ul className="space-y-4 text-lg text-slate-600">
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>Automated patient data extraction from multiple sources</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>Predictive diagnostics using medical knowledge graphs</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>Priority-based triage with real-time risk assessment</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>HIPAA-compliant data processing and storage</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">The Results</h2>
                        <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                            The AI triage system reduced patient processing time by 2.4x, allowing medical staff to focus on critical cases immediately. Diagnostic accuracy improved to 94%, significantly enhancing patient outcomes.
                        </p>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            Patient wait times decreased by 60%, and staff satisfaction improved as they could dedicate more time to direct patient care rather than administrative tasks.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-32 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16"
                    >
                        <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
                            Ready to Transform Your Platform?
                        </h2>
                        <p className="text-lg text-slate-600 font-light mb-8">
                            Let's discuss how we can help you achieve similar results.
                        </p>
                        <button
                            onClick={onBack}
                            className="px-8 py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl"
                        >
                            View More Case Studies
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default CaseStudyHealthSync;
