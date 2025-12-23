'use client'; // Indispensable pour l'interactivité (useState)

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Assure-toi d'avoir lucide-react ou utilise des <svg>
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour fermer le menu quand on clique sur un lien
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* --- NAVBAR PRINCIPALE --- */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent`}
            >
                <div className="flex justify-between items-center px-6 md:px-8 py-6 mx-auto max-w-7xl">
                    
                    {/* Logo (Toujours visible) */}
                    <div className="flex items-center gap-2 z-50 relative">
                        <div className="w-8 h-8 bg-onyx-chrome rounded-tr-xl rounded-bl-xl shadow-[0_0_15px_rgba(197,160,134,0.3)]" />
                        <a href="#" className="font-display font-bold text-2xl tracking-widest text-onyx-titanium">ONYX</a>
                    </div>

                    {/* --- DESKTOP MENU (Caché sur mobile) --- */}
                    <div className="hidden md:flex gap-10 font-body text-xs font-medium text-onyx-silver uppercase tracking-widest">
                        <a href="#services" className="hover:text-onyx-titanium hover:scale-105 transition-all duration-300">Services</a>
                        <a href="#realisations" className="hover:text-onyx-titanium hover:scale-105 transition-all duration-300">Réalisations</a>
                        <a href="#studio" className="hover:text-onyx-titanium hover:scale-105 transition-all duration-300">Studio</a>
                        <a href="#tarifs" className="hover:text-onyx-titanium hover:scale-105 transition-all duration-300">Tarifs</a>
                    </div>

                    {/* --- DESKTOP ACTION (Caché sur mobile) --- */}
                    <div className="hidden md:flex items-center gap-6 font-body text-xs font-bold tracking-widest">
                        <span className="text-onyx-chrome cursor-pointer hover:text-white transition">FR</span>
                        <hr className="h-4 border-l border-onyx-steel" />
                        <a href="#contact" className="border-b border-onyx-chrome text-onyx-titanium hover:text-onyx-chrome transition pb-1">
                            CONTACTEZ-NOUS
                        </a>
                    </div>

                    {/* --- MOBILE TOGGLE BUTTON --- */}
                    <button 
                        className="md:hidden z-50 text-onyx-titanium hover:text-onyx-chrome transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </motion.nav>

            {/* --- MOBILE FULLSCREEN MENU (Overlay) --- */}
            <div className={`
                fixed inset-0 z-40 bg-[#0f0f0f] flex flex-col justify-center items-center gap-8
                transition-all duration-500 ease-in-out
                ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}
            `}>
                {/* Liens Mobile (Plus gros pour le tactile) */}
                <div className="flex flex-col items-center gap-8 text-center">
                    <a href="#services" onClick={closeMenu} className="font-display text-3xl text-white hover:text-onyx-chrome transition tracking-widest">SERVICES</a>
                    <a href="#realisations" onClick={closeMenu} className="font-display text-3xl text-white hover:text-onyx-chrome transition tracking-widest">RÉALISATIONS</a>
                    <a href="#studio" onClick={closeMenu} className="font-display text-3xl text-white hover:text-onyx-chrome transition tracking-widest">STUDIO</a>
                    <a href="#tarifs" onClick={closeMenu} className="font-display text-3xl text-white hover:text-onyx-chrome transition tracking-widest">TARIFS</a>
                </div>

                {/* Séparateur décoratif */}
                <div className="w-12 h-1 bg-onyx-chrome rounded-full opacity-50"></div>

                {/* Actions Mobile */}
                <div className="flex flex-col items-center gap-6 mt-4">
                    <a href="#tarifs" onClick={closeMenu} className="px-8 py-3 border border-onyx-chrome text-onyx-chrome font-bold tracking-widest rounded-sm hover:bg-onyx-chrome hover:text-black transition">
                        CONTACTEZ-NOUS
                    </a>
                    
                    <div className="flex gap-4 text-xs font-bold tracking-widest text-onyx-silver">
                        <span className="text-white border-b border-onyx-chrome">FR</span>
                    </div>
                </div>
            </div>
        </>
    );
}