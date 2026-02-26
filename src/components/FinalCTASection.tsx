import { CTAButton } from './CTAButton';

export function FinalCTASection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-nutyre-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card p-8 lg:p-16 rounded-3xl border-2 border-nutyre-yellow/30 overflow-hidden">

          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-[#F6E05E] to-transparent animate-pulse" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              <span className="text-nutyre-text">Get Back on the Road —</span>{' '}
              <span className="text-nutyre-yellow">Safer and Sooner</span>
            </h2>

            <p className="text-nutyre-text-secondary text-xl leading-relaxed max-w-3xl mx-auto">
              Don't waste time in a garage. With NuTyre, expert technicians come
              to you — saving time, stress, and miles on worn tyres.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-nutyre-text-secondary text-sm sm:text-base">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-nutyre-yellow mr-2" />
                All-inclusive pricing
              </span>
              <span className="hidden sm:inline text-nutyre-yellow/30">|</span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-nutyre-yellow mr-2" />
                Trusted mobile fitters across the UK
              </span>
              <span className="hidden sm:inline text-nutyre-yellow/30">|</span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-nutyre-yellow mr-2" />
                Fast online booking
              </span>
            </div>

            <div className="pt-4">
              <a href="https://nutyre.co.uk/find-a-fitter">
                <CTAButton>Check Availability & Book Your Tyre Fitting Now</CTAButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}