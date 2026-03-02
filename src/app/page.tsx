"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3D54] to-[#1D6375] border-b border-white/10 pt-20 pb-12 lg:pt-0 lg:pb-0 lg:min-h-[58vh] flex flex-col justify-center">

        {/* Subtle Lighting Effects Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Glass Specular Highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

            {/* Text Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-[1.15] tracking-tight drop-shadow-lg">
                A Culture of Caring,<br />A Legacy of Quality
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
                <Link href="/contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-[15px] transition-all text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Hero Image Area (Square, Unstretched, 100% visible) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-square order-1 lg:order-2 animate-hero-breath cursor-pointer"
            >
              <Image
                src="/hero.png"
                alt="Medical Supplies Hero"
                fill
                className="object-contain opacity-30 relative z-20 brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:brightness-0 hover:invert hover:opacity-50"
                priority
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="bg-white border-b border-gray-100 py-8 lg:min-h-[42vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-[22px] font-extrabold tracking-[6px] uppercase text-[#2A8A9E] mb-3">Our Partners</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#3AABB8] to-[#1D6375] mx-auto rounded-full"></div>
            <p className="mt-4 text-[14px] text-[#4A6870] max-w-3xl mx-auto font-light">We collaborate with globally recognized healthcare brands to deliver only the highest calibre of medical products.</p>
          </div>

          {/* Infinite Scrolling Carousel — Single Row */}
          <div className="relative overflow-hidden w-full py-2">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] group">
              {[
                { name: 'MedTech Global', icon: '🏥' },
                { name: 'SurgiPrime', icon: '🔬' },
                { name: 'BioNova Labs', icon: '🧬' },
                { name: 'CareEquip UAE', icon: '⚕️' },
                { name: 'HealthPlus Solutions', icon: '💊' },
                { name: 'Apex Diagnostics', icon: '🩺' },
                { name: 'MedTech Global', icon: '🏥' },
                { name: 'SurgiPrime', icon: '🔬' },
                { name: 'BioNova Labs', icon: '🧬' },
                { name: 'CareEquip UAE', icon: '⚕️' },
                { name: 'HealthPlus Solutions', icon: '💊' },
                { name: 'Apex Diagnostics', icon: '🩺' },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 flex items-center gap-3 w-[220px] h-[88px] bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(42,138,158,0.2)] hover:border-[#A8D8DF] hover:-translate-y-1 transition-all duration-300 cursor-pointer px-6 group/card"
                >
                  <span className="text-2xl select-none">{partner.icon}</span>
                  <span className="text-[14px] font-bold text-[#4A6870] group-hover/card:text-[#1D6375] font-serif transition-colors tracking-wide whitespace-nowrap leading-tight">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Stats Strip */}
          <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-[#0B3D54] via-[#1D6375] to-[#2A8A9E] shadow-[0_8px_32px_rgba(11,61,84,0.2)]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { value: '9+', label: 'Years Active', Icon: Award },
                { value: '10k+', label: 'SKUs Provided', Icon: Package },
                { value: 'ISO', label: 'Certified', Icon: BadgeCheck },
                { value: '24/7', label: 'Support Line', Icon: PhoneCall },
              ].map(({ value, label, Icon }, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-5 px-4 hover:bg-white/10 transition-colors duration-300 group">
                  <Icon className="w-5 h-5 text-[#A8D8DF] mb-2 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <p className="text-2xl font-serif text-white font-bold drop-shadow">{value}</p>
                  <p className="text-[10px] text-[#A8D8DF] font-semibold uppercase tracking-[0.18em] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Focus */}
      <section className="py-16 bg-gradient-to-b from-[#F0F7F9] to-[#F4FBFC]">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values & Industries */}
      <section className="py-16 bg-white overflow-hidden relative">
        {/* Background mesh element linking the visual style */}
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#EBF5F8] to-transparent rounded-full blur-3xl transform translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Quality Promise */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 relative overflow-hidden bg-[#F4FBFC] border-t border-gray-200">
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
      </section>
    </div>
  );
}
