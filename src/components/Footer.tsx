import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 py-32 px-6 md:px-12 border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold font-display mb-10 text-slate-900"
                    >
                        Ready To Build The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">Future Of Your Business?</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-lg cursor-pointer">
                            Schedule A Consultation
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm text-slate-500">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl font-bold text-slate-900 mb-6 tracking-tighter">ZARTEK <span className="text-black">UK</span></div>
                        <p className="leading-relaxed">Building AI that scales with enterprise ambition. London-based, globally focused.</p>
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Company</h4>
                        <ul className="grid gap-3">
                            <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Insights</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
                        <ul className="grid gap-3">
                            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Connect</h4>
                        <ul className="grid gap-3">
                            <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Clutch</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                    © {new Date().getFullYear()} Zartek UK. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
