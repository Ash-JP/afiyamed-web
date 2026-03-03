import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Al Afiya Medical Supplies LLC.",
};

export default function AboutPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F4FBFC]">

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(#164B5F_1px,transparent_1px)] [background-size:20px_20px]" />
            {/* Floating Glow Background */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#2BA8B8]/30 rounded-full blur-[120px]" />

                <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#164B5F]/20 rounded-full blur-[150px]" />

            </div>
            {/* ✅ BACKGROUND EFFECT (THIS IS THE MISSING PART) */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute top-0 left-0 w-96 h-96 bg-[#2BA8B8]/20 rounded-full blur-3xl" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#164B5F]/10 rounded-full blur-3xl" />

            </div>

            {/* ✅ HERO SECTION */}
            <section className="relative text-white py-24 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#164B5F] via-[#1D6375] to-[#2BA8B8]" />

                <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <Reveal>
                    <div className="relative max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Who Are We
                        </h1>
                        <p className="text-lg text-[#BFE9EF] max-w-4xl mx-auto">
                            At Al Afiya Medical Supplies LLC, we operate at the intersection of global medical innovation
                            and regional clinical excellence. Our mission transcends simple distribution; we provide
                            strategic healthcare enablement designed to bolster the medical infrastructure of the UAE and Oman.
                        </p>
                    </div>
                </Reveal>

            </section>
            {/* ✅ BACKGROUND SECTION */}
            <section className="py-24 relative">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    {/* HEADING (Same Style as OUR PARTNERS) */}
                    <h2 className="text-[#164B5F] tracking-[0.35em] text-sm font-semibold uppercase">
                        Background
                    </h2>

                    <div className="w-20 h-[3px] bg-[#2BA8B8] mx-auto mt-4 mb-10 rounded-full" />

                    {/* CONTENT */}
                    <p className="text-[#4A6070] leading-relaxed">
                        Founded in 2017, Al Afiya Medical Supplies LLC is a premier healthcare distributor
                        headquartered in the UAE, with a robust logistics network spanning the United Arab Emirates
                        and the Sultanate of Oman. In a relatively short span, we have cultivated enduring partnerships
                        with the region’s leading private and government healthcare institutions.
                    </p>

                    <p className="text-[#4A6070] leading-relaxed mt-6">
                        Our foundation is built on the belief that premium medical care should be accessible to all.
                        By bridging the gap between global healthcare innovations and local clinical needs, we ensure
                        that both providers and patients have access to the tools required for better health outcomes.
                        Whether through established essentials or pioneering new technologies, Al Afiya is a trusted
                        link in the region’s healthcare value chain.
                    </p>
                    {/* Specialization Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { title: "Surgical Systems", desc: "Advanced specialty devices and therapeutic methods." },
                            { title: "Laboratory Diagnostics", desc: "Precision instruments for accurate clinical outcomes." },
                            { title: "Critical Care", desc: "Essential equipment and consumables for life-saving care." },
                            { title: "Innovation Scouting", desc: "Identifying global advancements to replace traditional methods." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[#2BA8B8]/20">
                                <h4 className="text-[#164B5F] font-bold mb-2">{item.title}</h4>
                                <p className="text-sm text-[#4A6070]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ✅ COMPANY TIMELINE */}
            <section className="relative py-28 px-6 bg-[#F4FBFC] overflow-hidden">

                <div className="max-w-6xl mx-auto">

                    {/* SECTION HEADING */}
                    <Reveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold text-[#164B5F] mb-4">
                                Company Timeline
                            </h2>
                            <div className="w-20 h-1 bg-[#2BA8B8] mx-auto"></div>
                        </div>
                    </Reveal>

                    {/* TIMELINE GRID */}
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* 2017 */}
                        <Reveal>
                            <div className="relative group cursor-pointer">

                                <span className="absolute text-[120px] font-bold text-[#164B5F]/20 -top-12 left-0 select-none transition-transform duration-500 ease-out group-hover:-translate-y-3">
                                    2017
                                </span>

                                <div className="relative pt-12">
                                    <h3 className="text-xl font-bold text-[#164B5F]">
                                        Company Founded
                                    </h3>
                                    <p className="text-[#4A6070] mt-3 leading-relaxed">
                                        Al Afiya Medical Supplies LLC was established in the UAE with a mission to bridge global healthcare innovations with regional clinical needs.
                                    </p>
                                </div>

                            </div>
                        </Reveal>

                        {/* 2019 */}
                        <Reveal>
                            <div className="relative group cursor-pointer">

                                <span className="absolute text-[120px] font-bold text-[#164B5F]/20 -top-12 left-0 select-none transition-transform duration-500 ease-out group-hover:-translate-y-3">
                                    2019
                                </span>

                                <div className="relative pt-12">
                                    <h3 className="text-xl font-bold text-[#164B5F]">
                                        Regional Expansion
                                    </h3>
                                    <p className="text-[#4A6070] mt-3 leading-relaxed">
                                        Expanded logistics network across the UAE and Oman, building strong partnerships with leading healthcare institutions.
                                    </p>
                                </div>

                            </div>
                        </Reveal>

                        {/* 2022 */}
                        <Reveal>
                            <div className="relative group cursor-pointer">

                                <span className="absolute text-[120px] font-bold text-[#164B5F]/20 -top-12 left-0 select-none transition-transform duration-500 ease-out group-hover:-translate-y-3">
                                    2022
                                </span>

                                <div className="relative pt-12">
                                    <h3 className="text-xl font-bold text-[#164B5F]">
                                        Technology Integration
                                    </h3>
                                    <p className="text-[#4A6070] mt-3 leading-relaxed">
                                        Introduced advanced surgical technologies and modern laboratory equipment to support evolving clinical demands.
                                    </p>
                                </div>

                            </div>
                        </Reveal>

                        {/* 2024 */}
                        <Reveal>
                            <div className="relative group cursor-pointer">

                                <span className="absolute text-[120px] font-bold text-[#164B5F]/20 -top-12 left-0 select-none transition-transform duration-500 ease-out group-hover:-translate-y-3">
                                    2024
                                </span>

                                <div className="relative pt-12">
                                    <h3 className="text-xl font-bold text-[#164B5F]">
                                        Strategic Growth
                                    </h3>
                                    <p className="text-[#4A6070] mt-3 leading-relaxed">
                                        Strengthened supplier alliances and enhanced supply chain transparency to ensure consistent product quality and availability.
                                    </p>
                                </div>

                            </div>
                        </Reveal>

                    </div>

                </div>
            </section>
            {/* ✅ COMPANY MESSAGE — PREMIUM VERSION */}
            <section className="relative py-28 px-6">

                {/* soft glow behind */}
                <div className="absolute inset-0 -z-10 flex justify-center">
                    <div className="w-[700px] h-[700px] bg-[#2BA8B8]/10 rounded-full blur-[140px]" />
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    {/* LEFT TEXT CONTENT */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-slate-100">

                        <h2 className="text-3xl md:text-4xl font-bold text-[#164B5F] mb-6 leading-snug">
                            Bridging Global Innovation with Regional Clinical Needs
                        </h2>

                        <p className="text-[#4A6070] leading-relaxed mb-4">
                            In 2017, Al Afiya Medical Supplies LLC was founded on a premise that remains
                            at the heart of everything we do: the belief that the right tools,
                            delivered at the right time, are the foundation of better health.
                        </p>

                        <p className="text-[#4A6070] leading-relaxed mb-4">
                            Today, we serve as a vital link in the regional healthcare value chain,
                            connecting hospitals and clinics across the UAE and Oman with the latest
                            advancements in medical technology.
                        </p>

                        <p className="text-[#4A6070] leading-relaxed mb-4">
                            We bridge this gap through strategic scouting and rigorous supply chain
                            management, empowering healthcare professionals to address evolving
                            health complexities with confidence and precision.
                        </p>

                        <p className="text-[#4A6070] leading-relaxed">
                            At Al Afiya, we are not just a distributor; we are your strategic partner,
                            committed to transparency and world-class clinical standards.
                        </p>

                        {/* Signature */}
                        <div className="mt-8 border-t pt-6">
                            <p className="font-semibold text-[#164B5F]">Best regards,</p>
                            <p className="text-[#4A6070] mt-1">
                                Anish Haneefa
                            </p>
                            <p className="text-[#4A6070] text-sm">
                                Managing Director, Al Afiya Medical Supplies LLC
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#164B5F]/20 to-[#2BA8B8]/20 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>

                        <div className="relative bg-white rounded-3xl shadow-xl p-4">
                            <Image
                                src="/about-image.png"
                                alt="Healthcare Innovation"
                                width={600}
                                height={420}
                                className="rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ✅ STRATEGIC PILLARS SECTION */}
            <section className="py-24 bg-white/30 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#164B5F]">Our Strategic Pillars</h2>
                        <div className="w-20 h-1 bg-[#2BA8B8] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        <Reveal>
                            <div>
                                <h3 className="text-xl font-bold text-[#164B5F] mb-4 flex items-center gap-2">
                                    <span className="text-[#2BA8B8]">01.</span> Comprehensive Distribution
                                </h3>
                                <p className="text-[#4A6070] leading-relaxed">
                                    Utilizing a sophisticated logistics network, we ensure the seamless delivery of supplies to both urban centers and remote facilities. Our supply chain is optimized for reliability and regulatory compliance.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <h3 className="text-xl font-bold text-[#164B5F] mb-4 flex items-center gap-2">
                                    <span className="text-[#2BA8B8]">02.</span> Healthcare Partnerships
                                </h3>
                                <p className="text-[#4A6070] leading-relaxed">
                                    We serve as a trusted intermediary between global manufacturers and the regional healthcare sector, facilitating the smooth integration of new technologies into government and private institutions.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <h3 className="text-xl font-bold text-[#164B5F] mb-4 flex items-center gap-2">
                                    <span className="text-[#2BA8B8]">03.</span> Value-Based Procurement
                                </h3>
                                <p className="text-[#4A6070] leading-relaxed">
                                    We bridge the gap between high-end clinical requirements and budget sensitivities by sourcing globally certified products at economic prices, enabling superior care for all.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div>
                                <h3 className="text-xl font-bold text-[#164B5F] mb-4 flex items-center gap-2">
                                    <span className="text-[#2BA8B8]">04.</span> Regulatory Alignment
                                </h3>
                                <p className="text-[#4A6070] leading-relaxed">
                                    We manage the complexities of market entry, ensuring every solution meets international clinical standards and adheres strictly to regional regulatory requirements.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            {/* ✅ CORE VALUES */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center text-[#164B5F] mb-16">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Card 1 */}
                        <Reveal>
                            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2BA8B8]/10 mb-6 text-2xl">
                                    🛡️
                                </div>

                                <h3 className="text-xl font-bold text-[#164B5F] mb-3">
                                    Integrity
                                </h3>

                                <p className="text-[#4A6070]">
                                    We maintain transparency, honesty, and ethical standards in every partnership.
                                </p>

                            </div>
                        </Reveal>

                        {/* Card 2 */}
                        <Reveal>
                            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2BA8B8]/10 mb-6 text-2xl">
                                    ⭐
                                </div>

                                <h3 className="text-xl font-bold text-[#164B5F] mb-3">
                                    Quality
                                </h3>

                                <p className="text-[#4A6070]">
                                    We deliver reliable and high-standard medical products professionals trust.
                                </p>

                            </div>
                        </Reveal>

                        {/* Card 3 */}
                        <Reveal>
                            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2BA8B8]/10 mb-6 text-2xl">
                                    🚚
                                </div>

                                <h3 className="text-xl font-bold text-[#164B5F] mb-3">
                                    Reliability
                                </h3>

                                <p className="text-[#4A6070]">
                                    Our distribution network ensures timely delivery and consistent service excellence.
                                </p>

                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
        </main >
    );
}