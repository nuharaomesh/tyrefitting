import { CTAButton } from "./CTAButton";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCTASection() {
  return (
    <section
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="book-mobile-tyre-fitting-uk"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative bg-nutyre-text rounded-[2.5rem] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
            {/* Abstract Tread Pattern / Grid */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="tread-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <path
                    d="M0 20 L40 20 M20 0 L20 40"
                    fill="none"
                    stroke="#fcce00"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tread-pattern)" />
            </svg>
          </div>

          {/* Yellow Glow Spotlight */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-nutyre-yellow/20 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <ShieldCheck size={16} className="text-nutyre-yellow" />
              Quality Guaranteed
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] text-white">
              Get Back on the Road
              <br />
              <span className="text-nutyre-yellow">Safer and Sooner</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Don't waste time in a garage. With NuTyre, expert technicians come
              to you saving time, stress, and miles on worn tyres.
            </p>

            {/* Modern Checklist Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                "All-inclusive pricing",
                "Trusted mobile fitters across the UK",
                "Fast online booking",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/5 backdrop-blur-sm"
                >
                  <CheckCircle2 size={16} className="text-nutyre-yellow" />
                  <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Final Button Action */}
            <div className="pt-8">
              <a
                href="https://nutyre.co.uk/find-a-fitter"
                className="group relative inline-block transform hover:scale-105 transition-all active:scale-95 shadow-[0_20px_50px_rgba(252,206,0,0.2)]"
              >
                <CTAButton className="px-4 py-2 text-xl font-black rounded-2xl flex items-center gap-3">
                  Check Availability & Book Your Tyre Fitting Now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </CTAButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only">
        NuTyre provides professional mobile tyre fitting services across the UK.
        Book a same-day or next-day mobile tyre fitting appointment online. Our
        expert technicians come to your home, work, or roadside for a safe,
        convenient tyre fitting experience.
      </p>
    </section>
  );
}
