"use client";

import { Shield, Sparkles, Droplets, MoveRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Correction de Peinture",
      description: "Élimination des micro-rayures et hologrammes pour retrouver une profondeur miroir. Polissage en 1, 2 ou 3 étapes.",
      icon: <Sparkles className="w-6 h-6" />,
      price: "Dès 450€"
    },
    {
      id: "02",
      title: "Traitement Céramique",
      description: "Protection hydrophobe longue durée (2 à 5 ans). Bouclier invisible contre les UV, pluies acides et contaminants.",
      icon: <Shield className="w-6 h-6" />,
      price: "Dès 600€",
      featured: true // On mettra celui-ci en valeur
    },
    {
      id: "03",
      title: "Soin Intérieur & Cuir",
      description: "Nettoyage vapeur, pressing des moquettes et soin nourrissant des cuirs. Finition mate et odeur du neuf.",
      icon: <Droplets className="w-6 h-6" />,
      price: "Dès 250€"
    }
  ];

  return (
    <section id="services" className="relative z-10 max-w-7xl py-8 sm:py-8 md:py-16 lg:py-32 px-6 mx-auto">
      
      {/* 1. HEADER DE SECTION */}
      <div className="max-w-7xl mx-auto mb-20 md:flex items-end justify-between border-b border-white/10 pb-8">
        <div>
          <Reveal>
            <span className="text-onyx-clay text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Nos Expertises
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-onyx-sand">
              Restaurer. <span className="italic text-white/50">Protéger.</span> <br />
              Sublimer.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.4}>
          <p className="hidden md:block text-onyx-mist max-w-sm text-sm leading-relaxed mt-6 md:mt-0 text-right">
            Nous ne faisons pas du nettoyage. Nous pratiquons la cosmétique automobile de haute précision pour collectionneurs exigeants.
          </p>
        </Reveal>
      </div>

      {/* 2. GRILLE DES SERVICES */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={service.id}
            className={`group relative p-8 md:p-10 rounded-sm border transition duration-500 ease-out
              ${service.featured 
                ? 'bg-white/5 border-onyx-clay/30 hover:border-onyx-clay hover:bg-white/10' 
                : 'bg-transparent border-white/10 hover:border-onyx-clay/50 hover:bg-white/5'
              }
            `}
          >
            {/* Numéro discret en fond */}
            <span className="absolute top-6 right-8 text-4xl font-display text-white/5 group-hover:text-onyx-clay/10 transition">
              {service.id}
            </span>

            {/* Icone */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 transition duration-300
              ${service.featured ? 'bg-onyx-clay text-white' : 'bg-white/5 text-onyx-clay group-hover:bg-onyx-clay group-hover:text-white'}
            `}>
              {service.icon}
            </div>

            {/* Titre */}
            <h3 className="font-display text-3xl text-onyx-sand mb-4 group-hover:text-white transition">
              {service.title}
            </h3>

            {/* Description */}
            <p className="font-body text-onyx-mist text-sm leading-relaxed mb-8 border-l border-white/10 pl-4 group-hover:border-onyx-clay transition-colors">
              {service.description}
            </p>

            {/* Footer Carte : Prix + Lien */}
            <div className="flex items-center justify-between mt-auto">
              <span className="font-body font-bold text-xs text-white/40 uppercase tracking-wider">
                {service.price}
              </span>
              
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-onyx-clay group-hover:text-white transition group-hover:translate-x-2 duration-300">
                <a href="#tarifs" className="flex items-center gap-2 w-full h-full">
                  Découvrir <MoveRight className="w-3 h-3" />
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}