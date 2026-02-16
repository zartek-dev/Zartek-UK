import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import TheShift from './TheShift';
import Solutions from './Solutions';
import CaseStudy from './CaseStudy';
import Methodology from './Methodology';
import WhyZartek from './WhyZartek';

interface ZartekHomeProps { }

const ZartekHome: React.FC<ZartekHomeProps> = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Zartek UK",
        "image": "https://zartek.co.uk/logo.png",
        "url": "https://zartek.co.uk",
        "telephone": "+44 20 7946 0000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "80-82 Curtain Rd, Shoreditch",
            "addressLocality": "London",
            "postalCode": "EC2A 3AF",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5244,
            "longitude": -0.0801
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://twitter.com/zartekuk",
            "https://www.linkedin.com/company/zartekuk"
        ],
        "description": "Zartek UK is a premier AI development company in London, offering expert AI consultation and next-gen digital solutions for UK enterprises."
    };

    return (
        <div className="relative min-h-screen bg-white overflow-hidden text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
            <Helmet>
                <title>AI Development Company London | Zartek UK</title>
                <meta name="description" content="Zartek UK is a premier AI development company in London, offering expert AI consultation and next-gen digital solutions for UK enterprises." />
                <meta name="keywords" content="AI Development Company London, AI Consultation UK, Generative AI Solutions, Machine Learning London" />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* Background Blurs - Refined Apple Style */}
            <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-50 blur-[150px] rounded-full pointer-events-none"
            />

            {/* Sections */}
            <div className="relative">
                <Hero />
                <div id="the-shift"><TheShift /></div>
                <div id="solutions"><Solutions /></div>
                <div id="case-studies"><CaseStudy /></div>
                <div id="methodology"><Methodology /></div>
                <WhyZartek />
            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

        </div>
    );
};

export default ZartekHome;
