import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import Industries from './Industries';

const CaseStudiesPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-white">
            <Helmet>
                <title>Industry Case Studies | Zartek UK</title>
                <meta name="description" content="Detailed AI implementation case studies across diverse industries including FinTech, Healthcare, and Logistics." />
            </Helmet>

            <div className="pt-32 pb-20">
                <Industries />
            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default CaseStudiesPage;
