import { HeroSection } from "./_components";
import ProductCard from "./_components/ProductCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <HeroSection /> */}
      <div className="m-5">
        <ProductCard />
      </div>
    </div>
  );
}
