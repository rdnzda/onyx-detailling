import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section aria-labelledby="hero-title" className="relative pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Titre + accroche */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 pt-12 md:pt-14 pb-10 md:pb-12 items-end">
                    <h1
                        id="hero-title"
                        className="lg:col-span-8 font-display uppercase text-paper leading-[0.86] tracking-[-0.01em] text-[clamp(3.4rem,10vw,9rem)]"
                    >
                        The Perfect<br />
                        Shine<span className="text-bronze">.</span>
                    </h1>

                    <div className="lg:col-span-4 lg:pb-3 max-w-md">
                        <p className="text-base md:text-lg text-paper/85 leading-relaxed">
                            Correction de peinture, traitement céramique et soin intérieur —
                            un studio de detailing à Orléans, sur rendez-vous.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <a
                                href="#tarifs"
                                className="group inline-flex items-center gap-3 h-12 px-6 bg-bronze text-ink font-semibold hover:bg-paper transition-colors"
                            >
                                Obtenir un devis
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </a>
                            <a href="#services" className="text-sm text-paper underline underline-offset-4 decoration-line-strong hover:decoration-paper">
                                Voir les services
                            </a>
                        </div>
                    </div>
                </div>

                {/* Planche photo */}
                <figure className="relative bg-panel border-y border-line sm:border-x overflow-hidden -mx-4 sm:mx-0">
                    <div className="flex items-center justify-between px-4 sm:px-6 pt-4 text-xs text-mute">
                        <span>Planche 01</span>
                        <span className="tabular">Correction · Céramique · Intérieur</span>
                    </div>
                    <div className="relative mx-auto max-w-4xl aspect-[16/7] mt-2 mb-8 sm:mb-10">
                        <div className="absolute inset-x-[-50vw] bottom-[5%] h-px bg-line-strong" aria-hidden="true" />
                        <Image
                            src="/img/cars/porsche.png"
                            alt="Porsche 911 blanche vue de trois quarts avant"
                            fill
                            priority
                            sizes="(min-width: 1024px) 900px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </figure>

                {/* Bandeau d'informations */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-line">
                    <div className="py-8 md:pr-8 border-b md:border-b-0 md:border-r border-line">
                        <h2 className="font-display text-2xl text-paper">Premium Products Only.</h2>
                        <p className="mt-2 text-sm text-mute max-w-xs">Partenaire officiel Gtechniq &amp; Rupes pour un résultat certifié.</p>
                    </div>
                    <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-line flex items-baseline gap-4">
                        <p className="font-display text-6xl leading-none text-paper tabular">500+</p>
                        <p className="text-sm text-mute">Véhicules protégés</p>
                    </div>
                    <div className="py-8 md:pl-8 flex flex-col justify-between gap-4">
                        <p className="text-lg text-paper leading-snug">
                            Nous combinons esthétique &amp; protection.
                        </p>
                        <a href="#studio" className="self-start text-sm text-paper underline underline-offset-4 decoration-bronze hover:text-bronze">
                            Voir le studio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
