import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const mnoList = [
  { logo: "/assets/partners/mastercard.png" }, 
  { logo: "/assets/partners/airtel.png" },
  { logo: "/assets/partners/yas.png" },
  { logo: "/assets/partners/halotel.png" },
  { logo: "/assets/partners/m-pesa.png" },
  { logo: "/assets/partners/tanesco.png" },
  { logo: "/assets/partners/gepg.png" },
  { logo: "/assets/partners/dawasa.png" },
  { logo: "/assets/partners/rita.png" },
  { logo: "/assets/partners/sgr.png" }, 
];

const MnoCard = ({ logo }: { logo: string }) => (
  <Card
    className={cn(
      "relative flex items-center justify-center h-28 w-28 sm:h-32 sm:w-32 rounded-2xl bg-white/40 border border-gray-200 transition-transform duration-300 hover:scale-102 hover:shadow hover:border-primary/40 group"
    )}
  >
    <img className="h-16 w-16 sm:h-20 sm:w-20 object-contain transition-all duration-300 group-hover:drop-shadow-[0_2px_12px_rgba(0,120,255,0.15)]" alt="MNO Logo" src={logo} />
  </Card>
);

export default function MnoIntegration() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text and Button */}
        <div className="flex flex-col items-start justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            All Payments. One Platform.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-normal max-w-md">
            Accept cards, mobile money, and more all in one place, with one simple integration.
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-2">
            {["Card", "Scan to Pay", "EFT", "SnapScan", "Apple Pay"].map((method) => (
              <li key={method} className="flex items-center text-gray-700 text-sm font-medium">
                <Check className="w-4 h-4 text-primary mr-2" />
                {method}
              </li>
            ))}
          </ul>
          <Button className="bg-primary text-white px-8 py-6 rounded font-semibold hover:bg-primary transition text-base mt-2">
            Get Started Now
          </Button>
        </div>
        {/* Right: Logo Grid with dots pattern background */}
        <div className="w-full flex items-center justify-center relative min-h-[400px]">
          <div className="absolute inset-0 z-0 opacity-40 [background-image:radial-gradient(circle,#e4e4e7_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 w-full relative z-10">
            {mnoList.map((mno, i) => (
              <MnoCard key={i} logo={mno.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}