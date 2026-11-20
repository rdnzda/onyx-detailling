export default function Location() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="grid grid-cols-1 lg:grid-cols-12 border border-line">

      {/* Coordonnées */}
      <div className="lg:col-span-5 bg-panel p-6 md:p-10 order-2 lg:order-1">
        <h2 id="contact-title" className="font-display text-4xl md:text-5xl text-onyx-sand leading-none mb-8">
          Studio Orléans
        </h2>

        <dl className="text-sm">
          <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 border-t border-line">
            <dt className="text-onyx-silver">Adresse</dt>
            <dd className="text-paper">14 Avenue de la Libération,<br />45000 Orléans</dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 border-t border-line">
            <dt className="text-onyx-silver">Téléphone</dt>
            <dd className="text-paper tabular">+33 6 12 34 56 78</dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 border-t border-line">
            <dt className="text-onyx-silver">Email</dt>
            <dd className="text-paper break-all">contact@onyx-detailing.com</dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 border-y border-line">
            <dt className="text-onyx-silver">Horaires</dt>
            <dd className="text-paper tabular">Lun – Sam : 09h – 19h</dd>
          </div>
        </dl>
      </div>

      {/* Carte */}
      <div className="lg:col-span-7 relative h-[320px] md:h-[420px] lg:h-auto lg:min-h-[480px] order-1 lg:order-2">
        <iframe
          title="Carte : 14 Avenue de la Libération, Orléans"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.9125167446878!2d1.8995571124390447!3d47.91873016625085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4fb2711cdfcf5%3A0x2665ca365d65eef0!2s14%20Av.%20de%20la%20Lib%C3%A9ration%2C%2045000%20Orl%C3%A9ans!5e0!3m2!1sfr!2sfr!4v1766417403708!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full [filter:grayscale(100%)_invert(90%)_contrast(110%)_brightness(85%)]"
        />
      </div>
    </section>
  );
}
