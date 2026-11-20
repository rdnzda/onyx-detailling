'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#studio', label: 'Studio' },
    { href: '#tarifs', label: 'Tarifs' },
];

// Monogramme ONYX : carré aux angles opposés arrondis
export function OnyxMark({ className = "bg-onyx-chrome" }: { className?: string }) {
    return <span aria-hidden="true" className={`block w-7 h-7 rounded-tr-xl rounded-bl-xl ${className}`} />;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const closeMenu = () => setIsOpen(false);

    // Bloque le scroll de la page quand le menu mobile est ouvert
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Fond plein uniquement après défilement
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav
                aria-label="Navigation principale"
                className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${scrolled || isOpen ? 'bg-[#181818]/95 border-line' : 'bg-transparent border-transparent'}`}
            >
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">

                    <a href="#" className="relative z-50 flex items-center gap-3" onClick={closeMenu} aria-label="ONYX Detailing, retour en haut">
                        <OnyxMark />
                        <span className="font-display font-bold text-2xl tracking-[0.2em] text-onyx-titanium">ONYX</span>
                    </a>

                    <ul className="hidden md:flex items-center gap-10 label-ui text-onyx-silver">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} className="relative py-2 hover:text-paper transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-bronze after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-6 label-ui">
                        <a href="#contact" className="pb-1 border-b border-bronze text-paper hover:text-bronze transition-colors">
                            Contactez-nous
                        </a>
                    </div>

                    <button
                        type="button"
                        className="md:hidden relative z-50 -mr-2 p-2 text-onyx-titanium"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="menu-mobile"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>
            </nav>

            {/* Menu mobile plein écran */}
            <div
                id="menu-mobile"
                className={`md:hidden fixed inset-0 z-40 bg-[#141414] pt-20 flex flex-col transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <ul className="px-5 sm:px-6 mt-6">
                    {links.map((l) => (
                        <li key={l.href} className="border-b border-line">
                            <a href={l.href} onClick={closeMenu} className="flex items-baseline gap-5 py-5 text-paper hover:text-bronze transition-colors">
                                <span className="font-display text-4xl">{l.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="px-5 sm:px-6 mt-auto pb-10">
                    <a href="#contact" onClick={closeMenu} className="inline-flex items-center h-12 px-7 rounded-full bg-bronze text-ink label-ui hover:bg-paper transition-colors">
                        Contactez-nous
                    </a>
                </div>
            </div>
        </>
    );
}
