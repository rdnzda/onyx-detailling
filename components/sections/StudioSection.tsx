"use client";

import { Lock, Thermometer, Zap } from "lucide-react";
import Image from "next/image";
import Location from "../ui/Location";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

export default function Studio() {
  return (
    <section id="studio" className="py-24 space-y-16 px-6 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* COLONNE GAUCHE : Texte & Specs */}
        <div>
          <Reveal>
            <span className="text-onyx-clay text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
              L'Atelier
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-onyx-sand mb-6">
              Un sanctuaire pour <br />
              <span className="italic text-white/40">votre machine.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="font-body text-onyx-mist text-sm leading-relaxed mb-10 max-w-md">
              Notre studio de 200m² à Orléans est conçu pour la perfection. 
              Éclairage hexagrid anti-reflets, hygrométrie contrôlée et sécurité biométrique. 
              Ici, le temps s'arrête pour laisser place à la précision.
            </p>
          </Reveal>

          {/* Grille des spécifications techniques */}
          <Reveal delay={0.6}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-onyx-clay/50 transition duration-300">
                <Zap className="w-5 h-5 text-onyx-clay mb-3" />
                <h4 className="font-display text-lg text-white">5000 Lumens</h4>
                <p className="text-xs text-onyx-mist mt-1">Éclairage Inspection</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-onyx-clay/50 transition duration-300">
                <Thermometer className="w-5 h-5 text-onyx-clay mb-3" />
                <h4 className="font-display text-lg text-white">20°C Constant</h4>
                <p className="text-xs text-onyx-mist mt-1">Curing Céramique</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* COLONNE DROITE : Image Immersive */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative h-[400px] w-full rounded-sm overflow-hidden group"
        >
           {/* Calque de couleur pour l'ambiance sombre par défaut */}
           <div className="absolute inset-0 bg-onyx-black/40 group-hover:bg-transparent transition duration-700 z-10"></div>
           
           <Image 
             src="https://images.unsplash.com/photo-1708805282706-f44730b7e527?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Atelier Detailing" 
             fill
             className="object-cover object-top grayscale group-hover:grayscale-0 transition duration-1000 ease-in-out"
           />
           
           {/* Badge Flottant "Sécurisé" */}
           <div className="absolute bottom-8 left-8 bg-onyx-black/90 backdrop-blur-md border border-white/10 p-4 flex items-center gap-4 z-20">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <Lock className="w-4 h-4 text-onyx-clay" />
             </div>
             <div>
               <p className="text-xs font-bold text-white uppercase tracking-wider">Accès Sécurisé</p>
               <p className="text-[10px] text-onyx-mist">Sur rendez-vous uniquement</p>
             </div>
           </div>
        </motion.div>
      </div>
      <Reveal width="100%" delay={0.8}>
        <div className="max-w-7xl mx-auto">
          <Location />
        </div>
      </Reveal>
    </section>
  );
}