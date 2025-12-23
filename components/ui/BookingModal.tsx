'use client';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPack: string; // Pour savoir quel pack le client a cliqué
}

export default function BookingModal({ isOpen, onClose, selectedPack }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* L'arrière-plan sombre flouté */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* La boîte de la modale */}
      <div className="relative bg-[#1A1A1A] border border-[#C5A086] w-full max-w-lg rounded-2xl p-8 shadow-2xl shadow-[#C5A086]/20 transform transition-all scale-100">
        
        {/* Bouton fermer */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Demande de Réservation</h3>
        <p className="text-gray-400 mb-6">
          Vous avez sélectionné le pack : <span className="text-[#C5A086] font-bold uppercase">{selectedPack}</span>
        </p>

        {/* Le Formulaire */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Nom Complet</label>
            <input type="text" className="w-full bg-[#0B0B0B] border border-white/10 rounded p-3 text-white focus:border-[#C5A086] outline-none" placeholder="Jean Dupont" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
               <label className="block text-sm text-gray-400 mb-1">Téléphone</label>
               <input type="tel" className="w-full bg-[#0B0B0B] border border-white/10 rounded p-3 text-white focus:border-[#C5A086] outline-none" placeholder="06..." />
            </div>
            <div>
               <label className="block text-sm text-gray-400 mb-1">Modèle Véhicule</label>
               <input type="text" className="w-full bg-[#0B0B0B] border border-white/10 rounded p-3 text-white focus:border-[#C5A086] outline-none" placeholder="Ex: Audi A3" />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#C5A086] text-black font-bold py-3 rounded mt-4 hover:bg-white transition-colors">
            ENVOYER LA DEMANDE
          </button>
        </form>

      </div>
    </div>
  );
}