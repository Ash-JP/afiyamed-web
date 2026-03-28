import Link from "next/link";
import type { Metadata } from "next";
import { Stethoscope, Microscope, Scissors, Pill, Activity, HeartPulse, Shield, ShieldPlus, Droplet, Archive, Apple, Eye } from "lucide-react";

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
        { id: "dental-consumables", name: "Dental Consumables", icon: Activity, desc: "Comprehensive range of high-quality dental supplies and instruments." },
        { id: "medical-consumables", name: "Medical Consumables", icon: HeartPulse, desc: "Everyday medical supplies for hospitals, clinics, and care centers." },
        { id: "radiation-protection", name: "Radiation Protection", icon: Shield, desc: "Specialized gear and shielding for radiology and imaging spaces." },
        { id: "ppe", name: "PPE", icon: ShieldPlus, desc: "Personal protective equipment ensuring safety and compliance." },
        { id: "wound-care", name: "Wound Care", icon: Droplet, desc: "Advanced dressings, bandages, and healing aids for patient care." },
        { id: "cssd", name: "CSSD Consumables & Equipment", icon: Archive, desc: "Central sterile services department supplies for complete sterilization." },
        { id: "nutrition", name: "Nutrition & Supplements", icon: Apple, desc: "Clinical nutrition solutions and specialized health supplements." },
        { id: "infection-control", name: "Infection Control", icon: Shield, desc: "Sanitization, disinfection, and preventative control measures." },
        { id: "physiotherapy", name: "Physiotherapy & Rehab", icon: Activity, desc: "Equipment and consumables for physical therapy and recovery." },
        { id: "endoscopy", name: "Endoscopy Consumables", icon: Eye, desc: "Specialized accessories and tools for endoscopic procedures." },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#F4FBFC]">
            {/* HERO SECTION - Unique Products Styling */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0B3D54] via-[#164D5C] to-[#1D6375] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-white/10">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D54] via-[#164D5C] to-[#1D6375] opacity-90 z-0"></div>

                    {/* Animated Geometric Flow / Wave pattern */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-[120%] h-[120%] border-[2px] border-[#3AABB8] rounded-[40%] animate-[spin_20s_linear_infinite] absolute mix-blend-overlay"></div>
                        <div className="w-[110%] h-[110%] border-[2px] border-[#A8D8DF] rounded-[35%] animate-[spin_25s_linear_infinite_reverse] absolute mix-blend-overlay"></div>
                        <div className="w-[100%] h-[100%] border-[2px] border-[#1D6375] rounded-[45%] animate-[spin_30s_linear_infinite] absolute mix-blend-overlay"></div>
                    </div>

                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
                </div>

                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
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
                            <div key={cat.id} className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.15)] transition-all duration-500 border border-white hover:border-[#3AABB8]/30 hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-default">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/40 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-[#D6E9EC]">
                                        <cat.icon className="w-6 h-6 text-[#267D91]" />
                                    </div>
                                    <h2 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#267D91] transition-colors">{cat.name}</h2>
                                    <p className="text-[14px] text-[#4A6870] leading-relaxed mb-6 flex-grow">{cat.desc}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
