import { FeaturesSection } from "@/components/feature-section";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen">
   <Header />
   <HeroSection/>
   <FeaturesSection/>
   <>
   <div>
    <h1 className="h-screen">Hello</h1>
   </div>
   </>
   </div>
  );
}
