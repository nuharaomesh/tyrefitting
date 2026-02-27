import { CTAButton } from "./CTAButton";
import mobile from "../assets/mobile.png";
import { CheckCircle2, Zap } from "lucide-react";

export function ConvenienceSection() {
  return (
    <section
      className="relative w-full py-20 lg:py-32 !bg-white overflow-hidden tread-texture"
      aria-labelledby="mobile-fitting-heading"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-64 -mt-64"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT CONTENT (Text) */}
          <div className="space-y-8 relative z-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-gray-800 text-nutyre-bg rounded-lg">
                Mobile Convenience
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-black">
                Tyres Fitted at <br />
                <span className="text-gray-500 italic">Your Convenience</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-500">
              <p className="text-lg leading-relaxed">
                Forget the waiting rooms. With NuTyre, we bring the workshop to
                you. Our{" "}
                <a
                  href="https://nutyre.co.uk/mobile-tyre-fitting-service"
                  className="text-blue-400 hover:text-blue-500 font-semibold underline underline-offset-8 decoration-blue/40 hover:decoration-blue-500 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mobile tyre fitting
                </a>{" "}
                units are equipped with cutting-edge tools to carry out precise
                fittings at your home, work, or even roadside. It's more than
                just convenient, it's a safer, faster way to keep your car
                road-ready.
              </p>

              {/* Highlight Box for Urgency */}
              <div className="flex items-start gap-4 p-6 bg-white/5 border-l-4 border-nutyre-yellow rounded-r-xl backdrop-blur-sm">
                <Zap className="text-nutyre-yellow flex-shrink-0" size={24} />
                <p className="text-lg leading-relaxed">
                  Need tyres urgently? We offer{" "}
                  <span className="font-bold">
                    same-day or next-day appointments
                  </span>{" "}
                  in most UK locations — because your time matters.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://nutyre.co.uk/find-a-fitter"
                className="inline-block"
              >
                <CTAButton className="shadow-[0_10px_40px_-10px_rgba(255,204,0,0.3)]">
                  Check Availability & Book Now
                </CTAButton>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL (Image with Layered Design) */}
          <div className="relative order-1 lg:order-2">
            {/* The "Behind" Accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-nutyre-yellow rounded-2xl z-0"></div>

            {/* The Main Image Card */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-nutyre-bg-secondary">
                <img
                  src={mobile}
                  alt="NuTyre mobile tyre fitting unit with cutting-edge tools"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nutyre-bg/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center gap-3">
                <div className="bg-nutyre-yellow p-2 rounded-lg">
                  <CheckCircle2 size={20} className="text-nutyre-bg" />
                </div>
                <span className="text-white font-bold text-sm">
                  Professional Roadside Setup
                </span>
              </div>
            </div>

            {/* Background Texture Detail */}
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-20 pointer-events-none">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-gray-800 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sr-only">
        NuTyre provides emergency tyre replacement, mobile tyre installation,
        roadside tyre fitting, and same-day tyre service across the United
        Kingdom.
      </div>
    </section>
  );
}
