"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Seule animation orchestrée du site : l'entrée du hero (titre, puis voiture).
export default function Hero() {
    const reduce = useReducedMotion();
    const enter = (delay: number, y = 16) => ({
        initial: reduce ? false : { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
    });

    return (
        <section aria-labelledby="hero-title" className="relative pt-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 pt-6 md:pt-12 lg:pt-20 pb-16 md:pb-24 items-center">

                    {/* La voiture d'abord : c'est le sujet */}
                    <motion.figure {...enter(0.35, 0)} className="lg:col-span-7 lg:order-2">
                        <div className="relative overflow-hidden border border-onyx-graphite bg-[linear-gradient(180deg,#2a2a2a_0%,#1d1d1d_62%,#161616_100%)]">
                            <div className="absolute inset-x-0 bottom-[15%] h-px bg-gradient-to-r from-transparent via-onyx-steel to-transparent" aria-hidden="true" />
                            <div className="relative aspect-[16/9] mx-[4%] my-[2%]">
                                <Image
                                    src="/img/cars/porsche.png"
                                    alt="Porsche 911 blanche, carrosserie polie, vue de trois quarts avant"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 700px, 100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.figure>

                    <div className="lg:col-span-5 lg:order-1">
                        <motion.h1
                            {...enter(0)}
                            id="hero-title"
                            className="font-display uppercase text-onyx-titanium leading-[0.86] text-[clamp(3.75rem,14vw,7.25rem)]"
                        >
                            The<br />
                            <span className="italic font-light pl-[0.35em]">Perfect</span><br />
                            Shine
                        </motion.h1>

                        <motion.div {...enter(0.15)}>
                            <p className="mt-8 flex items-center gap-4 font-display italic text-xl md:text-2xl text-onyx-sand">
                                <span className="h-px w-12 bg-bronze shrink-0" aria-hidden="true" />
                                We craft automotive perfection
                            </p>

                            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-onyx-silver">
                                Confiez-nous votre voiture pour une correction de peinture, un traitement céramique ou un soin intérieur, dans notre studio d’Orléans.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                                <a
                                    href="#tarifs"
                                    className="inline-flex items-center h-12 px-8 rounded-full bg-bronze text-onyx-black label-ui hover:bg-onyx-titanium transition-colors duration-300"
                                >
                                    Obtenir un devis
                                </a>
                                <a href="#services" className="text-sm text-onyx-silver hover:text-paper border-b border-onyx-steel hover:border-bronze pb-0.5 transition-colors">
                                    Découvrir les services
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Engagements, en texte courant */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-6 text-[0.9375rem] leading-relaxed text-onyx-silver">
                    <p>
                        <span className="block font-display text-2xl text-onyx-titanium mb-1">Premium Products Only.</span>
                        Partenaire officiel Gtechniq &amp; Rupes pour un résultat certifié.
                    </p>
                    <p>
                        <span className="block font-display text-2xl text-onyx-titanium mb-1">500+ véhicules protégés.</span>
                        En correction, en céramique ou en soin intérieur.
                    </p>
                    <p>
                        <span className="block font-display text-2xl text-onyx-titanium mb-1">Esthétique &amp; protection.</span>
                        Nous combinons les deux, dans un atelier pensé pour la précision.{" "}
                        <a href="#studio" className="text-paper border-b border-bronze hover:text-bronze transition-colors">Voir le studio</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
