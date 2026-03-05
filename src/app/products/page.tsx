import Link from "next/link";
import type { Metadata } from "next";
import { Stethoscope, Microscope, Scissors, Pill } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Products | Al Afiya Medical Supplies",
    description: "Browse our comprehensive catalog of clinical equipment, laboratory supplies, and surgical consumables.",
};

export default function ProductsPage() {
    const categories = [
        { id: "clinical-equipment", name: "Clinical Equipment", icon: Stethoscope, desc: "Diagnostic tools, patient monitors, and essential clinical hardware." },
        { id: "laboratory-supplies", name: "Laboratory Supplies", icon: Microscope, desc: "Reagents, glassware, and precision laboratory instruments." },
        { id: "surgical-consumables", name: "Surgical Consumables", icon: Scissors, desc: "Sterile instruments, drapes, sutures, and protective wear." },
        { id: "pharmacy-essentials", name: "Pharmacy Essentials", icon: Pill, desc: "Storage solutions, dispensing tools, and point-of-care products." },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#F4FBFC]">
            {/* HERO SECTION - Unique Products Styling */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0B3D54] via-[#164D5C] to-[#1D6375] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-white/10">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    {/* Subtle grid pattern to represent inventory/products */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwdi00MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[12px] font-semibold tracking-[3px] uppercase text-[#A8D8DF] mb-4 drop-shadow-sm">
                        Portfolio
                    </h2>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                        Our Products
                    </h1>
                    <p className="text-base md:text-xl text-[#D6E9EC] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                        Browse our comprehensive catalog of medical equipment and consumables sourced from industry-leading manufacturers.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-20 lg:py-28 relative">
                {/* Removed generic right side top glow entirely */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat) => (
                            <Link key={cat.id} href={`/products/${cat.id}`} className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-[#D6E9EC]">
                                        <cat.icon className="w-6 h-6 text-[#267D91]" />
                                    </div>
                                    <h2 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">{cat.name}</h2>
                                    <p className="text-[14px] text-[#4A6870] leading-relaxed mb-6 flex-grow">{cat.desc}</p>
                                    <div className="text-[13px] font-bold text-[#2A8A9E] group-hover:text-[#0B3D54] inline-flex items-center group/btn mt-auto">
                                        Explore Catalog
                                        <span className="w-6 h-6 ml-2 rounded-full bg-[#EBF5F8] flex items-center justify-center group-hover/btn:bg-[#3AABB8] group-hover/btn:text-white transition-colors">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
