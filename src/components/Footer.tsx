import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Industries', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'About Us', href: '#' },
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
                        <div className="text-2xl font-bold tracking-tighter font-display">
                            ZARTEK <span className="text-black">UK</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed font-light max-w-xs">
                            Enterprise Futurist: Building AI that scales with enterprise ambition. London-based, globally focused.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-slate-400 hover:text-black hover:border-black transition-all"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {/* Placeholder for icons - using dots for now but styled properly */}
                                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 font-display">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-slate-500 hover:text-black transition-colors font-sans">
                                        {link.name}
                                    </a>
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
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                80-82 Curtain Rd, Shoreditch,<br />
                                London EC2A 3AF
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="w-full py-4 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform cursor-pointer shadow-lg shadow-black/5">
                                Book A Consultation
                            </button>
                            <a href="mailto:hello@zartek.co.uk" className="text-sm font-medium text-slate-900 hover:underline underline-offset-4 decoration-slate-200">
                                hello@zartek.co.uk
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
