import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/HeroSection";
import Services from "@/components/sections/ServicesSection";
import Realizations from "@/components/sections/RealisationsSection";
import Studio from "@/components/sections/StudioSection";
import TarifsSection from "@/components/sections/TarifsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink text-paper overflow-x-clip">
      <header>
        <Navbar />
      </header>

      <main>
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