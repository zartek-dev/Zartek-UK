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
        <div className="min-h-screen bg-white text-black selection:bg-[#00eeff] selection:text-black pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >

                    <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight leading-tight mb-6">
                        Architecting the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">Intelligence Era</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
                        Zartek UK delivers premium AI consultation and bespoke neural infrastructure for forward-thinking enterprises across specific vertical markets.
                    </p>
                </motion.div>

                <section className="mb-32">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">Industries We Transform</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black transition-all group shadow-sm hover:shadow-md"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">{item.tag}</span>
                                <h3 className="text-2xl font-bold mt-2 mb-4 text-black">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="text-black text-xs font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    EXPLORE SOLUTIONS <span>→</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-32">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">Specialized Capabilities</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-8 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                                <ul className="grid gap-3">
                                    {item.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-[3rem] bg-black text-white text-center shadow-2xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to Future-Proof Your Enterprise?</h2>
                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join the leading London organizations leveraging Zartek UK's expertise to dominate their sectors through Applied AI.
                    </p>
                    <button className="px-10 py-5 bg-white text-black font-bold rounded-xl text-lg hover:scale-105 transition-transform cursor-pointer">
                        Start Here
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Industries;
