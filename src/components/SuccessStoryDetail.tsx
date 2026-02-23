import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';

export interface SuccessStoryData {
    client: string;
    industry: string;
    tagline: string;
    description: string;
    metrics: Array<{
        value: string;
        label: string;
    }>;
    challenge: {
        title: string;
        paragraphs: string[];
    };
    solution: {
        title: string;
        intro: string;
        points: string[];
    };
    results: {
        title: string;
        paragraphs: string[];
    };
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

interface SuccessStoryDetailProps {
    story: SuccessStoryData;
}

const SuccessStoryDetail: React.FC<SuccessStoryDetailProps> = ({ story }) => {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            <Helmet>
                <title>{story.client} Case Study | Zartek UK</title>
                <meta name="description" content={story.description} />
            </Helmet>

            {/* Background Blurs */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-50 blur-[150px] rounded-full pointer-events-none"
            />

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <button
                        onClick={() => navigate('/success-stories')}
                        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Success Stories
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                            {story.industry}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900">
                            {story.client}
                        </h1>
                        <p className="text-2xl text-slate-600 font-light">
                            {story.tagline}
                        </p>
                    </motion.div>

                    {/* Key Metrics */}
                    <div className={`grid grid-cols-1 md:grid-cols-${Math.min(story.metrics.length, 3)} gap-6 mb-20`}>
                        {story.metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                                className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8"
                            >
                                <div className="text-5xl font-black tracking-tighter text-slate-900 mb-2">{metric.value}</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="relative z-10 py-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto space-y-20">
                    {/* Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
                            {story.challenge.title}
                        </h2>
                        {story.challenge.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12"
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
                            {story.solution.title}
                        </h2>
                        <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                            {story.solution.intro}
                        </p>
                        <ul className="space-y-4 text-lg text-slate-600">
                            {story.solution.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="text-black font-bold">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
                            {story.results.title}
                        </h2>
                        {story.results.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    {/* Testimonial */}
                    {story.testimonial && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20 p-16 rounded-[4rem] bg-slate-50 border border-slate-100 backdrop-blur-3xl text-center relative overflow-hidden"
                        >
                            <div className="relative z-10 max-w-4xl mx-auto">
                                <div className="text-6xl text-slate-100 font-black mb-8 leading-none">"</div>
                                <p className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-12 italic">
                                    {story.testimonial.quote}
                                </p>
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 mb-4" />
                                    <h4 className="font-bold text-lg text-slate-900">{story.testimonial.author}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        {story.testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-32 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16"
                    >
                        <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
                            Ready to Transform Your Platform?
                        </h2>
                        <p className="text-lg text-slate-600 font-light mb-8">
                            Let's discuss how we can help you achieve similar results.
                        </p>
                        <Link
                            to="/success-stories"
                            className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl"
                        >
                            View More Case Studies
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default SuccessStoryDetail;
