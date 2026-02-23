import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SuccessStories: React.FC = () => {
    const stories = [
        {
            client: "IndusGo",
            industry: "Transportation & Logistics",
            desc: "WhatsApp AI Chatbot with voice clip support for end-to-end booking, redefining self-drive car rentals with a seamless, hyper-local mobility platform serving millions of users across India.",
            stat: "85%",
            label: "Automation Rate",
            slug: "indusgo",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80"
        },
        {
            client: "Pharmazon",
            industry: "Healthcare Supply Chain",
            desc: "A regulatory-compliant pharmaceutical supply chain platform streamlining medicine distribution for UK healthcare providers.",
            stat: "3x",
            label: "Faster Distribution",
            slug: "pharmazon",
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
        },
        {
            client: "GenOCR",
            industry: "Enterprise Finance",
            desc: "Leveraging advanced deep learning to automate high-volume document extraction with 99% accuracy for enterprise finance.",
            stat: "99%",
            label: "Accuracy",
            slug: "genocr",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
        },
        {
            client: "HMA",
            industry: "Global Consulting",
            desc: "Strategic digital transformation for global enterprise consulting, integrating multi-cloud architecture and real-time analytics.",
            stat: "85%",
            label: "Time Saved",
            slug: "hma",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans pt-32 pb-20 px-6 md:px-12">
            <Helmet>
                <title>Success Stories & Impact | Zartek UK</title>
                <meta name="description" content="Discover how Zartek UK has helped enterprises achieve verifiable results through custom AI development and strategic consultation." />
            </Helmet>

            {/* Background Materials */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-100 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-50 blur-[150px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 block"
                    >
                        Impact & Results
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-bold font-display tracking-tightest leading-none mb-8 text-slate-900"
                    >
                        Success <br />
                        <span className="text-slate-100">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        How we’ve helped enterprise partners architect the intelligence era with verifiable results.
                    </motion.p>
                </div>

                {/* 2x2 Grid of Stories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", damping: 20 }}
                            className="group relative flex flex-col bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                                <img
                                    src={story.image}
                                    alt={`${story.client} Case Study`}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="relative z-10 flex flex-col flex-grow p-10 bg-white">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">{story.client}</h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{story.industry}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black tracking-tighter text-slate-900 group-hover:text-black transition-colors">{story.stat}</div>
                                        <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400">{story.label}</div>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-light">
                                    {story.desc}
                                </p>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between min-h-[64px]">
                                    {story.slug === 'indusgo' && (
                                        <Link
                                            to={`/success-stories/${story.slug}`}
                                            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-black transition-colors cursor-pointer"
                                        >
                                            VIEW CASE STUDY
                                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SuccessStories;
