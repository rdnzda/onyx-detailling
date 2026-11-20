'use client';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPack: string; // Pour savoir quel pack le client a cliqué
}

const inputClass =
  "w-full h-12 bg-ink border border-line-strong rounded-sm px-4 text-paper placeholder:text-mute/70 focus:border-bronze focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bronze";

export default function BookingModal({ isOpen, onClose, selectedPack }: BookingModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSent(false); onClose(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const close = () => { setSent(false); onClose(); };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-black/80" onClick={close} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative bg-panel border border-bronze/60 w-full max-w-lg p-6 sm:p-9"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Fermer"
          className="absolute top-3 right-3 p-2 text-mute hover:text-paper"
        >
          <X size={22} />
        </button>

        <h3 id="booking-title" className="font-display text-3xl md:text-4xl text-onyx-sand pr-10">Demande de réservation</h3>
        <p className="mt-2 mb-6 text-onyx-silver text-sm">
          Formule choisie : <span className="text-bronze font-semibold">{selectedPack}</span>
        </p>

        {sent ? (
          <div role="status" className="border-l-2 border-bronze pl-4 py-1 text-sm text-onyx-silver leading-relaxed">
            <p className="text-paper font-medium mb-1">Merci, votre demande est prête.</p>
            Ce site est un projet de démonstration : aucune demande n’a été transmise. Pour un vrai rendez-vous, il faudrait contacter directement le studio.
          </div>
        ) : (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <p className="text-xs text-onyx-silver">Tous les champs sont obligatoires.</p>
          <div>
            <label htmlFor="bk-nom" className="block text-sm text-paper mb-1.5">Nom complet</label>
            <input id="bk-nom" type="text" autoComplete="name" required className={inputClass} placeholder="Jean Dupont" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bk-tel" className="block text-sm text-paper mb-1.5">Téléphone</label>
              <input id="bk-tel" type="tel" autoComplete="tel" required className={inputClass} placeholder="06..." />
            </div>
            <div>
              <label htmlFor="bk-modele" className="block text-sm text-paper mb-1.5">Modèle du véhicule</label>
              <input id="bk-modele" type="text" required className={inputClass} placeholder="Ex : Audi A3" />
            </div>
          </div>

          <button type="submit" className="w-full h-12 rounded-full bg-bronze text-ink label-ui mt-3 hover:bg-onyx-titanium transition-colors">
            Envoyer la demande
          </button>
        </form>
        )}
      </div>
    </div>
  );
}
