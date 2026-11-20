'use client';

import { useState } from 'react';
import { Check, Minus } from 'lucide-react';
import BookingModal from '../ui/BookingModal';

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
    cta: 'Réserver cette formule',
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
    cta: 'Réserver cette formule',
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
    cta: 'Réserver cette formule',
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
    <section className="w-full py-24 md:py-32 border-t border-line" id="tarifs" aria-labelledby="tarifs-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* --- EN-TÊTE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <h2 id="tarifs-title" className="font-display text-5xl md:text-7xl text-onyx-sand leading-[0.95]">
              Nos formules
            </h2>
            <p className="mt-6 text-[0.9375rem] text-onyx-silver leading-relaxed max-w-xl">
              Des solutions de cosmétique automobile haute précision, adaptées à la morphologie de votre véhicule.
            </p>
          </div>

          {/* --- SÉLECTEUR DE GABARIT --- */}
          <div className="lg:col-span-5 self-end">
            <p id="gabarit-label" className="flex items-baseline gap-3 text-sm text-paper mb-4">
              <span className="font-display italic text-xl text-bronze">01</span> Choisissez votre gabarit
            </p>
            <div role="group" aria-labelledby="gabarit-label" className="grid grid-cols-3 gap-1 p-1 rounded-full border border-line-strong bg-panel">
              {vehicleTypes.map((type) => {
                const active = selectedType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    aria-pressed={active}
                    className={`h-11 px-2 rounded-full label-ui transition-colors duration-300
                      ${active ? 'bg-bronze text-ink' : 'text-onyx-silver hover:text-paper hover:bg-panel-2'}`}
                  >
                    {getLabel(type)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="flex items-baseline gap-3 text-sm text-paper mb-5">
          <span className="font-display italic text-xl text-bronze">02</span>
          Comparez les formules <span className="text-onyx-silver">(prix pour : {getLabel(selectedType)})</span>
        </p>

        {/* --- GRILLE DES FORMULES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 lg:border lg:border-line" aria-live="polite">
          {packs.map((pack) => (
            <article
              key={pack.key}
              className={`relative flex flex-col p-7 md:p-9 border border-line lg:border-0 lg:border-r lg:last:border-r-0
                ${pack.signature ? 'bg-panel-2 lg:-my-4 lg:border lg:border-bronze/70 lg:z-10' : 'bg-panel/50'}`}
            >
              {pack.signature && <div className="absolute inset-x-0 top-0 h-[2px] bg-bronze" aria-hidden="true" />}

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl md:text-4xl text-onyx-sand leading-none">{pack.name}</h3>
                {pack.signature && <span className="font-display italic text-lg text-bronze">Signature</span>}
              </div>
              <p className="mt-2 text-sm text-onyx-silver">{pack.subtitle}</p>

              <p className="mt-8 pb-8 border-b border-line text-paper flex items-baseline">
                <span className="font-display text-7xl leading-none tabular">{pricingData[selectedType][pack.key]}</span>
                <span className="ml-2 font-display text-3xl text-bronze">€</span>
              </p>

              <ul className="mt-7 mb-9 space-y-3.5 text-sm flex-grow">
                {pack.features.map((f) => (
                  <li key={f.label} className={`flex items-start gap-3 ${f.included ? 'text-paper/90' : 'text-onyx-chrome/80'}`}>
                    {f.included
                      ? <Check size={16} className="text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                      : <Minus size={16} className="shrink-0 mt-0.5" aria-hidden="true" />}
                    <span className={f.included ? '' : 'line-through decoration-onyx-steel'}>
                      {!f.included && <span className="sr-only">Non inclus : </span>}
                      {f.strong ? <strong className="font-semibold text-paper">{f.label}</strong> : f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleBooking(pack.bookingName)}
                className={`h-12 w-full rounded-full label-ui transition-colors duration-300
                  ${pack.signature
                    ? 'bg-bronze text-ink hover:bg-onyx-titanium'
                    : 'border border-bronze/70 text-bronze hover:bg-bronze hover:text-ink'}`}
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
