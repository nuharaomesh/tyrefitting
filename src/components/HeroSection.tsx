import { CTAButton } from "./CTAButton";
import fitting from "../assets/tyre_fitting.jpg";
import { MapPin, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col overflow-hidden bg-nutyre-bg"
      aria-labelledby="Mobile tyre fitting hero section"
    >
      <div className="relative w-full min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={fitting}
            alt="Mobile tyre fitting service van at customer home with technician fitting tyre"
            loading="eager"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-20">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nutyre-yellow/10 border border-nutyre-yellow/20 text-nutyre-yellow text-sm font-medium mb-8 backdrop-blur-md animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nutyre-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nutyre-yellow"></span>
              </span>
              Same-Day Service Available UK-Wide
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading m-0 font-extrabold leading-[1.1] text-white">
              Tyre Fitting Services Tailored to Your Vehicle
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://nutyre.co.uk/find-a-fitter"
                aria-label="Check availability and book mobile tyre fitting service in the UK"
                className="transform hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                <CTAButton className="px-5 py-2 text-lg font-bold text-sm">
                  Check Availability & Book Now
                </CTAButton>
              </a>
            </div>

            {/* Mini Trust Props */}
            <div className="flex flex-wrap gap-6 pt-6 mt-10">
              <div className="flex items-center gap-2 text-white/80">
                <ShieldCheck className="text-nutyre-yellow" size={20} />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="text-nutyre-yellow" size={20} />
                <span className="text-sm font-medium">At Your Doorstep</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full bg-white py-10 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-2">
            <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-3xl mx-auto">
              Choosing the right tyre fitting services isn't just about wheels —
              it's about peace of mind. At NuTyre, we understand that your
              vehicle is more than just transport — it's part of your daily
              life, your routine, your freedom. That's why we offer a fully
              mobile, stress-free tyre fitting experience that's built around
              you — your schedule, your location, and your safety.
            </p>

            <p className="text-gray-600 text-base md:text-md leading-relaxed pt-4 max-w-3xl mx-auto">
              Whether you drive a saloon, SUV, van, or high-performance vehicle,
              our skilled technicians deliver precision and care with every
              fitting. From sudden punctures to seasonal changes, we bring
              quality tyres and expert fitting directly to your doorstep, so you
              never have to compromise on safety or convenience.
            </p>
            <h2 className="sr-only">
              Same day mobile tyre fitting available at your home, work, or
              roadside anywhere in the UK
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 opacity-70">
            <div className="text-white pl-4">
              <span className="block text-2xl font-bold text-black">100%</span>
              <span className="text-xs uppercase tracking-tighter text-gray-400">
                Mobile Service
              </span>
            </div>
            <div className="text-white border-l border-gray-300 pl-4">
              <span className="block text-2xl font-bold text-black">
                Expert
              </span>
              <span className="text-xs uppercase tracking-tighter text-gray-400">
                Technicians
              </span>
            </div>
            <div className="hidden md:block text-white border-l border-gray-300 pl-4">
              <span className="block text-2xl font-bold text-black">
                UK Wide
              </span>
              <span className="text-xs uppercase tracking-tighter text-gray-400">
                Doorstep Fitting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
