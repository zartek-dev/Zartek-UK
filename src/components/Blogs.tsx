import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const Blogs: React.FC = () => {
    const blogPosts = [
        {
            title: "The Future of AI in Enterprise",
            excerpt: "Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.",
            date: "February 15, 2026",
            category: "AI Strategy",
            readTime: "5 min read",
            image: "/assets/blog-placeholder-1.jpg"
        },
        {
            title: "Implementing Conversational AI at Scale",
            excerpt: "A deep dive into building robust conversational AI systems that can handle enterprise-level traffic and complexity.",
            date: "February 10, 2026",
            category: "Technical",
            readTime: "8 min read",
            image: "/assets/blog-placeholder-2.jpg"
        },
        {
            title: "AI Ethics and Responsible Development",
            excerpt: "Understanding the ethical considerations and best practices for developing AI systems that benefit society.",
            date: "February 5, 2026",
            category: "Ethics",
            readTime: "6 min read",
            image: "/assets/blog-placeholder-3.jpg"
        },
        {
            title: "Case Study: Transforming Healthcare with AI",
            excerpt: "How we helped a leading healthcare provider implement AI-driven diagnostics and patient care systems.",
            date: "January 28, 2026",
            category: "Case Study",
            readTime: "7 min read",
            image: "/assets/blog-placeholder-4.jpg"
        },
        {
            title: "Machine Learning Operations Best Practices",
            excerpt: "Essential MLOps practices for deploying and maintaining production machine learning systems.",
            date: "January 20, 2026",
            category: "Technical",
            readTime: "10 min read",
            image: "/assets/blog-placeholder-5.jpg"
        },
        {
            title: "The ROI of AI: Measuring Business Impact",
            excerpt: "Practical frameworks for measuring and demonstrating the return on investment of AI initiatives.",
            date: "January 15, 2026",
            category: "Business",
            readTime: "6 min read",
            image: "/assets/blog-placeholder-6.jpg"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            <Helmet>
                <title>AI Insights & Blog | Zartek UK</title>
                <meta name="description" content="Explore the latest insights, case studies, and thought leadership on AI development, machine learning, and enterprise digital transformation from Zartek UK." />
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
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900">
                            Insights & Ideas
                        </h1>
                        <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
                            Thought leadership, case studies, and practical insights on AI development and enterprise transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="relative z-10 py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-slate-50 border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 h-full flex flex-col">
                                    {/* Image Placeholder */}
                                    <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                        </div>
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-tight mb-4 text-slate-900 group-hover:text-black transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 font-light leading-relaxed mb-6 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-black font-bold text-sm group-hover:gap-4 transition-all">
                                            Read More
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-32 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16"
                    >
                        <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
                            Stay Updated
                        </h2>
                        <p className="text-lg text-slate-600 font-light mb-8">
                            Subscribe to our newsletter for the latest insights on AI development and enterprise transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:border-black transition-colors outline-none text-slate-900"
                            />
                            <button className="px-8 py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default Blogs;
