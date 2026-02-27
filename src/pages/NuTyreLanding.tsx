import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { HeroSection } from "../components/HeroSection";
import { IncludedSection } from "../components/IncludedSection";
import { ConvenienceSection } from "../components/ConvenienceSection";
import { TyreOptionsSection } from "../components/TyreOptionsSection";
import { PricingSection } from "../components/PricingSection";
import { FinalCTASection } from "../components/FinalCTASection";
import { CTAButton } from "../components/CTAButton";
import { BenefitsSection } from "../components/BenefitsSection";

export function NuTyreLanding() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Mobile Tyre Fitting UK | Same-Day Service at Your Location | NuTyre
        </title>

        <meta
          name="description"
          content="Book mobile tyre fitting anywhere in the UK with NuTyre. Same-day service, professional technicians, and trusted tyre brands delivered to your location."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mobile Tyre Fitting UK | NuTyre" />
        <meta
          property="og:description"
          content="Same-day mobile tyre fitting service across the UK."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nutyre.co.uk/" />
        <meta property="og:image" content="https://nutyre.co.uk/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NuTyre Mobile Tyre Fitting UK" />
        <meta
          name="twitter:description"
          content="Professional mobile tyre fitting at your location."
        />
        <meta name="twitter:image" content="https://nutyre.co.uk/preview.png" />

        <link rel="canonical" href="https://nutyre.co.uk/" />
        <link rel="preload" as="image" href="/assets/tyre_fitting.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NuTyre",
            url: "https://nutyre.co.uk",
            image: "https://nutyre.co.uk/preview.png",
            description: "Mobile tyre fitting service across the UK",
            areaServed: "United Kingdom",
            serviceType: "Mobile Tyre Fitting",
          })}
        </script>
      </Helmet>

      <main className="w-full min-h-screen bg-nutyre-bg">
        <h1 className="sr-only">Mobile Tyre Fitting Service Across the UK</h1>

        <HeroSection />
        <IncludedSection />
        <ConvenienceSection />
        <BenefitsSection />
        <TyreOptionsSection />
        <PricingSection />
        <FinalCTASection />

        <div
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-nutyre-bg-secondary/95 backdrop-blur-lg border-t border-nutyre-yellow/20 transition-transform duration-300 lg:hidden ${
            showStickyCTA ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <a href="https://nutyre.co.uk/find-a-fitter">
            <CTAButton size="default" className="w-full">
              Book Your Tyre Fitting
            </CTAButton>
          </a>
        </div>
      </main>
    </>
  );
}
