import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white border-t border-white/5 relative overflow-hidden">
            
            {/* --- 1. PRE-FOOTER CTA (L'appel ultime) --- */}
            <div className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <Reveal>
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-2">
                                Prêt à <span className="text-[#C5A086] italic">Briller ?</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base max-w-md">
                                Ne laissez plus votre véhicule dans l'ombre. Offrez-lui le traitement qu'il mérite dès aujourd'hui.
                            </p>
                        </div>
                    </Reveal>
                    <a href="#tarifs" className="group flex items-center gap-3 px-8 py-4 bg-[#C5A086] text-black font-bold tracking-widest rounded-sm hover:bg-white transition-all duration-300">
                        PRENDRE RDV
                        <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* --- 2. MAIN FOOTER CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* COL 1: Identité */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#C5A086] rounded-tr-lg rounded-bl-lg" />
                        <span className="font-display font-bold text-2xl tracking-widest text-white">ONYX</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Le studio de detailing de référence. Nous allions technologie de pointe et artisanat pour sublimer chaque courbe de votre automobile.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-[#C5A086] hover:border hover:border-[#C5A086] transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-[#C5A086] hover:border hover:border-[#C5A086] transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-[#C5A086] hover:border hover:border-[#C5A086] transition-all">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                {/* COL 2: Navigation Rapide */}
                <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">Exploration</h3>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="#services" className="hover:text-[#C5A086] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#C5A086] rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Services</a></li>
                        <li><a href="#realisations" className="hover:text-[#C5A086] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#C5A086] rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Réalisations</a></li>
                        <li><a href="#tarifs" className="hover:text-[#C5A086] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#C5A086] rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Tarifs</a></li>
                        <li><a href="#studio" className="hover:text-[#C5A086] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#C5A086] rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Le Studio</a></li>
                    </ul>
                </div>

                {/* COL 3: Contact */}
                <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">Nous Trouver</h3>
                    <ul className="space-y-6 text-sm text-gray-400">
                        <li className="flex items-start gap-3 group">
                            <MapPin className="text-[#C5A086] shrink-0 mt-1 group-hover:text-white transition-colors" size={18} />
                            <span>14 Avenue de la Libération,<br/>45000 Orléans, France</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <Phone className="text-[#C5A086] shrink-0 group-hover:text-white transition-colors" size={18} />
                            <span>+33 6 12 34 56 78</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <Mail className="text-[#C5A086] shrink-0 group-hover:text-white transition-colors" size={18} />
                            <a href="mailto:contact@onyx.com" className="hover:text-white transition-colors">contact@onyx-detailing.com</a>
                        </li>
                    </ul>
                </div>

                {/* COL 4: Horaires */}
                <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">Horaires</h3>
                    <div className="bg-[#111] p-6 rounded-lg border border-white/5">
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between text-gray-400">
                                <span>Lun - Ven</span>
                                <span className="text-white">09:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Samedi</span>
                                <span className="text-white">10:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between text-gray-500 italic pt-2 border-t border-white/5 mt-2">
                                <span>Dimanche</span>
                                <span>Fermé</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- 3. COPYRIGHT BAR --- */}
            <div className="border-t border-white/5 bg-onyx-black/50">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; {currentYear} ONYX Detailing. Tous droits réservés.</p>
                    
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions Légales</Link>
                        <Link href="/cgv" className="hover:text-gray-300 transition-colors">CGV</Link>
                        <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">Confidentialité</Link>
                    </div>

                    {/* Ta signature perso (Subtile mais présente pour ton portfolio) */}
                    <p>Designed by <a href="https://ton-portfolio.com" className="text-[#C5A086] hover:underline">RDNZDA</a></p>
                </div>
            </div>
        </footer>
    );
}