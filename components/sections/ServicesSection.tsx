import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

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
    <section id="services" aria-labelledby="services-title" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
        <div className="lg:col-span-7">
          <p className="kicker mb-4">Nos expertises</p>
          <Reveal>
            <h2 id="services-title" className="font-display uppercase text-5xl md:text-7xl text-paper leading-[0.9]">
              Restaurer. Protéger.<br />
              <span className="text-mute">Sublimer.</span>
            </h2>
          </Reveal>
        </div>
        <p className="lg:col-span-4 lg:col-start-9 self-end text-mute leading-relaxed max-w-md">
          Nous ne faisons pas du nettoyage. Nous pratiquons la cosmétique automobile de haute précision pour collectionneurs exigeants.
        </p>
      </div>

      {/* Liste des prestations, façon fiche technique */}
      <ol className="border-t border-paper/70">
        {services.map((service) => (
          <li key={service.id} className="group border-b border-line">
            <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.4fr)_9rem] gap-x-4 md:gap-x-8 gap-y-3 py-8 md:py-10">
              <span className={`font-display text-xl tabular ${service.featured ? "text-bronze" : "text-mute"}`}>
                {service.id}
              </span>
              <h3 className="font-display uppercase text-3xl md:text-4xl text-paper leading-none">
                {service.title}
              </h3>
              <p className="col-start-2 md:col-start-auto text-mute leading-relaxed max-w-prose">
                {service.description}
              </p>
              <div className="col-start-2 md:col-start-auto flex md:flex-col md:items-end items-baseline justify-between gap-2">
                <p className="text-paper">
                  <span className="text-sm text-mute">Dès </span>
                  <span className="font-display text-3xl tabular">{service.from}&nbsp;€</span>
                </p>
                <a
                  href="#tarifs"
                  className="inline-flex items-center gap-1.5 text-sm text-paper underline underline-offset-4 decoration-line-strong hover:decoration-bronze hover:text-bronze"
                  aria-label={`Découvrir les tarifs : ${service.title}`}
                >
                  Découvrir <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
