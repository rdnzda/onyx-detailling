import Link from 'next/link';
import { AlertTriangle, Lock, Cookie } from 'lucide-react';

export default function Confidentialite() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen text-gray-300 py-24 px-4 sm:px-6 md:py-32">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        
        {/* --- BANDEAU D'AVERTISSEMENT --- */}
        <div className="bg-amber-900/20 border border-amber-500/50 p-4 md:p-6 rounded-lg flex gap-3 md:gap-4 items-start">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
            <div>
                <h3 className="text-amber-500 font-bold uppercase tracking-wider mb-1 text-sm md:text-base">
                    Projet Portfolio
                </h3>
                <p className="text-xs md:text-sm text-amber-200/80 leading-relaxed">
                    Cette politique de confidentialité est un exemple type conforme RGPD pour démontrer mes compétences en intégration web.
                    Aucune donnée réelle n'est stockée ou traitée commercialement sur ce site de démo.
                </p>
            </div>
        </div>

        {/* Titre */}
        <div className="border-b border-white/10 pb-6 md:pb-8 flex items-center gap-4">
          <Lock className="text-[#C5A086] w-8 h-8 md:w-12 md:h-12 hidden sm:block" />
          <div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-2 leading-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-500 text-sm md:text-base">Protection de vos données & Cookies</p>
          </div>
        </div>

        {/* INTRODUCTION */}
        <section className="space-y-3 md:space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Chez <strong>ONYX Detailing</strong>, nous accordons une importance majeure à la confidentialité de vos informations. 
            Cette politique vise à vous informer en toute transparence sur les données que nous collectons, l'utilisation que nous en faisons et vos droits, conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        {/* 1. DONNÉES COLLECTÉES */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">1. Les données que nous collectons</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Nous collectons uniquement les données strictement nécessaires au traitement de votre demande via notre formulaire de contact ou de réservation :
          </p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 marker:text-[#C5A086] text-sm md:text-base text-gray-400">
            <li><strong>Identité :</strong> Nom, Prénom.</li>
            <li><strong>Contact :</strong> Adresse email, Numéro de téléphone.</li>
            <li><strong>Véhicule :</strong> Marque, Modèle (pour l'établissement du devis).</li>
            <li><strong>Message :</strong> Tout détail que vous choisissez de nous communiquer.</li>
          </ul>
        </section>

        {/* 2. UTILISATION DES DONNÉES */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">2. Pourquoi collectons-nous ces données ?</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Vos données sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 marker:text-[#C5A086] text-sm md:text-base text-gray-400">
            <li>Répondre à vos demandes de contact et de devis.</li>
            <li>Organiser les rendez-vous pour les prestations (Soin, Céramique, etc.).</li>
            <li>Vous recontacter en cas de modification de planning.</li>
            <li>Établir les factures et le suivi comptable.</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-gray-500 italic mt-2">
            Nous ne vendons, ne louons et ne partageons jamais vos données à des tiers à des fins publicitaires.
          </p>
        </section>

        {/* 3. COOKIES */}
        <section className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Cookie className="text-[#C5A086] w-5 h-5" />
            <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">3. Cookies & Traceurs</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement (ex: mémorisation de votre choix de langue).
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Nous pouvons également utiliser des cookies de mesure d'audience (type Google Analytics, anonymisés) pour comprendre comment les visiteurs naviguent sur le site et l'améliorer. Vous avez la possibilité de désactiver ces cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        {/* 4. SÉCURITÉ & CONSERVATION */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">4. Sécurité et Conservation</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Vos données sont conservées pendant une durée de <strong>3 ans</strong> à compter de notre dernier contact. 
            Nous mettons en œuvre des mesures de sécurité techniques (HTTPS, accès sécurisé) pour protéger vos données contre tout accès non autorisé.
          </p>
        </section>

        {/* 5. VOS DROITS */}
        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-2xl font-display text-[#C5A086]">5. Vos Droits</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Conformément à la loi, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Pour exercer ces droits, il vous suffit de nous contacter par email à : 
            <a href="mailto:contact@onyx-detailing.com" className="text-[#C5A086] hover:text-white ml-1 transition-colors">contact@onyx-detailing.com</a>
          </p>
        </section>

        {/* Boutons retour */}
        <div className="pt-4 md:pt-8 flex flex-wrap gap-6">
            <Link href="/" className="inline-block text-[#C5A086] hover:text-white border-b border-[#C5A086] hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Retour à l'accueil
            </Link>
            <Link href="/mentions-legales" className="inline-block text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                Mentions Légales
            </Link>
            <Link href="/cgv" className="inline-block text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 uppercase text-[10px] md:text-xs font-bold tracking-widest">
                CGV
            </Link>
        </div>

      </div>
    </main>
  );
}