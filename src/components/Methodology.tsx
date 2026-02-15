import React from 'react';
import { motion } from 'motion/react';

const Methodology: React.FC = () => {
    const steps = [
        {
            title: "Discover",
            desc: "We audit your existing data, workflows, and pain points to identify high-impact AI opportunities."
        },
        {
            title: "Design",
            desc: "We architect the solution, focusing on UX, data security, and seamless integration with your tech stack."
        },
        {
            title: "Build",
            desc: "Rapid engineering and fine-tuning of models using proprietary data to ensure accuracy and relevance."
        },
        {
            title: "Deploy & Optimise",
            desc: "Seamless rollout with continuous monitoring and iterative refinement based on real-world performance."
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-black">Our Methodology</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A rigorous, enterprise-grade approach to building intelligent systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {/* Line connector for large screens */}
                    <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-black/5" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative z-10 text-center px-4"
                        >
                            <div className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center mx-auto mb-8 group hover:border-black transition-colors duration-500 shadow-sm">
                                <span className="text-xl font-bold text-gray-400 group-hover:text-black">0{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-black">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
