import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { HeroSection } from "../components/HeroSection";
import { IncludedSection } from "../components/IncludedSection";
import { ConvenienceSection } from "../components/ConvenienceSection";
import { TyreOptionsSection } from "../components/TyreOptionsSection";
import { PricingSection } from "../components/PricingSection";
import { FinalCTASection } from "../components/FinalCTASection";
import { CTAButton } from "../components/CTAButton";

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
          Tyre Fitting Services | Fast & Reliable UK Coverage | NuTyre
        </title>

        <meta
          name="description"
          content="NuTyre provides fast, reliable mobile tyre fitting across the UK. Same-day service, trusted tyre brands, and professional installation at your location."
        />

        <meta
          name="keywords"
          content="mobile tyre fitting UK, tyre fitting service UK, same day tyre fitting, NuTyre"
        />

        <meta property="og:title" content="NuTyre Mobile Tyre Fitting" />
        <meta
          property="og:description"
          content="Book professional mobile tyre fitting anywhere in the UK."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nutyre.co.uk" />
        <meta property="og:image" content="https://nutyre.co.uk/preview.png" />
        <link rel="canonical" href="https://nutyre.co.uk" />
      </Helmet>

      <main className="w-full min-h-screen bg-nutyre-bg">
        <h1 className="sr-only">Mobile Tyre Fitting Service Across the UK</h1>

        <HeroSection />
        <IncludedSection />
        <ConvenienceSection />
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
