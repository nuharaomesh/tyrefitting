import { CTAButton } from './CTAButton';
import mobile from '../assets/mobile.png';
import { MapPinIcon, ClockIcon, TruckIcon } from 'lucide-react';

const benefits = [
  {
    icon: TruckIcon,
    title: 'Mobile Workshop',
    description: 'Fully equipped units come to you'
  },
  {
    icon: ClockIcon,
    title: 'Same-Day Service',
    description: 'Available in most UK locations'
  },
  {
    icon: MapPinIcon,
    title: 'Your Location',
    description: 'Home, work, or roadside'
  }
];

export function ConvenienceSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 tread-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden glass-card p-1">
              <div className="aspect-[4/4] bg-gradient-to-br from-nutyre-bg-secondary to-nutyre-bg rounded-xl flex items-center justify-center">
                <img
                  src={mobile}
                  alt="NuTyre mobile tyre fitting unit with cutting-edge tools"
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
              </div>
            </div>

            {/* Benefit badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="glass-card p-4 rounded-lg text-center"
                  >
                    <Icon
                      className="w-6 h-6 text-nutyre-yellow mx-auto mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-nutyre-text text-xs font-heading font-semibold mb-1">
                      {benefit.title}
                    </p>
                    <p className="text-nutyre-text-secondary text-xs">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              <span className="text-nutyre-text">Tyres Fitted at</span>{' '}
              <span className="text-nutyre-yellow">Your Convenience</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-nutyre-text-secondary text-lg leading-relaxed">
                Forget the waiting rooms. With NuTyre, we bring the workshop to
                you. Our <a href="https://nutyre.co.uk/mobile-tyre-fitting-service" className="text-nutyre-yellow underline" target="_blank" rel="noopener noreferrer">mobile tyre fitting</a> units are equipped with
                cutting-edge tools to carry out precise fittings at your home,
                work, or even roadside. It's more than just convenient, it's a
                safer, faster way to keep your car road-ready.
              </p>

              <p className="text-nutyre-text-secondary text-lg leading-relaxed">
                Need tyres urgently? We offer{' '}
                <span className="text-nutyre-yellow font-semibold">
                  same-day or next-day appointments
                </span>{' '}
                in most UK locations — because your time matters.
              </p>
            </div>

            <div>
              <a href="https://nutyre.co.uk/find-a-fitter">
                <CTAButton>Check Availability & Book Now</CTAButton>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}