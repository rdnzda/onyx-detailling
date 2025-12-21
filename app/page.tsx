import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Background from "@/components/layout/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-onyx-black text-onyx-silver overflow-hidden selection:bg-onyx-chrome selection:text-onyx-black">
      <Background />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12 md:pt-10 md:pb-20 lg:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* COLONNE GAUCHE : Textes */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6 md:space-y-8 order-2 lg:order-1">
          
          <h1 className="font-display text-center lg:text-left text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] text-onyx-titanium uppercase">
            The <br />
            <span className="italic font-light ml-2 md:ml-4">Perfect</span> <br />
            Shine
          </h1>

          <div className="flex items-center gap-3 md:gap-4 text-onyx-chrome text-center text-[10px] sm:text-xs font-body italic">
            <span className="h-[1px] w-8 sm:w-12 bg-onyx-steel"></span>
            <p>We craft automotive perfection</p>
            <span className="h-[1px] w-8 sm:w-12 bg-onyx-steel"></span>
          </div>

          <button className="group bg-onyx-graphite text-onyx-titanium px-6 sm:px-10 py-3 sm:py-4 rounded-full font-body text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-onyx-titanium hover:text-onyx-black transition-all duration-300 mt-2 md:mt-4 flex items-center gap-2 border border-onyx-steel">
            RÉSERVER
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* COLONNE DROITE : Image */}
        <div className="lg:col-span-7 relative order-1 lg:order-2">
          <Image
            src="/img/cars/porsche.png"
            alt="Hero Car"
            width={800}
            height={600}
            className="rounded-xl sm:rounded-[2rem] shadow-2xl shadow-black/50 bg-onyx-silver/10 border border-onyx-graphite object-cover w-full"
          />
          {/* Le fond derrière l'image */}
          <div className="absolute top-6 sm:top-10 right-0 w-[85%] sm:w-[90%] h-[85%] sm:h-[90%] bg-onyx-silver/20 border border-onyx-graphite backdrop-blur-sm rounded-2xl sm:rounded-[3rem] -z-10 transform rotate-2" />
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-8 md:pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center md:items-end">
        
        {/* BLOC 1 : Premium Products */}
        <div className="bg-gradient-to-br from-onyx-graphite to-onyx-carbon p-6 sm:p-8 rounded-xl sm:rounded-[2rem] text-onyx-titanium shadow-2xl relative overflow-hidden group border border-onyx-steel sm:col-span-2 md:col-span-1">
          <div className="relative z-10">
             <h3 className="font-display text-xl sm:text-2xl mb-2">Premium Products Only.</h3>
             <p className="text-onyx-silver text-xs font-body max-w-[250px] md:max-w-[200px]">Partenaire officiel Gtechniq & Rupes pour un résultat certifié.</p>
          </div>
        </div>

        {/* BLOC 2 : Social Proof */}
        <div className="flex flex-col items-center text-center py-4 md:py-0">
          <div className="flex -space-x-3 mb-3 md:mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-onyx-black bg-onyx-steel overflow-hidden relative">
                 <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" />
              </div>
            ))}
          </div>
          <p className="font-display text-3xl sm:text-4xl italic text-onyx-titanium mb-1">500+</p>
          <p className="font-body text-[10px] sm:text-xs text-onyx-chrome uppercase tracking-widest">Véhicules protégés</p>
        </div>

        {/* BLOC 3 : Texte */}
        <div className="flex flex-col items-center text-center md:items-end md:text-right py-4 md:py-0">
          <h3 className="font-body font-medium text-xl sm:text-2xl md:text-3xl text-onyx-titanium uppercase leading-snug mb-4 md:mb-6">
            Nous combinons <span className="text-onyx-chrome">Esthétique</span> & Protection
          </h3>
          <a href="#" className="text-[10px] sm:text-xs font-bold text-onyx-chrome hover:text-onyx-titanium border-b border-onyx-chrome hover:border-onyx-titanium pb-1 transition uppercase tracking-wider">
            Voir le studio
          </a>
        </div>

      </div>
    </main>
  );
}