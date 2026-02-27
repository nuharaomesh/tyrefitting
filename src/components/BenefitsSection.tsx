import { Truck, Clock, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Mobile Workshop",
    description: "Fully equipped units come to you",
    tag: "Pro Equipment",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Available in most UK locations",
    tag: "Fast Response",
  },
  {
    icon: MapPin,
    title: "Your Location",
    description: "Home, work, or roadside",
    tag: "Total Flexibility",
  },
];

export function BenefitsSection() {
  return (
    <section
      className="w-full bg-nutyre-bg-secondary/50 py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="mobile-tyre-fitting-benefits"
    >
      {/* Decorative Background Element - Subtle Yellow Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-72 h-72 bg-nutyre-yellow/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Gives the cards context */}
        <div className="text-center mb-16">
          <h2 className="text-nutyre-text text-sm font-bold uppercase tracking-[0.3em] mb-3">
            The NuTyre Advantage
          </h2>
          <div className="h-1 w-20 bg-nutyre-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-nutyre-bg-secondary rounded-[2.5rem] overflow-hidden bg-nutyre-bg shadow-2xl shadow-nutyre-text/5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative p-10 lg:p-14 flex flex-col items-center text-center transition-all duration-500 hover:bg-nutyre-bg-secondary/20
                  ${index !== benefits.length - 1 ? "md:border-r border-nutyre-bg-secondary" : ""}
                  ${index === 0 ? "md:rounded-l-[2.5rem]" : ""}
                  ${index === benefits.length - 1 ? "md:rounded-r-[2.5rem]" : ""}
                `}
              >
                {/* Top Badge */}
                <span className="absolute top-6 px-3 py-1 bg-nutyre-bg-secondary text-[10px] font-bold uppercase tracking-widest text-nutyre-text-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:top-8 transition-all duration-300">
                  {benefit.tag}
                </span>

                {/* Icon with Dynamic Background */}
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-nutyre-yellow rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20" />
                  <div className="relative w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-nutyre-bg-secondary group-hover:border-nutyre-yellow transition-colors duration-300">
                    <Icon
                      className="w-10 h-10 text-nutyre-text group-hover:text-nutyre-yellow transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-nutyre-text text-2xl font-black tracking-tight leading-none">
                    {benefit.title}
                  </h3>
                  <p className="text-nutyre-text-secondary text-base leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Number Indicator */}
                <div className="mt-8 text-4xl font-black text-nutyre-bg-secondary group-hover:text-nutyre-yellow transition-colors">
                  0{index + 1}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-nutyre-yellow group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-nutyre-text-secondary/60 text-sm font-medium">
            Professional mobile fitting units serving thousands of customers
            monthly.
          </p>
        </div>
      </div>
      <div className="sr-only">
        NuTyre provides mobile tyre fitting, emergency tyre replacement,
        roadside tyre installation, and same-day tyre services across the United
        Kingdom.
      </div>
    </section>
  );
}
