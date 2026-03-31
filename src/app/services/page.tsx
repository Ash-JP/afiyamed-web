import Link from "next/link";
import type { Metadata } from "next";
import { Truck, Package, Handshake, Wrench } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services | Al Afiya Medical Supplies",
    description: "End-to-end supply chain integration, bulk ordering, and custom procurement tailored for healthcare facilities.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "Distribution & Logistics",
            desc: "Robust supply chain solutions ensuring timely delivery of medical equipment and consumables across the Middle East. Featuring temperature-controlled transport for sensitive items.",
            icon: Truck
        },
        {
            title: "Bulk Supply Ordering",
            desc: "Streamlined procurement for large hospitals and clinic networks. Benefit from tiered pricing, fast order processing, and scheduled replenishments for essential stocks.",
            icon: Package
        },
        {
            title: "Custom Procurement Projects",
            desc: "Tailored sourcing for specialized medical hardware. We leverage our extensive global manufacturer network to find exactly what your facility requires.",
            icon: Handshake
        },
        {
            title: "After-Sales Support",
            desc: "Comprehensive warranty support, maintenance routing, and technical assistance for all distributed capital equipment. Your operations never stand still.",
            icon: Wrench
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#F4FBFC]">
            {/* HERO SECTION - Unique Services Styling (Dynamic/Movement) */}
            <section className="relative overflow-hidden bg-[#0B3D54] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-[#3AABB8]/20">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D54] to-[#124D64]"></div>
                    
                    {/* Professional Abstract ECG Monitor Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden opacity-50 flex items-center justify-center">
                        <div className="relative w-[200%] h-[300px] flex items-center">
                            {/* Medical Graph Paper Fade */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(58,171,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(58,171,184,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

                            {/* High-Fidelity ECG Scanning Monitor */}
                            <svg 
                                className="absolute w-full h-full" 
                                viewBox="0 0 1000 200" 
                                fill="none" 
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                                        <stop offset="5%" stopColor="white" stopOpacity="0.1" />
                                        <stop offset="90%" stopColor="white" stopOpacity="1" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <mask id="scanMask">
                                        <rect width="400" height="200" fill="url(#scanGradient)">
                                            <animateTransform 
                                                attributeName="transform" 
                                                type="translate" 
                                                from="-400 0" 
                                                to="1000 0" 
                                                dur="4s" 
                                                repeatCount="indefinite" 
                                            />
                                        </rect>
                                    </mask>
                                </defs>

                                {/* Primary Pulse Layer */}
                                <g mask="url(#scanMask)">
                                    <path 
                                        d="M0,100 L80,100 L90,90 L100,100 L105,115 L115,10 L125,160 L135,100 L150,100 L160,80 L175,100 L280,100 L290,90 L300,100 L305,115 L315,10 L325,160 L335,100 L350,100 L360,80 L375,100 L480,100 L490,90 L500,100 L505,115 L515,10 L525,160 L535,100 L550,100 L560,80 L575,100 L680,100 L690,90 L700,100 L705,115 L715,10 L725,160 L735,100 L750,100 L760,80 L775,100 L880,100 L890,90 L900,100 L905,115 L915,10 L925,160 L935,100 L950,100 L960,80 L975,100 L1000,100"
                                        stroke="#A8D8DF" 
                                        strokeWidth="2.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="filter drop-shadow-[0_0_8px_rgba(168,216,223,0.8)]"
                                    />
                                </g>

                                {/* Secondary Phantom Pulse (Lower Opacity, Offset) */}
                                <g opacity="0.2" mask="url(#scanMask)">
                                    <path 
                                        d="M0,100 L40,100 L50,95 L60,100 L65,110 L75,30 L85,130 L95,100 L110,100 L120,85 L135,100 L240,100 L250,95 L260,100 L265,110 L275,30 L285,130 L295,100 L310,100 L320,85 L335,100 L440,100 L450,95 L460,100 L465,110 L475,30 L485,130 L495,100 L510,100 L520,85 L535,100 L640,100 L650,95 L660,100 L665,110 L675,30 L685,130 L695,100 L710,100 L720,85 L735,100 L840,100 L850,95 L860,100 L865,110 L875,30 L885,130 L895,100 L910,100 L920,85 L935,100 L1000,100"
                                        stroke="#3AABB8" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
                        /* Clean reset of old animations */
                        @keyframes ecgTravelPulse {
                            0% { transform: translateX(-100%); opacity: 0; }
                            100% { transform: translateX(100%); opacity: 0; }
                        }
                        `
                    }} />

                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-[#1D6375] via-[#3AABB8]/30 to-transparent z-0"></div>
                </div>

                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[14px] font-semibold tracking-[3px] uppercase text-[#A8D8DF] mb-4 drop-shadow-sm">
                        Capabilities
                    </h2>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                        Our Services
                    </h1>
                    <p className="text-lg md:text-xl text-[#D6E9EC] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                        Beyond distribution. We provide end-to-end supply chain integration tailored to the demands of modern healthcare facilities.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-20 lg:py-28 relative">
                {/* Removed bottom-left gradient blob to prevent footer overlap and keep clean aesthetics */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="space-y-8 lg:space-y-12">
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative bg-white/70 backdrop-blur-xl rounded-[28px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.1)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 flex flex-col md:flex-row gap-8 lg:gap-12 items-center overflow-hidden">

                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A8D8DF]/30 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#F4FBFC] to-white rounded-3xl flex items-center justify-center text-[#2A8A9E] flex-shrink-0 shadow-sm border border-[#D6E9EC] group-hover:scale-105 transition-transform duration-500 z-10">
                                    <service.icon className="w-12 h-12 md:w-16 md:h-16 text-[#267D91]" />
                                </div>

                                <div className="flex-grow text-center md:text-left z-10">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D54] mb-4 group-hover:text-[#267D91] transition-colors">{service.title}</h2>
                                    <p className="text-[17px] lg:text-lg text-[#4A6870] leading-relaxed mb-8 max-w-3xl">
                                        {service.desc}
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-[#3AABB8] text-[#1D6375] font-bold text-[16px] rounded-full hover:bg-gradient-to-r hover:from-[#1D6375] hover:to-[#2A8A9E] hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(42,138,158,0.2)] hover:-translate-y-0.5 group/btn">
                                        Inquire About This Service
                                        <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
