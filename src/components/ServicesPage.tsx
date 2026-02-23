import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from './Services';

const ServicesPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white overflow-hidden font-sans">
            <Helmet>
                <title>Expert AI Services & Solutions | Zartek UK</title>
                <meta name="description" content="Explore our comprehensive suite of AI development services, from custom neural networks to enterprise AI strategy and implementation." />
            </Helmet>

            <div className="pt-32 pb-20">
                <Services />
            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

export default ServicesPage;
