import {
  CheckCircle2,
  Wrench,
  Scale,
  Zap,
  Recycle,
  PlusCircle,
  Eye,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Old Tyre Removal",
    description:
      "Safe and efficient removal of your old tyres using professional-grade equipment.",
    step: "01",
  },
  {
    icon: CheckCircle2,
    title: "Expert Fitting",
    description:
      "Precision installation of your new tyres by our certified mobile technicians.",
    step: "02",
  },
  {
    icon: Scale,
    title: "Wheel Balancing",
    description:
      "Specialized balancing to ensure a smooth ride and prevent uneven tread wear.",
    step: "03",
  },
  {
    icon: Zap,
    title: "New Valves",
    description:
      "Standard valve replacement included for safety (excludes TPMS sensors).",
    step: "04",
  },
  {
    icon: Recycle,
    title: "Eco-Disposal",
    description:
      "Environmentally responsible recycling of your old tyres at authorized centers.",
    step: "05",
  },
];

export function IncludedSection() {
  return (
    <section
      className="relative w-full py-24 lg:py-32 bg-yellow-50 overflow-hidden"
      aria-labelledby="included-heading"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-nutyre-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-nutyre-bg/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-gray-800 text-nutyre-bg rounded-lg">
              The Full Package
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-black leading-tight">
              What's Included <br />
              <span className="text-gray-500">In Every Service</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm sm:text-md border-l-2 border-nutyre-yellow pl-6">
            Transparent, professional mobile tyre fitting with no hidden costs.
            Everything you need to get back on the road.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white p-8 rounded-3xl transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50"
              >
                <div className="absolute top-6 right-8 text-4xl font-bold text-gray-200 group-hover:text-nutyre-yellow/50 transition-colors">
                  {feature.step}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-nutyre-yellow transition-colors duration-300">
                  <Icon className="w-7 h-7 text-nutyre-yellow group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}

          {/* Bonus Info Card (The 6th Spot) */}
          <div className="bg-nutyre-bg rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
              <PlusCircle size={120} className="text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="text-gray-600 text-2xl font-bold mb-4">
                Plus More...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="p-1 bg-nutyre-yellow rounded-full">
                    <Gauge size={14} className="text-nutyre-bg" />
                  </div>
                  Tyre Pressure Checks
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="p-1 bg-nutyre-yellow rounded-full">
                    <Eye size={14} className="text-nutyre-bg" />
                  </div>
                  Visual Safety Inspections
                </li>
              </ul>
            </div>

            <p className="text-gray-300 font-medium mt-6 relative z-10 text-sm italic">
              "We provide expert advice to extend your tyre life."
            </p>
          </div>
        </div>

        {/* Trust Footer */}
        <div className=" pt-10 text-center">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            PROFESSIONAL TOOLS • CERTIFIED TECHNICIANS • ECO-FRIENDLY DISPOSAL
          </p>
        </div>
      </div>
      <div className="sr-only">
        Our mobile tyre fitting service includes tyre replacement, wheel
        balancing, valve replacement, puncture tyre service, and mobile tyre
        installation at your home, workplace, or roadside anywhere in the UK.
      </div>
    </section>
  );
}
