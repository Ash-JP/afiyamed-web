"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Truck,
    Microscope,
    Globe2,
    Activity,
    HeartPulse,
    Eye,
    Target
} from "lucide-react";

// Add a simple Reveal component since it was being called in your code
const Reveal = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export default function AboutClient() {
    // Array to generate 20 base pairs for the DNA helix
    const dnaBasePairs = Array.from({ length: 20 });

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3D54] to-[#1D6375] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-white/10">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>

                    {/* 3D DNA Helix - Placed diagonally across the background */}
                    <div className="relative w-64 h-[150%] flex flex-col items-center justify-center gap-6 transform -rotate-45 scale-150 blur-[2px]">
                        {dnaBasePairs.map((_, i) => (
                            <div
                                key={i}
                                className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-[#3AABB8]/40 to-transparent flex justify-between items-center"
                                style={{
                                    animation: `rotate3d 8s linear infinite`,
                                    animationDelay: `${i * -0.4}s`,
                                }}
                            >
                                <div
                                    className="w-5 h-5 rounded-full bg-[#A8D8DF] shadow-[0_0_15px_#A8D8DF]"
                                    style={{
                                        animation: `fadeNode 8s linear infinite`,
                                        animationDelay: `${i * -0.4}s`,
                                    }}
                                />
                                <div
                                    className="w-5 h-5 rounded-full bg-[#1D6375] shadow-[0_0_15px_#1D6375]"
                                    style={{
                                        animation: `fadeNode 8s linear infinite`,
                                        animationDelay: `${(i * -0.4) - 4}s`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
                      @keyframes rotate3d {
                        0% { transform: rotateY(0deg); }
                        100% { transform: rotateY(360deg); }
                      }
                      @keyframes fadeNode {
                        0%, 100% { opacity: 1; transform: scale(1); z-index: 10; }
                        25% { opacity: 0.5; transform: scale(0.8); z-index: 5; }
                        50% { opacity: 0.2; transform: scale(0.6); z-index: 0; }
                        75% { opacity: 0.5; transform: scale(0.8); z-index: 5; }
                      }
                    `}} />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-[14px] font-semibold tracking-[3px] uppercase text-[#A8D8DF] mb-4 drop-shadow-sm">
                            About Us
                        </h2>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                            Who Are We
                        </h1>
                        <p className="text-lg md:text-xl text-[#D6E9EC] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                            At Al Afiya Medical Supplies LLC, we operate at the intersection of global medical innovation
                            and regional clinical excellence. Our mission transcends simple distribution; we provide
                            strategic healthcare enablement designed to bolster the medical infrastructure of the UAE and Oman.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* BACKGROUND SECTION */}
            <section className="py-20 lg:py-28 relative bg-white overflow-hidden">
                <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#EBF5F8] to-transparent rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[12px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Our Heritage</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54] max-w-2xl mx-auto leading-tight">
                            Bridging Innovations with Local Needs
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#3AABB8] to-[#1D6375] mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-[17px] text-[#4A6870] leading-relaxed mb-6 font-light">
                                Founded in 2017, Al Afiya Medical Supplies LLC is a premier healthcare distributor
                                headquartered in the UAE, with a robust logistics network spanning the United Arab Emirates
                                and the Sultanate of Oman.
                            </p>
                            <p className="text-[17px] text-[#4A6870] leading-relaxed font-light">
                                Our foundation is built on the belief that premium medical care should be accessible to all.
                                By bridging the gap between global healthcare innovations and local clinical needs, we ensure
                                that both providers and patients have access to the tools required for better health outcomes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {[
                                { title: "Surgical Systems", desc: "Advanced specialty devices.", icon: HeartPulse },
                                { title: "Lab Diagnostics", desc: "Precision instruments.", icon: Microscope },
                                { title: "Critical Care", desc: "Essential life-saving equipment.", icon: Activity },
                                { title: "Innovation", desc: "Global advancement scouting.", icon: Globe2 }
                            ].map((item, index) => (
                                <div key={index} className="group bg-white/60 backdrop-blur-xl p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(38,125,145,0.1)] transition-all border border-[#D6E9EC] hover:border-[#3AABB8]/40 hover:-translate-y-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#F4FBFC] to-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-[#D6E9EC]">
                                        <item.icon className="w-5 h-5 text-[#267D91]" />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#0B3D54] mb-2 group-hover:text-[#267D91] transition-colors">{item.title}</h4>
                                    <p className="text-[15px] text-[#4A6870] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* COMPANY MESSAGE & VISION */}
            <section className="py-20 lg:py-28 relative bg-gradient-to-b from-[#F0F7F9] to-[#F4FBFC] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div className="relative group order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#164B5F]/20 to-[#2BA8B8]/30 rounded-[32px] blur-2xl transform translate-y-4"></div>
                            <div className="relative bg-white rounded-[32px] p-2 shadow-2xl border border-white/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                                <Image
                                    src="/about-image.webp"
                                    alt="Healthcare Innovation"
                                    width={800}
                                    height={600}
                                    className="rounded-[28px] object-cover w-full h-auto"
                                />
                            </div>
                        </motion.div>

                        <motion.div className="order-1 lg:order-2">
                            <h2 className="text-[12px] font-semibold tracking-[2.5px] uppercase text-[#3AABB8] mb-4">Leadership Vision</h2>
                            <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54] mb-6 leading-tight">Delivering Excellence</h3>
                            <p className="text-[17px] text-[#4A6870] leading-relaxed mb-8 font-light italic">
                                &quot;At Al Afiya, we are not just a distributor; we are your strategic partner, committed to transparency and world-class clinical standards.&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-full flex items-center justify-center text-white font-serif text-lg">AH</div>
                                <div>
                                    <p className="font-bold text-[#0B3D54] text-[17px]">Anish Haneefa</p>
                                    <p className="text-[14px] text-[#4A6870] uppercase tracking-wider">Managing Director</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ✅ IMPACT STATS SECTION */}
            <section className="py-20 bg-[#F4FBFC] relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {[
                            { val: "9+", label: "Years Active" },
                            { val: "10k+", label: "SKUs Provided" },
                            { val: "ISO", label: "Certified" },
                            { val: "24/7", label: "Support Line" }
                        ].map((stat, idx) => (
                            <Reveal key={idx}>
                                <div className="relative bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden min-h-[120px] flex flex-col justify-center">
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#2BA8B8]" />
                                    <div className="pl-8">
                                        <p className="text-[#2BA8B8] text-4xl font-bold leading-none mb-2">{stat.val}</p>
                                        <p className="text-[#164B5F] font-bold text-[10px] uppercase tracking-[0.2em]">{stat.label}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPANY TIMELINE */}
            <section className="py-20 lg:py-28 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-20">
                        <h2 className="text-[12px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Milestones</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54]">Our Journey</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#3AABB8] to-[#1D6375] mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="relative mt-12 md:mt-24">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-[70px] left-0 w-full h-px bg-[#D6E9EC] z-0"></div>

                        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-10 px-2 md:px-0">
                            {[
                                {
                                    year: "2017",
                                    title: "Inception",
                                    points: ["Founded in UAE", "Strategic licensing", "Initial hospital contracts"]
                                },
                                {
                                    year: "2019",
                                    title: "Expansion",
                                    points: ["Oman market entry", "Logistics hub setup", "Team growth by 40%"]
                                },
                                {
                                    year: "2022",
                                    title: "Digital Shift",
                                    points: ["Advanced ERP launch", "Cold-chain upgrades", "Surgical tech focus"]
                                },
                                {
                                    year: "2024",
                                    title: "Future Ready",
                                    points: ["ISO Certification", "Global supplier shift", "24/7 Support line"]
                                }
                            ].map((item, index) => (
                                <motion.div key={index} className="relative flex-1 min-w-[280px] flex flex-col md:items-center">
                                    {/* The Year Label */}
                                    <span className="text-[44px] md:text-[54px] font-bold text-[#A8D8DF] font-serif mb-2 block">
                                        {item.year}
                                    </span>

                                    {/* The Card */}
                                    <div className="bg-white p-6 rounded-[24px] shadow-sm border border-[#D6E9EC] h-full w-full text-left">
                                        <h4 className="text-lg font-bold text-[#0B3D54] mb-4">{item.title}</h4>

                                        {/* THE BULLETS */}
                                        <ul className="space-y-3">
                                            {item.points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-3 text-[15px] text-[#4A6870] leading-relaxed">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2BA8B8] mt-1.5 shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STRATEGIC PILLARS */}
            <section className="py-20 lg:py-28 bg-[#F0F7F9] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[12px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Structure</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54]">Our Strategic Pillars</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { id: "01", title: "Distribution", desc: "Sophisticated logistics network.", icon: Truck },
                            { id: "02", title: "Partnerships", desc: "Intermediary for global manufacturers.", icon: Eye },
                            { id: "03", title: "Procurement", desc: "Value-based sourcing.", icon: Target },
                            { id: "04", title: "Regulatory", desc: "Managing market entry complexity.", icon: ShieldCheck }
                        ].map((pillar, index) => (
                            <div key={index} className="bg-white rounded-[24px] p-8 shadow-sm border border-[#D6E9EC] flex gap-6">
                                <div className="w-14 h-14 bg-[#1D6375] rounded-2xl flex items-center justify-center text-white shrink-0">
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-bold text-[#0B3D54] mb-3">{pillar.title}</h4>
                                    <p className="text-[16px] text-[#4A6870] font-light">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}