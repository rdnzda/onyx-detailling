import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    // CONTENEUR PRINCIPAL
    // Mobile : flex-col (les enfants s'empilent) + h-auto (hauteur s'adapte au contenu)
    // Desktop : block (pour permettre l'absolute) + h-[600px] (hauteur fixe)
    <section id="contact" className="relative w-full flex flex-col md:block md:h-[600px]">

      {/* 1. LA CARTE GOOGLE */}
      {/* Mobile : h-[400px] (hauteur fixe pour voir la map) 
          Desktop : absolute inset-0 (prend toute la place derrière) */}
      <div className="relative w-full h-[350px] md:absolute md:inset-0 md:h-full z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.9125167446878!2d1.8995571124390447!3d47.91873016625085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4fb2711cdfcf5%3A0x2665ca365d65eef0!2s14%20Av.%20de%20la%20Lib%C3%A9ration%2C%2045000%20Orl%C3%A9ans!5e0!3m2!1sfr!2sfr!4v1766417403708!5m2!1sfr!2sfr" // Ton lien ici
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full transition-all duration-1000 ease-in-out 
          [filter:grayscale(100%)_invert(90%)_contrast(120%)_brightness(80%)_hue-rotate(180deg)] 
          hover:[filter:none]"
        ></iframe>
      </div>

      {/* 2. LA CARTE CONTACT (Bloc statique sur mobile / Flottant sur PC) */}
      {/* Mobile : relative (dans le flux), w-full, fond noir uni pour la continuité
         Desktop : absolute, top-1/2, right-20, largeur auto, effet verre
      */}
      <div className="relative z-10 w-full mt-6
                      md:absolute md:top-1/2 md:right-20 md:-translate-y-1/2 md:w-auto bg-transparent md:p-0">
        
        {/* Le contenu de la carte (Design identique) */}
        <div className="bg-onyx-black/50 md:bg-onyx-black/90 md:backdrop-blur-md border border-white/10 md:shadow-2xl rounded-sm p-6 md:p-10 max-w-none md:max-w-md">

          <span className="text-onyx-clay text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
            Nous Trouver
          </span>
          <h2 className="font-display text-3xl text-white mb-8">
            Studio Orléans
          </h2>

          <ul className="space-y-6">
            {/* Adresse */}
            <li className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-onyx-clay transition duration-300 shrink-0">
                <MapPin className="w-4 h-4 text-onyx-clay group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-onyx-mist uppercase tracking-wider mb-1">Adresse</p>
                <p className="text-white font-body text-sm">14 Avenue de la Libération,<br/>45000 Orléans</p>
              </div>
            </li>

            {/* Téléphone */}
            <li className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-onyx-clay transition duration-300 shrink-0">
                <Phone className="w-4 h-4 text-onyx-clay group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-onyx-mist uppercase tracking-wider mb-1">Téléphone</p>
                <p className="text-white font-body text-sm">+33 6 12 34 56 78</p>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-onyx-clay transition duration-300 shrink-0">
                 <Mail className="w-4 h-4 text-onyx-clay group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-onyx-mist uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-body text-sm">contact@onyx-detailing.com</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
             <Clock className="w-4 h-4 text-onyx-clay" />
             <p className="text-xs text-onyx-mist uppercase tracking-wider">
               Lun - Sam : <span className="text-white font-bold">09h - 19h</span>
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}