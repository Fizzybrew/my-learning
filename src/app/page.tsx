import HeroSection from "./components/HeroSection";
import AdvantagesSection from "./components/AdvantagesSection";
import TechSection from "./components/TechSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdvantagesSection />
      <TechSection />
      <FAQSection />
    </div>
  );
}