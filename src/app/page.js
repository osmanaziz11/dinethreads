import { HeroSection } from "./_components";
import WhyUsSection from "./_components/WhyUsSection";
import ProcessSection from "./_components/ProcessSection";
import CategoriesSection from "./_components/CategoriesSection";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <div className="mt-">
      <HeroSection />
      <CategoriesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
    </div>
  );
}
