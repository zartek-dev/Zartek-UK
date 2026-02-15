import React from 'react';
import { motion } from 'motion/react';

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
        <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00eeff]/30 selection:text-white overflow-hidden font-sans pt-32 pb-20 px-6 md:px-12">
            {/* Apple-style background materials */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block"
                    >
                        Impact & Results
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-bold font-display tracking-tightest leading-none mb-8"
                    >
                        Success <br />
                        <span className="text-white/20">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
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
                            className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:bg-white/[0.06] transition-all hover:border-white/20 overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight">{story.client}</h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#00eeff] mt-1">{story.industry}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-black tracking-tighter text-white group-hover:text-[#00eeff] transition-colors">{story.stat}</div>
                                        <div className="text-[8px] font-bold uppercase tracking-widest text-white/30">{story.label}</div>
                                    </div>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                                    {story.desc}
                                </p>
                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors cursor-pointer">FULL CASE STUDY →</span>
                                </div>
                            </div>

                            {/* Material highlight effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl text-center relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="text-6xl text-[#00eeff]/20 font-black mb-8 leading-none">“</div>
                        <p className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white/90 mb-12 italic">
                            Zartek UK didn’t just give us a tool; they gave us a <span className="text-white font-medium">neural competitive advantage</span>.
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 mb-4" />
                            <h4 className="font-bold text-lg">Alex Rutherford</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">CTO, Global Logistics Group</p>
                        </div>
                    </div>
                    {/* Liquid background for quote */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[#00eeff]/5 blur-[200px] pointer-events-none" />
                </motion.div>
            </main>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default SuccessStories;
