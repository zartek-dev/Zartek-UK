import React from 'react';
import { motion } from 'motion/react';

const Team: React.FC = () => {
    const team = [
        {
            name: "David Sterling",
            role: "Chief AI Architect",
            desc: "Former DeepMind researcher specializing in NLP and predictive modeling for fintech.",
            img: "https://i.pravatar.cc/150?u=david"
        },
        {
            name: "Sarah Jenkins",
            role: "Head of Data Science",
            desc: "PhD in Computational Statistics from Imperial College; expert in large-scale data pipelines.",
            img: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Marcus Thorne",
            role: "Enterprise Solutions Lead",
            desc: "Focuses on bridging technical complexity and business value for Fortune 500 clients.",
            img: "https://i.pravatar.cc/150?u=marcus"
        },
        {
            name: "Elena Rodriguez",
            role: "Machine Learning Engineer",
            desc: "Specializes in computer vision and generative AI models for creative industries.",
            img: "https://i.pravatar.cc/150?u=elena"
        },
        {
            name: "James Wu",
            role: "Cloud Infrastructure Architect",
            desc: "AWS Certified Solutions Architect focusing on scalable and secure AI deployments.",
            img: "https://i.pravatar.cc/150?u=james"
        },
        {
            name: "Priya Patel",
            role: "Strategy Consultant",
            desc: "Helps startups navigate the AI landscape and secure Series A funding.",
            img: "https://i.pravatar.cc/150?u=priya"
        }
    ];

    return (
        <section id="about" className="relative z-10 py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Our Experts</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6 text-black">Meet the Minds Behind the AI</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                        Our London-based team combines decades of experience in machine learning, data science, and enterprise architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all group text-center"
                        >
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <div className="absolute inset-0 bg-blue-600/10 rounded-full group-hover:scale-110 transition-transform blur-xl" />
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="relative w-full h-full rounded-full object-cover border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                            <p className="text-blue-600 text-sm font-bold mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">{member.desc}</p>

                            <div className="flex justify-center gap-4">
                                <a href="#" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
