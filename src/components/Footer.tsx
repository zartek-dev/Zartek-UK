import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'About Us', path: '/about' },
    ];

    const industryLinks = [
        { name: 'FinTech', href: '#' },
        { name: 'Healthcare', href: '#' },
        { name: 'Retail', href: '#' },
        { name: 'Legal', href: '#' },
        { name: 'Logistics', href: '#' },
        { name: 'Manufacturing', href: '#' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Clutch', href: '#' },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12 font-sans text-slate-900"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Col 1: Brand */}
                    <div className="space-y-6">
                        <div>
                            <img
                                src="/assets/zartek-logo.png"
                                alt="Zartek UK - AI Development Company London"
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed font-light max-w-xs">
                            Zartek is a leading AI development company in London with expertise in mass consumer technology products.
                        </p>
                    </div>

                    {/* Col 2: Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 font-display">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-sm text-slate-500 hover:text-black transition-colors font-sans">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Industries */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 font-display">Industries</h4>
                        <ul className="space-y-4">
                            {industryLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-slate-500 hover:text-black transition-colors font-sans">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6 font-display">Contact</h4>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link to="/contact" className="w-full py-4 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform cursor-pointer shadow-lg shadow-black/5 text-center">
                                Book A Consultation
                            </Link>
                            <a href="mailto:info@zartek.in" className="text-sm font-medium text-slate-900 hover:underline underline-offset-4 decoration-slate-200">
                                info@zartek.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                        © 2026 ZARTEK UK. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-slate-400 hover:text-black font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[10px] text-slate-400 hover:text-black font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
