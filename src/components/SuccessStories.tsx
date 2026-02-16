import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const SuccessStories: React.FC = () => {
    const stories = [
        {
            client: "SurveySparrow",
            industry: "Experience Management",
            outcome: "40% Higher Completion",
            desc: "Optimized mobile experience and neural routing for feedback loops, resulting in a significant increase in user engagement and completion rates.",
            stat: "40%",
            label: "Higher Completion"
        },
        {
            client: "FinTrack AI",
            industry: "FinTech",
            outcome: "99.9% Fraud Accuracy",
            desc: "Implementation of real-time anomaly detection layers that identify fraudulent patterns before transaction finalization.",
            stat: "99.9%",
            label: "Detection Rate"
        },
        {
            client: "HealthSync",
            industry: "HealthTech",
            outcome: "2.4x Faster Triage",
            desc: "Automated patient data processing and predictive diagnostics triage, allowing medical staff to focus on critical cases instantly.",
            stat: "2.4x",
            label: "Faster Triage"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans pt-32 pb-20 px-6 md:px-12">
            <Helmet>
                <title>Success Stories & Impact | Zartek UK</title>
                <meta name="description" content="Discover how Zartek UK has helped enterprises achieve verifiable results through custom AI development and strategic consultation." />
            </Helmet>
            {/* Background Materials */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-100 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-50 blur-[150px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 block"
                    >
                        Impact & Results
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-bold font-display tracking-tightest leading-none mb-8 text-slate-900"
                    >
                        Success <br />
                        <span className="text-slate-100">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        How we’ve helped enterprise partners architect the intelligence era with verifiable results.
                    </motion.p>
                </div>

                {/* Grid of Stories / Liquid Glass Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", damping: 20 }}
                            className="group relative p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 backdrop-blur-2xl hover:bg-slate-50 transition-all hover:border-black/10 overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">{story.client}</h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{story.industry}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-black tracking-tighter text-slate-200 group-hover:text-black transition-colors">{story.stat}</div>
                                        <div className="text-[8px] font-bold uppercase tracking-widest text-slate-300">{story.label}</div>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                                    {story.desc}
                                </p>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-black transition-colors cursor-pointer">FULL CASE STUDY →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 p-16 rounded-[4rem] bg-slate-50 border border-slate-100 backdrop-blur-3xl text-center relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="text-6xl text-slate-100 font-black mb-8 leading-none">“</div>
                        <p className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-12 italic">
                            Zartek UK didn’t just give us a tool; they gave us a <span className="text-black font-medium">neural competitive advantage</span>.
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-slate-900 mb-4" />
                            <h4 className="font-bold text-lg text-slate-900">Alex Rutherford</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">CTO, Global Logistics Group</p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default SuccessStories;
