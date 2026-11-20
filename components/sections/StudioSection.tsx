import Image from "next/image";
import Location from "../ui/Location";
import { Reveal } from "../ui/Reveal";

const specs = [
  { value: "5000 Lumens", label: "Éclairage Inspection" },
  { value: "20°C Constant", label: "Curing Céramique" },
];

export default function Studio() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="relative border-t border-line py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

        <div className="lg:col-span-5 flex flex-col">
          <p className="kicker mb-4">L’Atelier</p>
          <Reveal>
            <h2 id="studio-title" className="font-display uppercase text-5xl md:text-6xl text-paper leading-[0.9]">
              Un sanctuaire pour<br />
              <span className="text-mute">votre machine.</span>
            </h2>
          </Reveal>

          <p className="mt-8 text-mute leading-relaxed max-w-md">
            Notre studio de 200m² à Orléans est conçu pour la perfection.
            Éclairage hexagrid anti-reflets, hygrométrie contrôlée et sécurité biométrique.
            Ici, le temps s’arrête pour laisser place à la précision.
          </p>

          <dl className="mt-10 lg:mt-auto grid grid-cols-2 border-t border-paper/70">
            {specs.map((s, i) => (
              <div key={s.value} className={`pt-5 pb-2 ${i === 0 ? "pr-4 border-r border-line" : "pl-4"}`}>
                <dt className="text-xs text-mute mb-2">{s.label}</dt>
                <dd className="font-display uppercase text-3xl md:text-4xl text-paper leading-none tabular">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-panel">
            <Image
              src="https://images.unsplash.com/photo-1708805282706-f44730b7e527?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Atelier de detailing, véhicule sous éclairage d’inspection"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-sm border-b border-line pb-3">
            <span className="text-paper">Accès sécurisé</span>
            <span className="text-mute">Sur rendez-vous uniquement</span>
          </figcaption>
        </figure>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">
        <Location />
      </div>
    </section>
  );
}
