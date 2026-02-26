import {
  CheckCircleIcon,
  WrenchIcon,
  ScaleIcon,
  ZapIcon,
  RecycleIcon
} from 'lucide-react';

const features = [
  {
    icon: WrenchIcon,
    title: 'Removal of existing tyres',
    description: 'Safe and efficient removal of your old tyres'
  },
  {
    icon: CheckCircleIcon,
    title: 'Professional fitting of new tyres',
    description: 'Expert installation with precision tools'
  },
  {
    icon: ScaleIcon,
    title: 'Wheel balancing',
    description: 'Ensures smooth ride and even tyre wear'
  },
  {
    icon: ZapIcon,
    title: 'Standard valve replacement',
    description: 'New valves fitted (excluding TPMS)'
  },
  {
    icon: RecycleIcon,
    title: 'Environmentally responsible tyre disposal',
    description: 'Eco-friendly recycling of old tyres'
  }
];

export function IncludedSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-nutyre-text mb-4">
            What's Included in Our{' '}
            <span className="text-nutyre-yellow">Tyre Fitting Services</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-nutyre-yellow/10 flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-nutyre-yellow"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-nutyre-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-nutyre-text-secondary text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-nutyre-text-secondary text-lg leading-relaxed">
            We also carry out tyre pressure checks, visual inspections, and
            offer helpful advice to extend tyre life and keep you confidently on
            the road.
          </p>
        </div>

      </div>
    </section>
  );
}