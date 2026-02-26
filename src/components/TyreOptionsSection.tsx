import {
  AwardIcon,
  TrendingUpIcon,
  DollarSignIcon,
  CloudSnowIcon,
  ShieldIcon
} from 'lucide-react';

const tyreOptions = [
  {
    icon: AwardIcon,
    title: 'Premium Brands',
    description: 'Michelin, Pirelli, and Bridgestone',
    highlight: 'Top performance & longevity'
  },
  {
    icon: TrendingUpIcon,
    title: 'Mid-Range Options',
    description: 'Offering durability and performance',
    highlight: 'Best value for money'
  },
  {
    icon: DollarSignIcon,
    title: 'Economy Tyres',
    description: 'Meet safety standards at lower cost',
    highlight: 'Budget-friendly quality'
  },
  {
    icon: CloudSnowIcon,
    title: 'Seasonal Tyres',
    description: 'Winter, summer, and all-season variants',
    highlight: 'Optimized for conditions'
  },
  {
    icon: ShieldIcon,
    title: 'Run-Flat & Reinforced',
    description: 'Added security and peace of mind',
    highlight: 'Drive safely after puncture'
  }
];

export function TyreOptionsSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-nutyre-text mb-6">
            Tyres for Every Journey —{' '}
            <span className="text-nutyre-yellow">and Every Budget</span>
          </h2>

          <p className="text-nutyre-text-secondary text-xl max-w-3xl mx-auto">
            We stock and fit tyres for all types of drivers, conditions, and budgets:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tyreOptions.map((option) => {
            const Icon = option.icon;
            return (
              <article
                key={option.title}
                className="bg-nutyre-yellow/10 p-8 rounded-xl group"
              >
                <div className="w-16 h-16 rounded-xl bg-nutyre-yellow/10 flex items-center justify-center mb-6 group-hover:bg-nutyre-yellow/20 transition-colors duration-300">
                  <Icon
                    className="w-8 h-8 text-nutyre-yellow"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-nutyre-text mb-3">
                  {option.title}
                </h3>

                <p className="text-nutyre-text-secondary mb-4 leading-relaxed">
                  {option.description}
                </p>

                <div className="pt-4 border-t border-nutyre-yellow/20">
                  <p className="text-nutyre-yellow text-sm font-semibold">
                    {option.highlight}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center glass-card p-8 rounded-xl">
          <p className="text-nutyre-text-secondary text-lg leading-relaxed">
            Not sure what's best for your vehicle? Our friendly experts are just
            a call away and ready to help you make the right choice.
          </p>
        </div>

      </div>
    </section>
  );
}