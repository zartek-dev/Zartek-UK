import React from 'react';
import { motion } from 'motion/react';

interface IndustriesProps { }

const Industries: React.FC<IndustriesProps> = () => {
    const industries = [
        {
            title: "FinTech",
            desc: "Fraud detection algorithms, algorithmic trading strategies, and automated compliance monitoring systems tailored for the City of London.",
            tag: "Finance"
        },
        {
            title: "Healthcare",
            desc: "Predictive diagnostics, patient data management with LLMs, and drug discovery acceleration for biotech pioneers.",
            tag: "Life Sciences"
        },
        {
            title: "Retail",
            desc: "Hyper-personalization engines, dynamic pricing models, and supply chain forecasting for global commerce brands.",
            tag: "E-Commerce"
        },
        {
            title: "Legal",
            desc: "Contract analysis automation, precedent prediction, and legal research enhancement tools.",
            tag: "LegalStack"
        },
        {
            title: "Logistics",
            desc: "Route optimization, fleet management autonomy, and predictive maintenance for global distribution networks.",
            tag: "Supply Chain"
        },
        {
            title: "Manufacturing",
            desc: "Digital twins, anomaly detection on assembly lines, and smart robotics integration for Industry 4.0.",
            tag: "Industrial"
        }
    ];

    const services = [
        {
            title: "Custom LLM Training",
            desc: "We fine-tune open-source foundational models on your proprietary enterprise data, ensuring maximum security and a model that speaks your business dialect perfectly.",
            features: ["On-premise Deployment", "Domain-Specific Tuning", "Security Compliance"]
        },
        {
            title: "AI Strategy Roadmap",
            desc: "Our strategists identify high-impact AI opportunities, assessing technical feasibility and ROI before writing a single line of code.",
            features: ["Gap Analysis", "3-Year Roadmap", "Buy vs. Build Advisory"]
        },
        {
            title: "Autonomous Agent Workflows",
            desc: "Multi-agent systems capable of reasoning, planning, and executing complex workflows across your existing software stack autonomously.",
            features: ["Auto-GPT Implementations", "Human-in-the-loop Safeguards", "API Integration"]
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="fixed bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-slate-50 blur-[150px] rounded-full pointer-events-none"
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
                            Vertical Expertise
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold font-display mt-4 mb-8 leading-tight tracking-tight text-slate-900"
                        >
                            Deep Intelligence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">Across Industries</span>
                        </motion.h1>
                        <p className="text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
                            Zartek UK delivers premium AI consultation and bespoke neural infrastructure for forward-thinking enterprises across specific vertical markets.
                        </p>
                    </div>

                    <section className="mb-32">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Industries We Transform</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-black/20 transition-all group shadow-sm hover:shadow-md"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-black transition-colors">{item.tag}</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                    <div className="text-slate-900 text-xs font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        EXPLORE SOLUTIONS <span>→</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-32">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Specialized Capabilities</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {services.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm"
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                                    <ul className="grid gap-3">
                                        {item.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                </motion.div>
        </div>
            </main >
        </div >
    );
};

export default Industries;
