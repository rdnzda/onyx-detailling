"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

export default function Realizations() {
  // Simule des photos de tailles différentes (Portrait/Paysage)
  const projects = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1682824972688-7ab3608c9614?q=80&w=980&h=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "PROTECTION CÉRAMIQUE",
      title: "Porsche 911 GT3",
      height: "h-64", // Juste pour simuler la hauteur si tu n'as pas de vraies images
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571753780793-e9a1673f0471?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "DÉTAILING INTÉRIEUR",
      title: "Aston Martin DB11",
      height: "h-96", // Image verticale
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1666195782998-5189c6a40793?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "CORRECTION PEINTURE",
      title: "Mercedes AMG GT",
      height: "h-72",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1661683768380-68b22cbcd376?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "RESTAURATION CUIR",
      title: "Bentley Continental",
      height: "h-56",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1610880846497-7257b23f6138?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "TRAITEMENT HYDROPHOBE",
      title: "Audi R8 V10",
      height: "h-64",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=980&h=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "FULL DETAILING",
      title: "BMW M4",
      height: "h-96",
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl py-8 sm:py-8 md:py-16 px-6 mx-auto" id="realisations">
      
      {/* 1. EN-TÊTE DISCRET */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <Reveal width="100%" className="flex flex-col items-center">
          <span className="text-onyx-clay text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-onyx-sand uppercase">
            Dernières <span className="italic font-light text-white/50">Signatures</span>
          </h2>
        </Reveal>
      </div>

      {/* 2. LA GALERIE MASONRY */}
      {/* L'astuce Tailwind est ici : columns-1, md:columns-2, lg:columns-3 */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6">
        
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={project.id} 
            className="relative group break-inside-avoid rounded-sm overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full">
               <Image
                src={project.src}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>

            {/* Overlay au survol (Effet Luxe) */}
            <div className="absolute inset-0 bg-onyx-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
              
              {/* Petite icône Loupe */}
              <div className="w-10 h-10 rounded-full bg-onyx-clay text-white flex items-center justify-center mb-4 translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">
                <Search className="w-4 h-4" />
              </div>

              {/* Textes */}
              <span className="text-onyx-clay text-[10px] font-bold tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition duration-500 delay-150">
                {project.category}
              </span>
              <h3 className="font-display text-2xl text-white translate-y-4 group-hover:translate-y-0 transition duration-500 delay-200">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Bouton "Voir plus" (Optionnel) */}
      <div className="text-center mt-16">
        <button className="text-xs font-bold text-onyx-mist hover:text-white border-b border-onyx-mist hover:border-white pb-1 transition uppercase tracking-wider">
            Voir le portfolio complet sur Instagram
        </button>
      </div>

    </section>
  );
}