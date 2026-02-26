import { CheckIcon } from 'lucide-react';

const pricingFeatures = [
  'All-inclusive pricing',
  'Fitting included',
  'Balancing included',
  'Disposal included',
  'Zero hidden fees'
];

export function PricingSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 tread-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-nutyre-text mb-6">
              Serving the UK with{' '}
              <span className="text-nutyre-yellow">Transparent Pricing</span>
            </h2>
          </div>

          <div className="glass-card p-8 lg:p-12 rounded-2xl mb-12">
            <p className="text-nutyre-text-secondary text-lg leading-relaxed mb-8">
              We believe in honesty. That's why our pricing includes everything
              — fitting, balancing, and disposal — with{' '}
              <span className="text-nutyre-yellow font-semibold">
                zero hidden fees
              </span>
              . You can book your appointment online in just a few clicks and
              view real-time availability instantly.
            </p>

            <p className="text-nutyre-text-secondary text-lg leading-relaxed">
              Whether you're preparing for a road trip, replacing worn tyres, or
              dealing with an unexpected flat, NuTyre is here with trusted {' '}
              <span className="text-nutyre-yellow font-semibold"> tyre
              fitting services </span> that keep the UK rolling — safely and
              conveniently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pricingFeatures.map((feature) => (
              <div
                key={feature}
                className="bg-nutyre-yellow p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#000000] flex items-center justify-center mx-auto mb-4">
                  <CheckIcon
                    className="w-6 h-6 text-nutyre-yellow"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-nutyre-text font-heading font-semibold text-sm">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}