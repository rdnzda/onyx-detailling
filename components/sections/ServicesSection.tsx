
const services = [
  {
    id: "01",
    title: "Correction de Peinture",
    description: "Élimination des micro-rayures et hologrammes pour retrouver une profondeur miroir. Polissage en 1, 2 ou 3 étapes.",
    from: "450",
  },
  {
    id: "02",
    title: "Traitement Céramique",
    description: "Protection hydrophobe longue durée (2 à 5 ans). Bouclier invisible contre les UV, pluies acides et contaminants.",
    from: "600",
    featured: true,
  },
  {
    id: "03",
    title: "Soin Intérieur & Cuir",
    description: "Nettoyage vapeur, pressing des moquettes et soin nourrissant des cuirs. Finition mate et odeur du neuf.",
    from: "250",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20">
        <h2 id="services-title" className="lg:col-span-7 font-display text-5xl md:text-7xl text-onyx-sand leading-[0.95]">
          Restaurer. Protéger.<br />Sublimer.
        </h2>
        <p className="lg:col-span-4 lg:col-start-9 self-end text-[0.9375rem] text-onyx-silver leading-relaxed max-w-sm">
          Nous ne faisons pas du nettoyage. Nous pratiquons la cosmétique automobile de haute précision pour collectionneurs exigeants.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
        {services.map((service) => (
          <li key={service.id} className="flex flex-col">
            <span className={`block h-px w-12 mb-7 ${service.featured ? "bg-bronze" : "bg-onyx-steel"}`} aria-hidden="true" />
            <h3 className="font-display text-3xl md:text-[2.125rem] text-onyx-sand leading-tight">
              {service.title}
            </h3>
            <p className="mt-4 text-[0.9375rem] text-onyx-silver leading-relaxed max-w-[38ch] flex-grow">
              {service.description}
            </p>
            <div className="mt-8 flex items-baseline justify-between gap-4">
              <p className="text-onyx-silver text-sm">
                À partir de <span className="font-display text-3xl text-paper tabular ml-1">{service.from}&nbsp;€</span>
              </p>
              <a
                href="#tarifs"
                className="text-sm text-paper border-b border-bronze hover:text-bronze transition-colors"
                aria-label={`Voir les tarifs : ${service.title}`}
              >
                Voir les tarifs
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
