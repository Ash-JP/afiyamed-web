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
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Diagonal light sweeps representing logistics and motion */}
                    <div className="absolute top-[-50%] left-[-10%] w-[150%] h-[100%] bg-gradient-to-r from-transparent via-[#1D6375]/40 to-transparent transform -rotate-12 blur-2xl"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[50%] bg-gradient-to-l from-[#2A8A9E]/20 to-transparent transform rotate-12 blur-3xl"></div>
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-[#1D6375] via-[#3AABB8]/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[12px] font-semibold tracking-[3px] uppercase text-[#A8D8DF] mb-4 drop-shadow-sm">
                        Capabilities
                    </h2>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                        Our Services
                    </h1>
                    <p className="text-base md:text-xl text-[#D6E9EC] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
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
                                    <p className="text-[15px] lg:text-[16px] text-[#4A6870] leading-relaxed mb-8 max-w-3xl">
                                        {service.desc}
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-[#3AABB8] text-[#1D6375] font-bold text-[14px] rounded-full hover:bg-gradient-to-r hover:from-[#1D6375] hover:to-[#2A8A9E] hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(42,138,158,0.2)] hover:-translate-y-0.5 group/btn">
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
