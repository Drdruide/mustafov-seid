import About_2 from "@/components/About_us/About_2";
import Portfolio from "@/components/Portfolio";
import HeroVariant2 from "@/components/Hero/Hero_variant_2";
import Services_2 from "@/components/Service_/services_2";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroVariant2 />
      <Services_2 />
      <About_2 />
      <Portfolio />
      <Contact />
    </div>
  );
}
