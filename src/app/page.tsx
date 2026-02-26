import Link from "next/link";
import Image from "next/image";
import {
  HeartPulse,
  Microscope,
  Scissors,
  ShieldCheck,
  Truck,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3D54] to-[#1D6375] border-b border-white/10 pt-24 pb-32 lg:pt-36 lg:pb-40">

        {/* Subtle Lighting Effects Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Glass Specular Highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Text Content Area */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <span className="w-2 h-2 rounded-full bg-[#A8D8DF] animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium tracking-wide">Premium Medical Supplies</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                A Culture of Caring, A Legacy of Quality
              </h1>
              <p className="text-lg md:text-xl text-[#D6E9EC] mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Critical medical and surgical supplies delivered across the UAE & GCC with unmatched logistics reliability. Empowering facilities of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/products" className="group relative overflow-hidden rounded-full p-px shadow-[0_0_30px_rgba(58,171,184,0.3)] hover:shadow-[0_0_40px_rgba(58,171,184,0.5)] transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#A8D8DF] via-[#3AABB8] to-[#1D6375] opacity-70 group-hover:opacity-100 transition-opacity"></span>
                  <div className="relative bg-[#0B3D54] group-hover:bg-transparent px-8 py-4 rounded-full transition-all duration-300">
                    <span className="text-white font-semibold text-[15px] flex items-center gap-2">
                      Explore Products
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </div>
                </Link>
                <Link href="/contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-[15px] transition-all text-center">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image Area (Square, Unstretched, 100% visible) */}
            <div className="relative w-full max-w-md mx-auto aspect-square order-1 lg:order-2">
              <Image
                src="/hero.png"
                alt="Medical Supplies Hero"
                fill
                className="object-contain opacity-100 relative z-20 brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] drop-shadow-[0_0_15px_rgba(168,216,223,0.5)] transition-all duration-500 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-white border-b border-[#D6E9EC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#4A6870] font-semibold text-sm uppercase tracking-widest mb-10">Trusted by Industry Leaders</p>

          {/* Scrolling Marquee Container */}
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
              {/* Partner Logos (Placeholders using tech/medical names) */}
              {['MedTech Global', 'SurgiPrime', 'BioNova Labs', 'CareEquip UAE', 'HealthPlus Solutions', 'Apex Diagnostics'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center min-w-[150px] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
                  <span className="text-2xl font-bold font-serif text-[#0B3D54]">{partner}</span>
                </div>
              ))}
              {/* Duplicate array for seamless infinite scroll */}
              {['MedTech Global', 'SurgiPrime', 'BioNova Labs', 'CareEquip UAE', 'HealthPlus Solutions', 'Apex Diagnostics'].map((partner, index) => (
                <div key={`dup-${index}`} className="flex items-center justify-center min-w-[150px] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
                  <span className="text-2xl font-bold font-serif text-[#0B3D54]">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glossy Trust Banner */}
      <section className="py-12 bg-gradient-to-r from-[#164D5C] to-[#1D6375] border-b border-[#2A8A9E]/30 relative">
        {/* Top edge highlight matching the hero bottom */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3AABB8]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <p className="text-4xl font-serif text-white mb-2 drop-shadow-md">9+</p>
              <p className="text-[11px] text-[#A8D8DF] font-semibold uppercase tracking-[0.2em]">Years Active</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-white mb-2 drop-shadow-md">10k+</p>
              <p className="text-[11px] text-[#A8D8DF] font-semibold uppercase tracking-[0.2em]">SKUs Provided</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-white mb-2 drop-shadow-md">ISO</p>
              <p className="text-[11px] text-[#A8D8DF] font-semibold uppercase tracking-[0.2em]">Certified</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-white mb-2 drop-shadow-md">24/7</p>
              <p className="text-[11px] text-[#A8D8DF] font-semibold uppercase tracking-[0.2em]">Support Line</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Focus - Glassmorphic Cards on Dark/Light Gradient */}
      <section className="py-24 bg-gradient-to-b from-[#F0F7F9] to-[#F4FBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Portfolio Focus</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#0B3D54] max-w-2xl mx-auto leading-tight">Engineered for Every Clinical Environment</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-[#D6E9EC]">
                  <HeartPulse className="w-6 h-6 text-[#267D91]" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">Clinical Equipment</h4>
                <p className="text-[14px] text-[#4A6870] leading-relaxed mb-8">Heavy-duty imaging, monitoring, and diagnostic hardware constructed for modern hospital wards.</p>
                <Link href="/products" className="text-[13px] font-bold text-[#2A8A9E] hover:text-[#0B3D54] inline-flex items-center group/btn">
                  View Category
                  <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-[#D6E9EC]">
                  <Microscope className="w-6 h-6 text-[#267D91]" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">Laboratory Supplies</h4>
                <p className="text-[14px] text-[#4A6870] leading-relaxed mb-8">High-precision instrumentation, sterile reagents, and glassware dedicated to diagnostic centers.</p>
                <Link href="/products" className="text-[13px] font-bold text-[#2A8A9E] hover:text-[#0B3D54] inline-flex items-center group/btn">
                  View Category
                  <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-[#D6E9EC]">
                  <Scissors className="w-6 h-6 text-[#267D91]" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">Surgical Consumables</h4>
                <p className="text-[14px] text-[#4A6870] leading-relaxed mb-8">Sterile drapes, rapid-deploy sutures, and specialized protective wear for high-stakes procedures.</p>
                <Link href="/products" className="text-[13px] font-bold text-[#2A8A9E] hover:text-[#0B3D54] inline-flex items-center group/btn">
                  View Category
                  <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossy Dark Feature & Industries Split */}
      <section className="py-24 bg-[#F4FBFC] overflow-hidden relative">
        {/* Background mesh element linking the visual style */}
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#EBF5F8] to-transparent rounded-full blur-3xl transform translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Quality Promise */}
            <div>
              <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#3AABB8] mb-4 drop-shadow-sm">Core Values</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-[#0B3D54] mb-6 leading-tight">Why Healthcare Leaders Choose Al Afiya</h3>
              <p className="text-[16px] text-[#4A6870] leading-relaxed mb-10 font-light">We recognize that in healthcare, logistics is directly tied to life-saving outcomes. Our infrastructure is built solely around undeniable reliability and compliance.</p>

              <ul className="space-y-6">
                <li className="flex items-start bg-white/50 backdrop-blur-md p-6 rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-[#D6E9EC] hover:border-[#A8D8DF] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-xl shadow-inner flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[16px] font-bold text-[#0B3D54] mb-2 tracking-tight">Uncompromising Compliance</h4>
                    <p className="text-[14px] text-[#4A6870] leading-relaxed">We distribute exclusively from globally recognized, ISO-certified manufacturing partners.</p>
                  </div>
                </li>
                <li className="flex items-start bg-white/50 backdrop-blur-md p-6 rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-[#D6E9EC] hover:border-[#A8D8DF] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-xl shadow-inner flex items-center justify-center text-white">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[16px] font-bold text-[#0B3D54] mb-2 tracking-tight">Dynamic Supply Chain</h4>
                    <p className="text-[14px] text-[#4A6870] leading-relaxed">Optimized central warehousing ensures rapid deployment of critical items immediately.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side: Visual Industries Grid (Glossy Dark Card) */}
            <div className="relative">
              {/* Soft glow behind the dark card */}
              <div className="absolute inset-0 bg-[#A8D8DF] rounded-[40px] transform translate-x-4 translate-y-4 blur-xl opacity-40"></div>

              <div className="relative bg-gradient-to-br from-[#0B3D54] via-[#164D5C] to-[#267D91] rounded-[40px] p-10 md:p-14 shadow-2xl overflow-hidden border border-[#3AABB8]/20">
                {/* Inner glass highlights */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-[30px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-[#3AABB8] mix-blend-screen rounded-full blur-[60px] opacity-30 pointer-events-none"></div>

                <h4 className="text-white font-serif text-3xl mb-10 relative z-10 flex items-center justify-between">
                  Sectors We Supply
                  <span className="w-12 h-px bg-gradient-to-r from-[#A8D8DF] to-transparent"></span>
                </h4>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[20px] p-6 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <Building2 className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Hospitals</span>
                  </div>
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[20px] p-6 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <Stethoscope className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Clinics</span>
                  </div>
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[20px] p-6 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <FlaskConical className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Diag. Labs</span>
                  </div>
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[20px] p-6 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <Pill className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Pharmacies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Block - Deep Rich Gradient */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0B3D54] to-[#164D5C] border-t border-[#1D6375]">
        {/* Glow Effects */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <div className="w-full max-w-4xl h-[400px] bg-gradient-to-r from-[#2A8A9E] via-[#3AABB8] to-transparent blur-[120px] opacity-30 transform -rotate-12"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg">Equally Dedicated to Your Success.</h2>
          <p className="text-[#D6E9EC] text-[16px] md:text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Whether outfitting a new surgical wing or ensuring daily consumable flow, let&apos;s architect a solid supply framework together.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="group bg-white hover:bg-[#F4FBFC] text-[#0B3D54] px-10 py-5 rounded-full font-bold text-[15px] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(58,171,184,0.3)] hover:-translate-y-1 flex items-center gap-3">
              Initiate Consultation
              <span className="text-[#3AABB8] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2A8A9E]/60 to-transparent"></div>
      </section>
    </div>
  );
}
