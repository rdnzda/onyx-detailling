import Navbar from "@/components/ui/Navbar";
import Background from "@/components/layout/Background";
import Hero from "@/components/sections/HeroSection";
import Services from "@/components/sections/ServicesSection";
import Realizations from "@/components/sections/RealisationsSection";
import Studio from "@/components/sections/StudioSection";
import TarifsSection from "@/components/sections/TarifsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-onyx-black text-onyx-silver overflow-hidden selection:bg-onyx-chrome selection:text-onyx-black">
      <Background />
      <header>
        <Navbar />
      </header>

      {/* --- HERO SECTION --- */}
      <main className="">
        <Hero />
        <Services />
        <Realizations />
        <Studio />
        <TarifsSection />
      </main>
      <Footer />
    </div>
  );
}