import React from 'react';
import { motion } from 'motion/react';

const CaseStudy: React.FC = () => {
    return (
        <section className="relative z-10 py-32 px-6 md:px-12 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200 bg-white group shadow-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-black text-6xl font-bold tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity">IndusGo</div>
                        </div>
                        <div className="absolute bottom-10 left-10">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Automotive Case Study</h4>
                            <p className="text-2xl font-bold text-black text-shadow-sm">Seamless Mobility Transformation</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-6 text-black">
                            AI-Powered <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Booking for IndusGo</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            We transformed the vehicle rental experience by integrating an intelligent chat interface.
                            Users can now discover, verify, and book mobility services entirely through a conversational flow.
                        </p>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-3 text-black font-bold text-lg group cursor-pointer"
                        >
                            Read Full Case Study
                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xl transition-transform group-hover:scale-110">→</span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
