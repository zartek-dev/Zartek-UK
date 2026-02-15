import React from 'react';
import { motion } from 'motion/react';

const WhyZartek: React.FC = () => {
    const reasons = [
        {
            title: "Practical AI Focus",
            desc: "No hype. Just pragmatic solutions that solve real business problems and deliver measurable value."
        },
        {
            title: "London Presence",
            desc: "Local expertise with a global mindset. We're right here to partner with you through every step."
        },
        {
            title: "Long-term Partnerships",
            desc: "We don't just build and leave. We grow with you, optimizing your systems as they scale."
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 md:px-12 bg-gradient-to-b from-transparent to-[#00eeff]/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Why Choose <br />
                            <span className="text-[#00eeff]">Zartek UK?</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                            We aren't just here to build a prototype. We're here to be your long-term AI partner,
                            ensuring your business stays ahead of the curve as technology evolves.
                        </p>
                    </motion.div>

                    <div className="grid gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#00eeff]/10 border border-[#00eeff]/30 flex items-center justify-center text-[#00eeff]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{reason.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyZartek;
