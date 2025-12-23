import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen text-gray-300 py-24 px-4 sm:px-6 md:py-32">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        
        {/* --- BANDEAU D'AVERTISSEMENT (Adapté Mobile) --- */}
        <div className="bg-amber-900/20 border border-amber-500/50 p-4 md:p-6 rounded-lg flex gap-3 md:gap-4 items-start">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
            <div>
                <h3 className="text-amber-500 font-bold uppercase tracking-wider mb-1 text-sm md:text-base">
                    Site de Démonstration
                </h3>
                <p className="text-xs md:text-sm text-amber-200/80 leading-relaxed">
                    Ce site est un projet fictif réalisé dans le cadre d'un portfolio de développeur. 
                    Aucune prestation commerciale n'est réellement proposée ici.
                </p>
            </div>
        </div>

        {/* Titre */}
        <div className="border-b border-white/10 pb-6 md:pb-8">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-2 md:mb-4 leading-tight">
            Mentions Légales
          </h1>
          <p className="text-gray-500 text-sm md:text-base">Template pour futur client</p>
        </div>

        {/* SECTION 1 : ÉDITEUR */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">1. Éditeur & Réalisation</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Ce site a été conçu et développé par :
          </p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 marker:text-[#C5A086] text-sm md:text-base">
            <li><strong>Développeur :</strong> RDNZDA</li>
            <li><strong>Statut :</strong> Étudiant / Freelance</li>
            <li><strong>Contact Portfolio :</strong> akunzada.redean.pro@gmail.com</li>
            <li><strong>Localisation :</strong> France</li>
          </ul>
        </section>

        {/* SECTION 2 : L'ENTREPRISE FICTIVE */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">2. Identité Fictive (Exemple)</h2>
          <p className="italic text-gray-500 mb-2 text-xs md:text-sm">
            *Dans un contexte réel, cette section contiendrait les informations suivantes du client :*
          </p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 marker:text-gray-600 text-gray-400 text-sm md:text-base">
            <li><strong>Raison sociale :</strong> ONYX Detailing SAS</li>
            <li><strong>Siège social :</strong> 14 Avenue de la Libération, 45000 Orléans</li>
            <li><strong>SIRET :</strong> 000 000 000 00000 (Numéro fictif)</li>
            <li><strong>TVA Intracommunautaire :</strong> FR 00 000000000</li>
          </ul>
        </section>

        {/* SECTION 3 : HÉBERGEUR */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">3. Hébergement Technique</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Le site est propulsé par <strong>Vercel</strong>.<br />
            Siège social : Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
          </p>
        </section>

        {/* SECTION 4 : PROPRIÉTÉ INTELLECTUELLE */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">4. Crédits & Droits</h2>
          <p className="text-sm md:text-base leading-relaxed">
            <strong>Design & Code :</strong> &copy; 2025 RDNZDA.<br/>
            <strong>Images :</strong> Les images utilisées sur ce site sont libres de droits (Unsplash, Pexels) ou utilisées à des fins de maquette uniquement.
          </p>
        </section>

        {/* Bouton retour */}
        <div className="pt-4 md:pt-8 flex flex-wrap gap-6">
            <Link href="/" className="inline-block text-[#C5A086] hover:text-white border-b border-[#C5A086] hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Retour à l'accueil
            </Link>
            <Link href="/cgv" className="inline-block text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Conditions Générales de Vente
            </Link>
            <Link href="/confidentialite" className="inline-block text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Confidentialité
            </Link>
        </div>

      </div>
    </main>
  );
}