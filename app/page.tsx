import { FeaturesSection } from "@/components/feature-section";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { CommunitySection } from "@/components/social-impact";
import { PartnersSection } from "@/components/partners-section";
import { AISection } from "@/components/ai-section";
import MnoIntegration from "@/components/mno-integration";

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen">
   <Header />
   <HeroSection/>
   <FeaturesSection/>
   <MnoIntegration/>
   <AISection/>
   <CommunitySection/>
   <PartnersSection/>
   <CTASection/>
   <Footer/>
   </div>
  );
}
