import ClientSection from "./_components/ClientSection";
import CTASection from "./_components/CTASection";
import FilterSection from "./_components/FilterSection";
import GallerySection from "./_components/GallerySection";
import HeroSection from "./_components/HeroSection";

export default function Portfolio() {
  return (
    <div className="">
      <HeroSection />
      <FilterSection />
      <GallerySection />
      <ClientSection />
      <CTASection />
    </div>
  );
}
