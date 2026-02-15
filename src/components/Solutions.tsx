import React from 'react';
import { motion } from 'motion/react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: "Conversational AI",
            desc: "Large Language Model (LLM) implementation for customer support and sales automation.",
            tag: "Intelligence"
        },
        {
            title: "AI Automation Systems",
            desc: "Automating internal workflows, data processing, and document intelligence.",
            tag: "Efficiency"
        },
        {
            title: "Custom AI Applications",
            desc: "Bespoke software built from the ground up with AI-native architecture.",
            tag: "Architecture"
        },
        {
            title: "Digital Product Development",
            desc: "End-to-end design and engineering of high-performance web and mobile products.",
            tag: "Product"
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-black">Enterprise AI Solutions</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Specialized services architected for the modern digital landscape and high-performance demands.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#00eeff]/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
                        >
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                                    {item.tag}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed mb-8">{item.desc}</p>
                            </div>
                            <div className="flex items-center gap-2 text-black font-bold text-sm tracking-tight group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                                LEARN MORE <span>→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
