import { Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const nav = [
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#tarifs', label: 'Tarifs' },
    { href: '#studio', label: 'Le Studio' },
];

const socials = [
    { label: 'Instagram', Icon: Instagram },
    { label: 'LinkedIn', Icon: Linkedin },
    { label: 'Facebook', Icon: Facebook },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-line">

            {/* --- APPEL À L'ACTION --- */}
            <div className="border-b border-line">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-8">
                        <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-8xl text-paper leading-[0.88]">
                            Prêt à briller<span className="text-bronze"> ?</span>
                        </h2>
                        <p className="mt-6 text-mute md:text-lg max-w-md">
                            Ne laissez plus votre véhicule dans l’ombre. Offrez-lui le traitement qu’il mérite dès aujourd’hui.
                        </p>
                    </div>
                    <div className="lg:col-span-4 lg:justify-self-end">
                        <a href="#tarifs" className="group inline-flex items-center gap-3 h-14 px-7 bg-bronze text-ink font-semibold hover:bg-paper transition-colors">
                            Prendre rendez-vous
                            <ArrowUpRight size={20} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* --- CONTENU --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

                <div className="lg:col-span-4 space-y-5">
                    <p className="font-display text-3xl text-paper leading-none">ONYX</p>
                    <p className="text-sm text-mute leading-relaxed max-w-xs">
                        Le studio de detailing de référence. Nous allions technologie de pointe et artisanat pour sublimer chaque courbe de votre automobile.
                    </p>
                    <ul className="flex gap-2">
                        {socials.map(({ label, Icon }) => (
                            <li key={label}>
                                <a href="#" aria-label={label} className="w-10 h-10 border border-line-strong flex items-center justify-center text-mute hover:text-paper hover:border-paper transition-colors">
                                    <Icon size={17} aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold text-paper mb-4">Exploration</h3>
                    <ul className="space-y-2.5 text-sm text-mute">
                        {nav.map((l) => (
                            <li key={l.href}><a href={l.href} className="hover:text-paper transition-colors">{l.label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="text-sm font-semibold text-paper mb-4">Nous trouver</h3>
                    <address className="not-italic space-y-2.5 text-sm text-mute">
                        <p>14 Avenue de la Libération,<br />45000 Orléans, France</p>
                        <p className="tabular">+33 6 12 34 56 78</p>
                        <p><a href="mailto:contact@onyx.com" className="hover:text-paper underline underline-offset-4 decoration-line-strong">contact@onyx-detailing.com</a></p>
                    </address>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="text-sm font-semibold text-paper mb-4">Horaires</h3>
                    <dl className="text-sm tabular">
                        <div className="flex justify-between py-2 border-t border-line">
                            <dt className="text-mute">Lun – Ven</dt><dd className="text-paper">09:00 – 19:00</dd>
                        </div>
                        <div className="flex justify-between py-2 border-t border-line">
                            <dt className="text-mute">Samedi</dt><dd className="text-paper">10:00 – 17:00</dd>
                        </div>
                        <div className="flex justify-between py-2 border-y border-line">
                            <dt className="text-mute">Dimanche</dt><dd className="text-mute">Fermé</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* --- BARRE LÉGALE --- */}
            <div className="border-t border-line">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs text-mute">
                    <p>&copy; {currentYear} ONYX Detailing. Tous droits réservés.</p>
                    <p className="lg:order-none">Projet démo : ONYX Detailing est une entreprise fictive, aucune prestation n’est proposée.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="/mentions-legales" className="hover:text-paper transition-colors">Mentions légales</Link>
                        <Link href="/cgv" className="hover:text-paper transition-colors">CGV</Link>
                        <Link href="/confidentialite" className="hover:text-paper transition-colors">Confidentialité</Link>
                        <span>Designed by <a href="https://ton-portfolio.com" className="text-paper underline underline-offset-4 decoration-bronze hover:text-bronze">RDNZDA</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
