import React from 'react';
import { motion } from 'motion/react';

const TheShift: React.FC = () => {
    const valueProps = [
        {
            title: "24/7 Intelligent Engagement",
            desc: "Instant responses without latency, powered by context-aware AI agents."
        },
        {
            title: "Scalable & Efficient",
            desc: "Handle 1,000x volume without increasing overhead or compromising quality."
        },
        {
            title: "Data Driven Trust",
            desc: "Verified outputs based on your proprietary data for guaranteed accuracy."
        }
    ];

    return (
        <section className="relative z-10 py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-6 text-black">
                            The Shift in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Customer Expectations</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Conversational AI is no longer a luxury—it's the new standard.
                            Users expect instant, intelligent, and personalized responses at every touchpoint.
                            We help enterprises move beyond simple chatbots to sophisticated AI agents.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {valueProps.map((prop, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00eeff]/50 transition-colors group shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-5 h-5 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-black transition-colors">{prop.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{prop.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheShift;
