import React from 'react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative z-10 py-32 px-6 md:px-12 bg-[#f8fbff]/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Column: Office Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Contact Us</span>
                        <h2 className="text-4xl md:text-6xl font-bold font-display mt-6 mb-12 text-black">Visit our <br /> London Office</h2>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Location</h4>
                                    <p className="text-black font-medium leading-relaxed">
                                        Level 39, One Canada Square,<br />
                                        Canary Wharf, London E14 5AB,<br />
                                        United Kingdom
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
                                    <p className="text-black font-medium">hello@zartek.co.uk</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
                                    <p className="text-black font-medium">+44 (0) 20 7123 4567</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-16 rounded-[2rem] overflow-hidden border border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-video bg-gray-200 relative">
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-0.02,51.50,13/1280x720?access_token=pk.placeholder')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-8 h-8 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center animate-bounce">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-blue-50"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-black font-display">Start your Transformation</h3>
                        <p className="text-gray-500 mb-10 font-light">Tell us about your project or idea. Our AI consultants will review your request and get back to you within 24 hours.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 outline-none transition-all font-medium" placeholder="David" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 outline-none transition-all font-medium" placeholder="Sterling" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 outline-none transition-all font-medium" placeholder="david@enterprise.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Area of Interest</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 outline-none transition-all font-medium appearance-none">
                                    <option>AI Strategy Consultation</option>
                                    <option>Custom LLM Implementation</option>
                                    <option>Workflow Automation</option>
                                    <option>AI Policy & Governance</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Project Details</label>
                                <textarea className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 outline-none transition-all font-medium h-32 resize-none" placeholder="Describe your challenges and goals..." />
                            </div>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="hidden" />
                                <div className="w-5 h-5 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center transition-all group-hover:border-blue-500">
                                    <svg className="w-3 h-3 text-blue-600 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">I agree to the <a href="#" className="underline">Privacy Policy</a></span>
                            </label>

                            <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-200 mt-4 flex items-center justify-center gap-3 cursor-pointer">
                                Send Request <span className="text-xl">→</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
