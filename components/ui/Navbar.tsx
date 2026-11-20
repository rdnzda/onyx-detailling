'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#studio', label: 'Studio' },
    { href: '#tarifs', label: 'Tarifs' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    // Bloque le scroll de la page quand le menu mobile est ouvert
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <nav aria-label="Navigation principale" className="fixed top-0 inset-x-0 z-50 bg-ink/95 border-b border-line">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

                    {/* Marque */}
                    <a href="#" className="relative z-50 flex items-baseline gap-3" onClick={closeMenu}>
                        <span className="font-display text-2xl leading-none tracking-tight text-paper">ONYX</span>
                        <span className="hidden sm:inline text-xs text-mute">Detailing — Orléans</span>
                    </a>

                    {/* Liens desktop */}
                    <ul className="hidden md:flex items-center gap-8 text-sm text-mute">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} className="py-2 hover:text-paper transition-colors">{l.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Action desktop */}
                    <div className="hidden md:flex items-center gap-5 text-sm">
                        <span className="text-mute" aria-label="Langue : français">FR</span>
                        <a href="#contact" className="inline-flex items-center h-10 px-4 border border-line-strong text-paper hover:border-bronze hover:text-bronze transition-colors">
                            Contactez-nous
                        </a>
                    </div>

                    {/* Bouton mobile */}
                    <button
                        type="button"
                        className="md:hidden relative z-50 -mr-2 p-2 text-paper"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="menu-mobile"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Menu mobile plein écran */}
            <div
                id="menu-mobile"
                className={`md:hidden fixed inset-0 z-40 bg-ink pt-16 flex flex-col transition-opacity duration-200 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <ul className="px-4 sm:px-6 border-t border-line">
                    {links.map((l, i) => (
                        <li key={l.href} className="border-b border-line">
                            <a href={l.href} onClick={closeMenu} className="flex items-baseline gap-4 py-5 text-paper">
                                <span className="text-xs text-mute tabular">0{i + 1}</span>
                                <span className="font-display text-4xl">{l.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="px-4 sm:px-6 mt-auto pb-10 flex items-center justify-between">
                    <a href="#contact" onClick={closeMenu} className="inline-flex items-center h-12 px-6 bg-bronze text-ink font-semibold">
                        Contactez-nous
                    </a>
                    <span className="text-sm text-mute">FR</span>
                </div>
            </div>
        </>
    );
}
