import Image from "next/image";

export default function Realizations() {
  // Simule des photos de tailles différentes (Portrait/Paysage)
  const projects = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1682824972688-7ab3608c9614?q=80&w=980&h=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "PROTECTION CÉRAMIQUE",
      title: "Porsche 911 GT3",
      height: "h-64", // Juste pour simuler la hauteur si tu n'as pas de vraies images
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571753780793-e9a1673f0471?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "DÉTAILING INTÉRIEUR",
      title: "Aston Martin DB11",
      height: "h-96", // Image verticale
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1666195782998-5189c6a40793?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "CORRECTION PEINTURE",
      title: "Mercedes AMG GT",
      height: "h-72",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1661683768380-68b22cbcd376?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "RESTAURATION CUIR",
      title: "Bentley Continental",
      height: "h-56",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1610880846497-7257b23f6138?q=80&w=980&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "TRAITEMENT HYDROPHOBE",
      title: "Audi R8 V10",
      height: "h-64",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=980&h=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "FULL DETAILING",
      title: "BMW M4",
      height: "h-96",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32" id="realisations" aria-labelledby="realisations-title">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 id="realisations-title" className="font-display text-5xl md:text-7xl text-onyx-sand leading-[0.95]">
              Dernières réalisations
            </h2>
        </div>
        <a href="#" className="self-start md:self-end text-sm text-paper border-b border-bronze hover:text-bronze transition-colors">
          Voir le portfolio complet sur Instagram
        </a>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {projects.map((project) => (
          <figure key={project.id} className="break-inside-avoid mb-8">
            <div className="overflow-hidden bg-onyx-carbon border border-onyx-graphite">
              <Image
                src={project.src}
                alt={`${project.title} — ${project.category.toLowerCase()}`}
                width={800}
                height={600}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-display text-2xl text-onyx-sand">{project.title}</span>
              <span className="text-sm text-onyx-silver text-right">
                {project.category.charAt(0) + project.category.slice(1).toLowerCase()}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
