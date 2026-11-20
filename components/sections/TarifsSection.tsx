'use client';

import { useState } from 'react';
import { Check, Minus } from 'lucide-react';
import BookingModal from '../ui/BookingModal';
import { Reveal } from "../ui/Reveal";

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

type Feature = { label: string; included: boolean; strong?: boolean };

interface Pack {
  key: keyof PricingTier;
  name: string;
  subtitle: string;
  bookingName: string;
  cta: string;
  signature?: boolean;
  features: Feature[];
}

const packs: Pack[] = [
  {
    key: 'interieur',
    name: 'Soin intérieur',
    subtitle: "Rénovation de l’habitacle",
    bookingName: 'Soin Intérieur',
    cta: 'Réserver',
    features: [
      { label: 'Nettoyage Vapeur & Pressing', included: true },
      { label: 'Soin nourrissant des cuirs', included: true },
      { label: 'Finition mate & Odeur du neuf', included: true },
      { label: 'Correction Carrosserie', included: false },
      { label: 'Protection Céramique', included: false },
    ],
  },
  {
    key: 'correction',
    name: 'Correction',
    subtitle: 'Restaurer & Sublimer',
    bookingName: 'Pack Correction (Signature)',
    cta: 'Choisir ce pack',
    signature: true,
    features: [
      { label: 'Lavage Detailing complet', included: true },
      { label: 'Décontamination chimique', included: true },
      { label: 'Polissage (Correction défauts)', included: true, strong: true },
      { label: 'Profondeur & Effet Miroir', included: true },
      { label: 'Cire de protection (6 mois)', included: true },
    ],
  },
  {
    key: 'ceramique',
    name: 'Protection',
    subtitle: 'Le Bouclier Ultime',
    bookingName: 'Pack Protection Céramique',
    cta: 'Nous contacter',
    features: [
      { label: 'Tout le pack Correction', included: true, strong: true },
      { label: 'Traitement Céramique (2 à 5 ans)', included: true },
      { label: 'Protection Hydrophobe', included: true },
      { label: 'Bouclier Anti-UV & Acides', included: true },
      { label: 'Garantie Certification', included: true },
    ],
  },
];

export default function TarifsSection() {
  const [selectedType, setSelectedType] = useState<VehicleType>('citadine');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenPack, setChosenPack] = useState('');

  const getLabel = (type: VehicleType) => {
    switch (type) {
      case 'suv': return 'SUV / 4x4';
      case 'citadine': return 'Citadine';
      default: return 'Berline';
    }
  };

  const handleBooking = (packName: string) => {
    setChosenPack(packName);
    setIsModalOpen(true);
  };

  const vehicleTypes: VehicleType[] = ['citadine', 'berline', 'suv'];

  return (
    <section className="w-full py-20 md:py-28 border-t border-line" id="tarifs" aria-labelledby="tarifs-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- EN-TÊTE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="kicker mb-4">Tarifs</p>
            <Reveal>
              <h2 id="tarifs-title" className="font-display uppercase text-5xl md:text-7xl text-paper leading-[0.9]">
                Nos formules
              </h2>
            </Reveal>
            <p className="mt-6 text-mute leading-relaxed max-w-xl">
              Des solutions de cosmétique automobile haute précision, adaptées à la morphologie de votre véhicule.
            </p>
          </div>

          {/* --- SÉLECTEUR DE GABARIT --- */}
          <div className="lg:col-span-5 self-end">
            <p id="gabarit-label" className="text-sm text-paper mb-3">1. Choisissez votre gabarit</p>
            <div role="group" aria-labelledby="gabarit-label" className="grid grid-cols-3 border border-line-strong">
              {vehicleTypes.map((type) => {
                const active = selectedType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    aria-pressed={active}
                    className={`h-12 px-2 text-sm font-medium transition-colors border-r border-line-strong last:border-r-0
                      ${active ? 'bg-paper text-ink' : 'text-mute hover:text-paper hover:bg-panel'}`}
                  >
                    {getLabel(type)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-sm text-paper mb-3">2. Comparez les formules <span className="text-mute">— gabarit : {getLabel(selectedType)}</span></p>

        {/* --- GRILLE DES FORMULES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-line" aria-live="polite">
          {packs.map((pack) => (
            <article
              key={pack.key}
              className={`relative flex flex-col p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-line last:border-0
                ${pack.signature ? 'bg-panel' : ''}`}
            >
              {pack.signature && <div className="absolute inset-x-0 top-0 h-1 bg-bronze" aria-hidden="true" />}

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display uppercase text-3xl text-paper leading-none">{pack.name}</h3>
                {pack.signature && <span className="text-xs font-medium text-bronze">Signature</span>}
              </div>
              <p className="mt-2 text-sm text-mute">{pack.subtitle}</p>

              <p className="mt-8 pb-8 border-b border-line text-paper">
                <span className="font-display text-6xl md:text-7xl leading-none tabular">{pricingData[selectedType][pack.key]}</span>
                <span className="ml-1 text-2xl text-mute">€</span>
              </p>

              <ul className="mt-6 mb-8 space-y-3 text-sm flex-grow">
                {pack.features.map((f) => (
                  <li key={f.label} className={`flex items-start gap-3 ${f.included ? 'text-paper/90' : 'text-mute line-through decoration-line-strong'}`}>
                    {f.included
                      ? <Check size={16} className="text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                      : <Minus size={16} className="shrink-0 mt-0.5" aria-hidden="true" />}
                    <span>
                      {!f.included && <span className="sr-only">Non inclus : </span>}
                      {f.strong ? <strong className="font-semibold text-paper">{f.label}</strong> : f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleBooking(pack.bookingName)}
                className={`h-12 w-full font-semibold text-sm transition-colors
                  ${pack.signature
                    ? 'bg-bronze text-ink hover:bg-paper'
                    : 'border border-line-strong text-paper hover:border-paper'}`}
              >
                {pack.cta}
              </button>
            </article>
          ))}
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
