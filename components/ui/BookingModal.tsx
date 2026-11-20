'use client';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPack: string; // Pour savoir quel pack le client a cliqué
}

const inputClass =
  "w-full h-12 bg-ink border border-line-strong px-3 text-paper placeholder:text-mute/70 focus:border-bronze focus:outline-none focus-visible:outline-none";

export default function BookingModal({ isOpen, onClose, selectedPack }: BookingModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative bg-panel border-t-4 border-bronze w-full max-w-lg p-6 sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 p-2 text-mute hover:text-paper"
        >
          <X size={22} />
        </button>

        <h3 id="booking-title" className="font-display uppercase text-3xl text-paper pr-10">Demande de réservation</h3>
        <p className="mt-2 mb-6 text-mute text-sm">
          Pack sélectionné : <span className="text-paper font-semibold">{selectedPack}</span>
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="bk-nom" className="block text-sm text-paper mb-1.5">Nom complet</label>
            <input id="bk-nom" type="text" autoComplete="name" className={inputClass} placeholder="Jean Dupont" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bk-tel" className="block text-sm text-paper mb-1.5">Téléphone</label>
              <input id="bk-tel" type="tel" autoComplete="tel" className={inputClass} placeholder="06..." />
            </div>
            <div>
              <label htmlFor="bk-modele" className="block text-sm text-paper mb-1.5">Modèle du véhicule</label>
              <input id="bk-modele" type="text" className={inputClass} placeholder="Ex : Audi A3" />
            </div>
          </div>

          <button type="submit" className="w-full h-12 bg-bronze text-ink font-semibold mt-2 hover:bg-paper transition-colors">
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  );
}
