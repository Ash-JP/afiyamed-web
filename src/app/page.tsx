"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame, useTransform, useSpring, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Reusable scroll-reveal animation variants
const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } }
};

import {
  HeartPulse,
  Microscope,
  Scissors,
  ShieldCheck,
  Truck,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  Award,
  Package,
  BadgeCheck,
  PhoneCall
} from "lucide-react";

function DraggableMarquee({ children, baseVelocity = -1 }: { children: React.ReactNode, baseVelocity?: number }) {
  const baseX = useMotionValue(0);

  // Create a spring for smooth movement
  const smoothX = useSpring(baseX, {
    damping: 50,
    stiffness: 400
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [children]);

  const wrapValue = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  useAnimationFrame((t, delta) => {
    if (contentWidth === 0) return;

    // Constant auto-scroll
    const moveBy = baseVelocity * (delta / 16);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(smoothX, (v: number) => {
    if (contentWidth === 0) return "0px";
    return `${wrapValue(-contentWidth, 0, v)}px`;
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        ref={containerRef}
        className="flex flex-nowrap"
        style={{ x }}
        drag="x"
        dragElastic={0.1}
        onDrag={(e, info) => {
          // Manually update baseX during drag for immediate feedback
          baseX.set(baseX.get() + info.delta.x);
        }}
        onDragEnd={(e, info) => {
          // Add inertia based on drag velocity
          baseX.set(baseX.get() + info.velocity.x * 0.1);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Partners & Stats */}
      <section className="relative overflow-hidden pt-16 pb-8 lg:pt-20 lg:pb-10 flex flex-col justify-center bg-[#0B3D54]">

        {/* Cinematic Video Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B3D54]">
          {/* Video Element */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          
          {/* Medium gradient overlay to let the video shine through while keeping text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D54]/80 via-[#124D64]/70 to-[#1D6375]/80"></div>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mb-4 lg:mb-8 pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

            {/* Text Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-[1.1] tracking-tight drop-shadow-2xl" style={{ fontFamily: "var(--font-playfair), serif" }}>
                <span className="font-light italic text-white">A Culture of Caring,</span><br />
                <span className="font-semibold">A Legacy of Quality</span>
              </h1>
              <p className="text-base md:text-lg text-[#D6E9EC] mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
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
              </div>
            </motion.div>

            {/* Hero Image Area (Square, Unstretched, 100% visible) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-square order-1 lg:order-2 animate-hero-breath cursor-pointer"
            >
              <Image
                src="/hero.webp"
                alt="Medical Supplies Hero"
                fill
                className="object-contain opacity-30 relative z-20 brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:brightness-0 hover:invert hover:opacity-50"
                priority
              />
            </motion.div>

          </div>
        </div>

        {/* Our Partners Section (Integrated into Hero Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <p className="text-[14px] font-semibold tracking-[0.3em] uppercase text-[#A8D8DF]/70">Trusted By Global Healthcare Brands</p>
          </div>

          {/* Infinite Scrolling Carousel — Single Row */}
          <div className="relative overflow-hidden w-full py-4 mt-2">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1D6375] to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1D6375] to-transparent z-10 pointer-events-none" />

            <DraggableMarquee baseVelocity={-0.5}>
              {/* Load 15 partners */}
              {[...Array(15)].map((_, i) => i + 1).map((id, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 flex items-center justify-center w-32 h-16 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer relative px-4 py-2"
                  title={`Partner ${id}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/partners/partner${id}.svg`}
                      alt={`Partner ${id}`}
                      fill
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </DraggableMarquee>
          </div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '9+', label: 'Years Active', Icon: Award },
              { value: '10k+', label: 'SKUs Provided', Icon: Package },
              { value: 'ISO', label: 'Certified', Icon: BadgeCheck },
              { value: '24/7', label: 'Support Line', Icon: PhoneCall },
            ].map(({ value, label, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center justify-center group p-6 rounded-2xl bg-[#F4FBFC] border border-[#D6E9EC] hover:border-[#3AABB8]/40 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-4xl font-serif text-[#0B3D54] font-bold mb-2">{value}</p>
                <Icon className="w-5 h-5 text-[#3AABB8] mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-[11px] text-[#4A6870] font-bold uppercase tracking-[0.2em] text-center">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Values & Industries */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 bg-[#F4FBFC] overflow-hidden relative"


      >
        {/* Background mesh element linking the visual style */}
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#EBF5F8] to-transparent rounded-full blur-3xl transform translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Side: Quality Promise */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#3AABB8] mb-4 drop-shadow-sm">Core Values</h2>
              <h3 className="text-2xl md:text-4xl font-serif text-[#0B3D54] mb-4 leading-tight">Why Healthcare Leaders Choose <br />Al Afiya</h3>
              <p className="text-[15px] text-[#4A6870] leading-relaxed mb-6 font-light">We recognize that in healthcare, logistics is directly tied to life-saving outcomes. Our infrastructure is built solely around undeniable reliability and compliance.</p>

              <ul className="space-y-3">
                <li className="flex items-start bg-white/50 backdrop-blur-md p-4 rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-[#D6E9EC] hover:border-[#A8D8DF] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-xl shadow-inner flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[16px] font-bold text-[#0B3D54] mb-2 tracking-tight">Uncompromising Compliance</h4>
                    <p className="text-[14px] text-[#4A6870] leading-relaxed">We distribute exclusively from globally recognized, ISO-certified manufacturing partners.</p>
                  </div>
                </li>
                <li className="flex items-start bg-white/50 backdrop-blur-md p-4 rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-[#D6E9EC] hover:border-[#A8D8DF] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-xl shadow-inner flex items-center justify-center text-white">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[16px] font-bold text-[#0B3D54] mb-2 tracking-tight">Dynamic Supply Chain</h4>
                    <p className="text-[14px] text-[#4A6870] leading-relaxed">Optimized central warehousing ensures rapid deployment of critical items immediately.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Right Side: Visual Industries Grid (Glossy Dark Card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >

              {/* Soft glow behind the dark card */}
              <div className="absolute inset-0 bg-[#A8D8DF] rounded-[40px] transform translate-x-4 translate-y-4 blur-xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-[#0B3D54] via-[#164D5C] to-[#267D91] rounded-[32px] p-8 shadow-2xl overflow-hidden border border-[#3AABB8]/20">
                {/* Inner glass highlights */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-[30px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-[#3AABB8] mix-blend-screen rounded-full blur-[60px] opacity-30 pointer-events-none"></div>

                <h4 className="text-white font-serif text-2xl mb-6 relative z-10 flex items-center justify-between">
                  Sectors We Supply
                  <span className="w-12 h-px bg-gradient-to-r from-[#A8D8DF] to-transparent"></span>
                </h4>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[16px] p-4 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <Building2 className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Hospitals</span>
                  </div>
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[16px] p-4 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <Stethoscope className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Clinics</span>
                  </div>
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[16px] p-4 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <FlaskConical className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Diag. Labs</span>
                  </div>
                  <div className="bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 rounded-[16px] p-4 flex flex-col items-center justify-center text-center backdrop-blur-lg group shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                    <Pill className="w-8 h-8 text-[#A8D8DF] mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                    <span className="text-white text-[13px] font-medium tracking-wide">Pharmacies</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Focus */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="pb-16 bg-[#F4FBFC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Portfolio Focus</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#0B3D54] max-w-2xl mx-auto leading-tight">Engineered for Every Clinical Environment</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-[#D6E9EC]">
                  <HeartPulse className="w-6 h-6 text-[#267D91]" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">Clinical Equipment</h4>
                <p className="text-[14px] text-[#4A6870] leading-relaxed mb-5">Heavy-duty imaging, monitoring, and diagnostic hardware constructed for modern hospital wards.</p>
                <Link href="/products" className="text-[13px] font-bold text-[#2A8A9E] hover:text-[#0B3D54] inline-flex items-center group/btn">
                  View Category
                  <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-[#D6E9EC]">
                  <Microscope className="w-6 h-6 text-[#267D91]" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">Laboratory Supplies</h4>
                <p className="text-[14px] text-[#4A6870] leading-relaxed mb-5">High-precision instrumentation, sterile reagents, and glassware dedicated to diagnostic centers.</p>
                <Link href="/products" className="text-[13px] font-bold text-[#2A8A9E] hover:text-[#0B3D54] inline-flex items-center group/btn">
                  View Category
                  <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-[#D6E9EC]">
                  <Scissors className="w-6 h-6 text-[#267D91]" />
                </div>
                <h4 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">Surgical Consumables</h4>
                <p className="text-[14px] text-[#4A6870] leading-relaxed mb-5">Sterile drapes, rapid-deploy sutures, and specialized protective wear for high-stakes procedures.</p>
                <Link href="/products" className="text-[13px] font-bold text-[#2A8A9E] hover:text-[#0B3D54] inline-flex items-center group/btn">
                  View Category
                  <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Block */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-14 relative overflow-hidden bg-white"
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-full max-w-2xl h-[300px] bg-gradient-to-r from-[#A8D8DF] via-[#3AABB8] to-transparent blur-[100px] opacity-40 transform -rotate-12"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B3D54] mb-5 drop-shadow-sm">Equally Dedicated to Your Success.</h2>
          <p className="text-[#4A6870] text-[16px] md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Whether outfitting a new surgical wing or ensuring daily consumable flow, let&apos;s architect a solid supply framework together.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="group bg-gradient-to-r from-[#1D6375] to-[#2A8A9E] hover:from-[#0B3D54] hover:to-[#1D6375] text-white px-10 py-5 rounded-full font-bold text-[15px] transition-all shadow-[0_10px_30px_rgba(42,138,158,0.25)] hover:shadow-[0_15px_40px_rgba(42,138,158,0.35)] hover:-translate-y-1 flex items-center gap-3">
              Initiate Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
