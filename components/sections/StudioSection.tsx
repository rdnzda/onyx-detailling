import Image from "next/image";
import Location from "../ui/Location";

const specs = [
  { value: "5000 Lumens", label: "Éclairage Inspection" },
  { value: "20°C Constant", label: "Curing Céramique" },
];

export default function Studio() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="relative border-t border-line py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

        <div className="lg:col-span-5 flex flex-col">
          <h2 id="studio-title" className="font-display text-5xl md:text-6xl text-onyx-sand leading-[0.95]">
              Un sanctuaire pour<br />
              votre machine.
            </h2>

          <p className="mt-8 text-[0.9375rem] text-onyx-silver leading-relaxed max-w-md">
            Notre studio de 200m² à Orléans est conçu pour la perfection.
            Éclairage hexagrid anti-reflets, hygrométrie contrôlée et sécurité biométrique.
            Ici, le temps s’arrête pour laisser place à la précision.
          </p>

          <dl className="mt-10 lg:mt-auto grid grid-cols-2 border-t border-onyx-graphite">
            {specs.map((s, i) => (
              <div key={s.value} className={`pt-5 pb-2 ${i === 0 ? "pr-4 border-r border-line" : "pl-4"}`}>
                <dt className="text-sm text-onyx-silver mb-2">{s.label}</dt>
                <dd className="font-display text-3xl md:text-4xl text-paper leading-none tabular">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-panel border border-line">
            <Image
              src="https://images.unsplash.com/photo-1708805282706-f44730b7e527?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Atelier de detailing, véhicule sous éclairage d’inspection"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap gap-x-2 text-sm">
            <span className="text-paper">Accès sécurisé</span>
            <span className="text-onyx-silver">sur rendez-vous uniquement</span>
          </figcaption>
        </figure>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <Location />
      </div>
    </section>
  );
}
