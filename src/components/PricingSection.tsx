import { Check, CreditCard, Search } from "lucide-react";

const pricingFeatures = [
  "All-inclusive pricing",
  "Fitting included",
  "Balancing included",
  "Disposal included",
  "Zero hidden fees",
];

export function PricingSection() {
  return (
    <section
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden tread-texture"
      aria-labelledby="mobile-tyre-fitting-pricing-uk"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nutyre-yellow to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header with modern Badge */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-gray-800 text-nutyre-bg rounded-lg">
              Trusted Across the UK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-nutyre-text mb-6">
              Serving the UK with <br />
              <span className="text-nutyre-yellow">Transparent Pricing</span>
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="relative group">
            {/* Design elements for the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-nutyre-yellow to-nutyre-bg-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-white border border-nutyre-bg-secondary p-8 md:p-16 rounded-[2rem] shadow-xl">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-6">
                    <p className="text-nutyre-text-secondary text-xl leading-relaxed">
                      We believe in honesty. That's why our pricing includes
                      everything — fitting, balancing, and disposal — with{" "}
                      <span className="text-nutyre-text font-bold border-b-4 border-nutyre-yellow">
                        zero hidden fees
                      </span>
                      . You can book your appointment online in just a few
                      clicks and view real-time availability instantly.
                    </p>

                    <p className="text-nutyre-text-secondary text-lg leading-relaxed border-l-4 border-nutyre-bg-secondary pl-6 italic">
                      Whether you're preparing for a road trip, replacing worn
                      tyres, or dealing with an unexpected flat, NuTyre is here
                      with trusted{" "}
                      <span className="text-nutyre-text font-bold">
                        {" "}
                        tyre fitting services{" "}
                      </span>{" "}
                      that keep the UK rolling — safely and conveniently.
                    </p>
                  </div>

                  {/* Quick Action Link */}
                  <div className="flex items-center gap-4 text-nutyre-text font-bold">
                    <div className="w-10 h-10 rounded-full bg-nutyre-yellow flex items-center justify-center">
                      <Search size={18} />
                    </div>
                    <span>Check Real-Time Availability &rarr;</span>
                  </div>
                </div>

                {/* Visual Feature List (Right Side) */}
                <div className="lg:col-span-5 bg-nutyre-text rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-nutyre-yellow/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                  <h3 className="text-nutyre-yellow font-bold uppercase tracking-widest text-sm mb-6">
                    What You See Is What You Pay
                  </h3>

                  <ul className="space-y-5">
                    {pricingFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-4 group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutyre-yellow flex items-center justify-center transition-transform group-hover/item:scale-110">
                          <Check
                            className="w-4 h-4 text-nutyre-text"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-gray-200 font-medium tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3 opacity-60">
                    <CreditCard size={20} />
                    <span className="text-xs uppercase font-bold tracking-tighter">
                      Secure Instant Booking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom SEO text / Trust Indicator */}
          <div className="mt-16 text-center">
            <p className="text-nutyre-text-secondary/50 font-bold uppercase tracking-[0.4em] text-[10px]">
              No Surprises • No Extras • Just Quality Service
            </p>
          </div>
        </div>
      </div>
      <div className="sr-only">
        Mobile tyre fitting cost in the UK includes tyre installation, wheel
        balancing, and tyre disposal. Book affordable mobile tyre fitting
        services near you with transparent pricing.
      </div>
    </section>
  );
}
