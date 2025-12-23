import Link from 'next/link';
import { AlertTriangle, FileText } from 'lucide-react';

export default function CGV() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen text-gray-300 py-24 px-4 sm:px-6 md:py-32">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        
        {/* --- BANDEAU D'AVERTISSEMENT (Cohérent avec Mentions Légales) --- */}
        <div className="bg-amber-900/20 border border-amber-500/50 p-4 md:p-6 rounded-lg flex gap-3 md:gap-4 items-start">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
            <div>
                <h3 className="text-amber-500 font-bold uppercase tracking-wider mb-1 text-sm md:text-base">
                    Projet Portfolio
                </h3>
                <p className="text-xs md:text-sm text-amber-200/80 leading-relaxed">
                    Ces Conditions Générales de Vente sont fictives. Elles servent à démontrer ma capacité à intégrer des pages légales complètes pour un client professionnel.
                </p>
            </div>
        </div>

        {/* Titre */}
        <div className="border-b border-white/10 pb-6 md:pb-8 flex items-center gap-4">
          <FileText className="text-[#C5A086] w-8 h-8 md:w-12 md:h-12 hidden sm:block" />
          <div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-2 leading-tight">
              Conditions Générales de Vente
            </h1>
            <p className="text-gray-500 text-sm md:text-base">Applicables au 1er Janvier 2026</p>
          </div>
        </div>

        {/* ARTICLE 1 : OBJET */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">Article 1. Objet et Champ d'application</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société <strong>ONYX Detailing</strong> (le Prestataire) et toute personne physique ou morale (le Client) souhaitant bénéficier des services de préparation esthétique automobile.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Toute réservation implique l'adhésion sans réserve aux présentes CGV.
          </p>
        </section>

        {/* ARTICLE 2 : DEVIS & RÉSERVATIONS */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">Article 2. Devis et Réservation</h2>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 marker:text-[#C5A086] text-sm md:text-base text-gray-400">
            <li>Les devis sont gratuits et valables pour une durée de <strong>30 jours</strong>.</li>
            <li>La réservation d'une prestation n'est confirmée qu'après signature du devis et versement d'un acompte de <strong>30%</strong> du montant total.</li>
            <li>Pour les prestations de traitement céramique, une inspection préalable du véhicule au studio est obligatoire.</li>
          </ul>
        </section>

        {/* ARTICLE 3 : TARIFS */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">Article 3. Tarifs et Paiement</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Les tarifs sont indiqués en Euros (€) et s'entendent Toutes Taxes Comprises (TTC).
            ONYX Detailing se réserve le droit de modifier ses prix à tout moment, mais la prestation sera facturée sur la base du tarif en vigueur au moment de la validation du devis.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            <strong>Moyens de paiement acceptés :</strong> Carte Bancaire, Virement instantané, Espèces (dans la limite légale).
            Le solde est dû à la restitution du véhicule.
          </p>
        </section>

        {/* ARTICLE 4 : ANNULATION */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">Article 4. Annulation et Retard</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Toute annulation doit être notifiée au moins <strong>48 heures</strong> avant le rendez-vous.
            Passé ce délai, l'acompte de 30% restera acquis à ONYX Detailing à titre d'indemnité forfaitaire.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Tout retard supérieur à 30 minutes pourra entraîner le report de la prestation ou la réduction de sa durée, sans remboursement.
          </p>
        </section>

        {/* ARTICLE 5 : RESPONSABILITÉ */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">Article 5. Responsabilité et Assurance</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Le Prestataire déclare avoir souscrit une assurance Responsabilité Civile Professionnelle couvrant les dommages pouvant survenir durant la prestation.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Un état des lieux du véhicule ("Check-in") sera effectué en présence du client avant toute intervention.
            ONYX Detailing décline toute responsabilité concernant les objets de valeur laissés à l'intérieur du véhicule.
          </p>
        </section>

        {/* ARTICLE 6 : DROIT À L'IMAGE */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">Article 6. Propriété Intellectuelle (Photos)</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Sauf avis contraire écrit du Client avant le début de la prestation, ONYX Detailing se réserve le droit de photographier et filmer le véhicule avant, pendant et après l'intervention à des fins promotionnelles (site web, réseaux sociaux), en prenant soin de flouter les plaques d'immatriculation.
          </p>
        </section>

        {/* Bouton retour */}
        <div className="pt-4 md:pt-8 flex gap-6">
            <Link href="/" className="inline-block text-[#C5A086] hover:text-white border-b border-[#C5A086] hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Retour à l'accueil
            </Link>
            <Link href="/mentions-legales" className="inline-block text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Voir Mentions Légales
            </Link>
            <Link href="/confidentialite" className="inline-block text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Confidentialité
            </Link>
        </div>

      </div>
    </main>
  );
}