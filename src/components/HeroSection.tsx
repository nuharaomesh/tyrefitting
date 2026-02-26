import { useState } from "react";
import { CTAButton } from "./CTAButton";
import fitting from "../assets/fitting.png";
import { ChevronDown, ChevronUp } from "lucide-react";

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={fitting}
          alt="Mobile tyre fitting service van at customer home with technician fitting tyre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 py-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nutyre-yellow/10 border border-nutyre-yellow/20 text-nutyre-yellow text-sm font-medium mb-8 backdrop-blur-md animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nutyre-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nutyre-yellow"></span>
          </span>
          Same-Day Service Available UK-Wide
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight tracking-tight text-white mb-8">
          <span className="text-nutyre-yellow block">
            Tyre Fitting Services
          </span>
          <span className="text-white">Tailored to Your Vehicle</span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-gray-200 text-sm sm:text-xl leading-relaxed">
            Choosing the right{" "}
            <span className="text-nutyre-yellow font-semibold">
              tyre fitting services
            </span>{" "}
            isn't just about wheels — it's about peace of mind. At NuTyre, we
            understand that your vehicle is more than just transport — it's part
            of your daily life, your routine, your freedom. That's why we offer
            a fully mobile, stress-free tyre fitting experience that's built
            around you —
            <span className="text-nutyre-yellow font-semibold">
              {" "}
              your schedule, your location, and your safety
            </span>
            .
          </p>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
            aria-hidden={!isExpanded}
          >
            <p className="text-gray-300 text-sm sm:text-xl leading-relaxed pt-4">
              Whether you drive a saloon, SUV, van, or high-performance vehicle,
              our skilled technicians deliver precision and care with every
              fitting. From sudden punctures to seasonal changes, we bring
              quality tyres and expert fitting directly to your doorstep, so you
              never have to compromise on safety or convenience.
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 mx-auto text-nutyre-yellow hover:text-white transition-colors font-medium text-sm uppercase tracking-widest py-2"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Read More <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://nutyre.co.uk/find-a-fitter"
            className="transform hover:scale-105 transition-transform"
          >
            <CTAButton>Check Availability & Book Now</CTAButton>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 opacity-70">
          <div className="text-white border-l border-nutyre-yellow/30 pl-4">
            <span className="block text-2xl font-bold">100%</span>
            <span className="text-xs uppercase tracking-tighter text-gray-400">
              Mobile Service
            </span>
          </div>
          <div className="text-white border-l border-nutyre-yellow/30 pl-4">
            <span className="block text-2xl font-bold">Expert</span>
            <span className="text-xs uppercase tracking-tighter text-gray-400">
              Technicians
            </span>
          </div>
          <div className="hidden md:block text-white border-l border-nutyre-yellow/30 pl-4">
            <span className="block text-2xl font-bold">UK Wide</span>
            <span className="text-xs uppercase tracking-tighter text-gray-400">
              Doorstep Fitting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
