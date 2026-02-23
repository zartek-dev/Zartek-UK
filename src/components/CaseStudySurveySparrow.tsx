import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';

const CaseStudySurveySparrow: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            <Helmet>
                <title>SurveySparrow Case Study | Zartek UK</title>
                <meta name="description" content="How Zartek UK helped SurveySparrow achieve 40% higher completion rates through optimized mobile experience and neural routing." />
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
                        onClick={() => navigate('/success-stories')}
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
                            Experience Management
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900">
                            SurveySparrow
                        </h1>
                        <p className="text-2xl text-slate-600 font-light">
                            Optimizing mobile experience and neural routing for 40% higher completion rates
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
                            <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">40%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Higher Completion</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
                        >
                            <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">3.2x</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Faster Response Time</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
                        >
                            <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">85%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mobile Engagement</div>
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
                            SurveySparrow faced declining completion rates on mobile devices, with users abandoning surveys midway through the experience. The existing routing logic didn't adapt to user behavior patterns, resulting in poor engagement metrics.
                        </p>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            They needed an intelligent system that could optimize the survey flow in real-time based on user interactions and device capabilities.
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
                            We implemented a neural routing system that analyzes user behavior patterns in real-time, adapting the survey flow to maximize completion rates. The solution included:
                        </p>
                        <ul className="space-y-4 text-lg text-slate-600">
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>Mobile-first UI optimization with adaptive question rendering</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>Predictive routing based on user engagement signals</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>Real-time feedback loop optimization using machine learning</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-black font-bold">•</span>
                                <span>A/B testing framework for continuous improvement</span>
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
                            Within three months of deployment, SurveySparrow saw dramatic improvements across all key metrics. The neural routing system successfully identified and eliminated friction points in the user journey.
                        </p>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            The 40% increase in completion rates translated directly to higher quality data and improved customer insights, giving SurveySparrow a significant competitive advantage in the experience management space.
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
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl"
                        >
                            Start Your Journey
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default CaseStudySurveySparrow;
