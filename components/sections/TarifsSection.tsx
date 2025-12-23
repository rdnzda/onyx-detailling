'use client';

import { useState } from 'react';
import { Check, X, Sparkles, ShieldCheck, Droplets } from 'lucide-react';
// Adapte le chemin selon ton projet
import BookingModal from '../ui/BookingModal';
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

// --- TYPES & DATA ---
type VehicleType = 'citadine' | 'berline' | 'suv';

interface PricingTier {
  interieur: number;
  correction: number;
  ceramique: number;
}

const pricingData: Record<VehicleType, PricingTier> = {
  citadine: { interieur: 250, correction: 450, ceramique: 850 },
  berline: { interieur: 290, correction: 550, ceramique: 990 },
  suv: { interieur: 350, correction: 650, ceramique: 1200 },
};

export default function TarifsSection() {
  const [selectedType, setSelectedType] = useState<VehicleType>('citadine');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenPack, setChosenPack] = useState('');

  const getLabel = (type: VehicleType) => {
    switch (type) {
      case 'suv': return 'SUV / 4x4';
      default: return type.toUpperCase();
    }
  };

  const handleBooking = (packName: string) => {
    setChosenPack(packName);
    setIsModalOpen(true);
  };

  const vehicleTypes: VehicleType[] = ['citadine', 'berline', 'suv'];

  return (
    <section className="w-full py-16 md:py-24 text-white" id="tarifs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal width="100%" className="flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-5xl text-onyx-sand mb-6 uppercase">
              Nos <span className="text-onyx-chrome italic">Formules</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
              Des solutions de cosmétique automobile haute précision, adaptées à la morphologie de votre véhicule.
            </p>
          </Reveal>

          {/* --- SWITCHER RESPONSIVE --- */}
          <Reveal delay={0.4} className='mx-auto w-full flex justify-center'>
            {/* Ajout de flex-wrap et ajustement padding/text pour mobile */}
            <div className="inline-flex flex-wrap justify-center items-center bg-[#1A1A1A] rounded-full p-1 mt-8 border border-white/10 gap-1 sm:gap-0">
              {vehicleTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`
                    px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-sm font-bold tracking-wide transition-all duration-300 uppercase
                    ${selectedType === type 
                      ? 'bg-[#C5A086] text-black shadow-lg shadow-[#C5A086]/20' 
                      : 'text-gray-500 hover:text-gray-300'}
                  `}
                >
                  {getLabel(type)}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* --- GRID CARTES --- */}
        {/* Changement ici: lg:grid-cols-3 au lieu de md:grid-cols-3 pour éviter l'écrasement sur tablette */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:items-center">
          
          {/* PACK 1 : INTERIEUR */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#C5A086]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="mb-4 text-[#C5A086]">
                <Droplets size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">SOIN INTÉRIEUR</h3>
            <p className="text-gray-500 text-sm mb-6">Rénovation de l'habitacle</p>
            
            <div className="text-4xl font-bold mb-8 flex items-start">
              <span className="text-2xl mt-1 mr-1 text-[#C5A086]">€</span>
              {pricingData[selectedType].interieur}
            </div>

            <ul className="space-y-4 mb-8 text-gray-300 text-sm flex-grow">
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Nettoyage Vapeur & Pressing</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Soin nourrissant des cuirs</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Finition mate & Odeur du neuf</span></li>
              <li className="flex items-start gap-3 text-gray-600"><X size={18} className="shrink-0 mt-0.5" /> <span>Correction Carrosserie</span></li>
              <li className="flex items-start gap-3 text-gray-600"><X size={18} className="shrink-0 mt-0.5" /> <span>Protection Céramique</span></li>
            </ul>

            <button 
              onClick={() => handleBooking('Soin Intérieur')}
              className="block w-full py-3 border border-[#C5A086] text-[#C5A086] text-center font-bold tracking-wider rounded hover:bg-[#C5A086] hover:text-black transition-colors uppercase text-sm"
            >
              Réserver
            </button>
          </motion.div>

          {/* PACK 2 : CORRECTION (Mise en avant) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Correction ici: lg:scale-105 pour que le zoom ne se fasse que sur desktop
            className="relative bg-[#161616] border-2 border-[#C5A086] rounded-2xl p-6 md:p-8 transform lg:scale-105 z-10 shadow-2xl shadow-black/50 flex flex-col h-full my-4 lg:my-0"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A086] text-black text-[10px] md:text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
              Signature
            </div>

            <div className="mb-4 text-[#C5A086]">
                <Sparkles size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">CORRECTION</h3>
            <p className="text-gray-400 text-sm mb-6">Restaurer & Sublimer</p>
            
            <div className="text-5xl font-bold mb-8 flex items-start text-white">
              <span className="text-2xl mt-1 mr-1 text-[#C5A086]">€</span>
              {pricingData[selectedType].correction}
            </div>

            <ul className="space-y-4 mb-8 text-gray-200 text-sm font-medium flex-grow">
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Lavage Detailing complet</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Décontamination chimique</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span><strong>Polissage (Correction défauts)</strong></span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Profondeur & Effet Miroir</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Cire de protection (6 mois)</span></li>
            </ul>

            <button 
              onClick={() => handleBooking('Pack Correction (Signature)')}
              className="block w-full py-4 bg-[#C5A086] text-black text-center font-bold tracking-wider rounded hover:bg-white transition-colors uppercase text-sm"
            >
              Choisir ce pack
            </button>
          </motion.div>

          {/* PACK 3 : CÉRAMIQUE */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#C5A086]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="mb-4 text-[#C5A086]">
                <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">PROTECTION</h3>
            <p className="text-gray-400 text-sm mb-6">Le Bouclier Ultime</p>
            
            <div className="text-4xl font-bold mb-8 flex items-baseline">
              <span className="text-2xl mt-1 mr-1 text-[#C5A086]">€</span>
              {pricingData[selectedType].ceramique}
            </div>

            <ul className="space-y-4 mb-8 text-gray-300 text-sm flex-grow">
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span><strong>Tout le pack Correction</strong></span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Traitement Céramique (2 à 5 ans)</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Protection Hydrophobe</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Bouclier Anti-UV & Acides</span></li>
              <li className="flex items-start gap-3"><Check size={18} className="text-[#C5A086] shrink-0 mt-0.5" /> <span>Garantie Certification</span></li>
            </ul>

            <button 
              onClick={() => handleBooking('Pack Protection Céramique')}
              className="block w-full py-3 border border-white/20 text-white text-center font-bold tracking-wider rounded hover:bg-white hover:text-black transition-colors uppercase text-sm"
            >
              Nous contacter
            </button>
          </motion.div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPack={chosenPack} 
      />

    </section>
  );
}