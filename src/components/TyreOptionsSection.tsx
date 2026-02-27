import {
  Award,
  TrendingUp,
  DollarSign,
  CloudSnow,
  Shield,
  PhoneCall,
} from "lucide-react";

const tyreOptions = [
  {
    icon: Award,
    title: "Premium Brands",
    description: "Michelin, Pirelli, and Bridgestone",
    highlight: "Top performance & longevity",
  },
  {
    icon: TrendingUp,
    title: "Mid-Range Options",
    description: "Offering durability and performance",
    highlight: "Best value for money",
  },
  {
    icon: DollarSign,
    title: "Economy Tyres",
    description: "Meet safety standards at lower cost",
    highlight: "Budget-friendly quality",
  },
  {
    icon: CloudSnow,
    title: "Seasonal Tyres",
    description: "Winter, summer, and all-season variants",
    highlight: "Optimized for conditions",
  },
  {
    icon: Shield,
    title: "Run-Flat & Reinforced",
    description: "Added security and peace of mind",
    highlight: "Drive safely after puncture",
  },
];

export function TyreOptionsSection() {
  return (
    <section
      className="relative w-full py-24 lg:py-32 bg-nutyre-bg overflow-hidden"
      aria-labelledby="tyre-options-uk"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-nutyre-bg-secondary/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <header className="max-w-4xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-gray-800 text-nutyre-bg rounded-lg">
              Our Inventory
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-black">
            Tyres for Every Journey
            <br />
            <span className="text-gray-500">and Every Budget</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg md:text-lg max-w-2xl leading-relaxed">
            We stock and fit tyres for all types of drivers, conditions, and
            budgets:
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tyreOptions.map((option) => {
            const Icon = option.icon;
            return (
              <article
                key={option.title}
                className="group bg-white p-8 rounded-3xl border border-nutyre-bg-secondary hover:border-nutyre-yellow transition-all duration-500 hover:shadow-2xl hover:shadow-nutyre-yellow/10 flex flex-col h-full"
              >
                <div className="relative w-16 h-16 mb-8">
                  <div className="absolute inset-0 bg-nutyre-yellow rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative w-full h-full bg-nutyre-text rounded-2xl flex items-center justify-center group-hover:bg-nutyre-yellow transition-colors duration-300">
                    <Icon
                      className="w-8 h-8 text-nutyre-yellow group-hover:text-nutyre-text transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-nutyre-text mb-4 group-hover:text-nutyre-yellow transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-nutyre-text-secondary leading-relaxed mb-6 font-medium">
                    {option.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-nutyre-bg-secondary mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-nutyre-yellow" />
                    <p className="text-nutyre-text text-sm font-bold uppercase tracking-wider">
                      {option.highlight}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
          <div className="bg-nutyre-text p-8 rounded-3xl flex flex-col justify-center items-center text-center relative overflow-hidden group border border-nutyre-text">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-4 p-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full" />
              ))}
            </div>

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-nutyre-yellow rounded-full mx-auto flex items-center justify-center mb-2 animate-pulse">
                <PhoneCall className="text-nutyre-text" size={28} />
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                Not sure what's best for your vehicle? Our friendly experts are
                just a call away and ready to help you make the right choice.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sr-only">
        Buy car tyres in the UK with professional mobile tyre fitting, including
        premium tyres, budget tyres, run-flat tyres, and seasonal tyres supplied
        and fitted at your home or workplace.
      </div>
    </section>
  );
}
