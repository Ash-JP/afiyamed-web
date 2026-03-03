"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Award,
    Truck,
    Microscope,
    Globe2,
    Activity,
    HeartPulse,
    Eye,
    Target
} from "lucide-react";

export default function AboutClient() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3D54] to-[#1D6375] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-white/10">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#3AABB8]/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#2A8A9E]/10 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-[12px] font-semibold tracking-[3px] uppercase text-[#A8D8DF] mb-4 drop-shadow-sm">
                            About Us
                        </h2>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                            Who Are We
                        </h1>
                        <p className="text-base md:text-xl text-[#D6E9EC] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
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
                        <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Our Heritage</h2>
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
                            <p className="text-[15px] text-[#4A6870] leading-relaxed mb-6 font-light">
                                Founded in 2017, Al Afiya Medical Supplies LLC is a premier healthcare distributor
                                headquartered in the UAE, with a robust logistics network spanning the United Arab Emirates
                                and the Sultanate of Oman. In a relatively short span, we have cultivated enduring partnerships
                                with the region&apos;s leading private and government healthcare institutions.
                            </p>
                            <p className="text-[15px] text-[#4A6870] leading-relaxed font-light">
                                Our foundation is built on the belief that premium medical care should be accessible to all.
                                By bridging the gap between global healthcare innovations and local clinical needs, we ensure
                                that both providers and patients have access to the tools required for better health outcomes.
                                Whether through established essentials or pioneering new technologies, Al Afiya is a trusted
                                link in the region&apos;s healthcare value chain.
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
                                    <h4 className="text-[16px] font-bold text-[#0B3D54] mb-2 group-hover:text-[#267D91] transition-colors">{item.title}</h4>
                                    <p className="text-[13px] text-[#4A6870] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* COMPANY MESSAGE & VISION */}
            <section className="py-20 lg:py-28 relative bg-gradient-to-b from-[#F0F7F9] to-[#F4FBFC] overflow-hidden">
                <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#A8D8DF]/30 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative group order-2 lg:order-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#164B5F]/20 to-[#2BA8B8]/30 rounded-[32px] blur-2xl group-hover:blur-3xl transition duration-700 transform translate-y-4"></div>
                            <div className="relative bg-white rounded-[32px] p-2 shadow-2xl border border-white/50">
                                <Image
                                    src="/about-image.png"
                                    alt="Healthcare Innovation"
                                    width={800}
                                    height={600}
                                    className="rounded-[28px] object-cover w-full h-auto"
                                />
                            </div>
                        </motion.div>

                        {/* RIGHT TEXT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#3AABB8] mb-4">Leadership Vision</h2>
                            <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54] mb-6 leading-tight">
                                Delivering Excellence to Regional Clinical Needs
                            </h3>

                            <p className="text-[15px] text-[#4A6870] leading-relaxed mb-5 font-light">
                                In 2017, Al Afiya Medical Supplies LLC was founded on a premise that remains
                                at the heart of everything we do: the belief that the right tools,
                                delivered at the right time, are the foundation of better health.
                            </p>

                            <p className="text-[15px] text-[#4A6870] leading-relaxed mb-5 font-light">
                                Today, we serve as a vital link in the regional healthcare value chain,
                                connecting hospitals and clinics across the UAE and Oman with the latest
                                advancements in medical technology.
                            </p>

                            <p className="text-[15px] text-[#4A6870] leading-relaxed mb-8 font-light">
                                We bridge this gap through strategic scouting and rigorous supply chain
                                management, empowering healthcare professionals to address evolving
                                health complexities with confidence and precision.
                            </p>

                            <div className="bg-white/60 backdrop-blur-md p-6 rounded-[20px] border border-[#D6E9EC] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                                <p className="text-[14px] text-[#0B3D54] italic mb-4">
                                    &quot;At Al Afiya, we are not just a distributor; we are your strategic partner,
                                    committed to transparency and world-class clinical standards.&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-full flex items-center justify-center text-white font-serif text-lg">
                                        AH
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#0B3D54] text-[15px]">Anish Haneefa</p>
                                        <p className="text-[12px] text-[#4A6870] uppercase tracking-wider">Managing Director</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* ✅ IMPACT STATS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {/* Stat 1 */}
                        <div className="text-center p-6 border-r border-gray-100 last:border-0">
                            <p className="text-[#2BA8B8] text-4xl md:text-5xl font-bold mb-2">2017</p>
                            <p className="text-[#164B5F] font-semibold uppercase tracking-wider text-xs">Established</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center p-6 border-r border-gray-100 last:border-0 md:block hidden">
                            <p className="text-[#2BA8B8] text-4xl md:text-5xl font-bold mb-2">50+</p>
                            <p className="text-[#164B5F] font-semibold uppercase tracking-wider text-xs">Global Partners</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center p-6 border-r border-gray-100 last:border-0">
                            <p className="text-[#2BA8B8] text-4xl md:text-5xl font-bold mb-2">2</p>
                            <p className="text-[#164B5F] font-semibold uppercase tracking-wider text-xs">Countries (UAE & Oman)</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center p-6">
                            <p className="text-[#2BA8B8] text-4xl md:text-5xl font-bold mb-2">100%</p>
                            <p className="text-[#164B5F] font-semibold uppercase tracking-wider text-xs">Quality Assured</p>
                        </div>

                    </div>
                </div>
            </section>
            {/* COMPANY TIMELINE */}
            <section className="py-20 lg:py-28 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Milestones</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54]">Company Timeline</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#3AABB8] to-[#1D6375] mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="relative mt-12 md:mt-24">
                        {/* Horizontal Line for Desktop connecting all markers */}
                        <div className="hidden md:block absolute top-[70px] left-0 w-[90%] md:w-full h-px bg-gradient-to-r from-transparent via-[#A8D8DF] to-transparent transform -translate-y-1/2 z-0"></div>

                        <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-8 overflow-x-auto pb-10 snap-x snap-mandatory scroll-smooth hide-scrollbar px-2 md:px-0">
                            {[
                                { year: "2017", title: "Company Founded", desc: "Established in the UAE with a mission to bridge global healthcare innovations with regional clinical needs." },
                                { year: "2019", title: "Regional Expansion", desc: "Expanded logistics network across the UAE and Oman, building strong partnerships with leading healthcare institutions." },
                                { year: "2022", title: "Technology Integration", desc: "Introduced advanced surgical technologies and modern laboratory equipment to support evolving clinical demands." },
                                { year: "2024", title: "Strategic Growth", desc: "Strengthened supplier alliances and enhanced supply chain transparency to ensure consistent product quality." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="relative flex-1 min-w-[280px] snap-center group flex flex-col md:items-center md:text-center shrink-0 md:shrink"
                                >
                                    {/* Vertical Line for Mobile connecting to left instead of middle */}
                                    <div className="md:hidden absolute left-4 top-16 bottom-[-3rem] w-px bg-gradient-to-b from-[#A8D8DF] to-transparent -z-10 group-last:hidden"></div>

                                    {/* Year Label */}
                                    <div className="mb-4 md:mb-8 ml-12 md:ml-0 flex items-center md:block h-[40px] md:h-auto">
                                        <span className="text-[40px] md:text-[54px] font-bold text-[#EBF5F8] leading-none block font-serif select-none transition-colors duration-300 group-hover:text-[#D6E9EC] drop-shadow-sm group-hover:drop-shadow-md">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Timeline Marker (Desktop center, Mobile left) */}
                                    <div className="absolute top-[20px] md:top-[70px] left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border-[3px] md:border-4 border-[#2A8A9E] transform md:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 shadow-[0_4px_10px_rgba(42,138,158,0.2)] md:group-hover:scale-125 group-hover:border-[#0B3D54] transition-all duration-300 cursor-pointer pointer-events-auto">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0B3D54] rounded-full group-hover:bg-[#2A8A9E] transition-colors"></div>
                                    </div>

                                    {/* Horizontal connection section (Desktop only) */}
                                    <div className="hidden md:block absolute top-[70px] left-1/2 w-full h-px bg-gradient-to-r from-[#2A8A9E] to-transparent -translate-y-1/2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></div>

                                    {/* Content Card */}
                                    <div className="mt-2 md:mt-8 ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-full h-full cursor-pointer">
                                        <div className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#D6E9EC] group-hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] group-hover:border-[#3AABB8]/40 transition-all duration-300 md:group-hover:-translate-y-3 h-full relative">
                                            {/* small vertical tick line connecting marker and card on desktop */}
                                            <div className="hidden md:block absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-[#A8D8DF] to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <h4 className="text-lg md:text-xl font-bold text-[#0B3D54] mb-2 md:mb-3">{item.title}</h4>
                                            <p className="text-[13px] md:text-[14px] text-[#4A6870] leading-relaxed font-light">{item.desc}</p>
                                        </div>
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#2A8A9E] mb-4">Structure</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54]">Our Strategic Pillars</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#3AABB8] to-[#1D6375] mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { id: "01", title: "Comprehensive Distribution", desc: "Utilizing a sophisticated logistics network, we ensure the seamless delivery of supplies to both urban centers and remote facilities. Our supply chain is optimized for reliability and regulatory compliance.", icon: Truck },
                            { id: "02", title: "Healthcare Partnerships", desc: "We serve as a trusted intermediary between global manufacturers and the regional healthcare sector, facilitating the smooth integration of new technologies into government and private institutions.", icon: Eye },
                            { id: "03", title: "Value-Based Procurement", desc: "We bridge the gap between high-end clinical requirements and budget sensitivities by sourcing globally certified products at economic prices, enabling superior care for all.", icon: Target },
                            { id: "04", title: "Regulatory Alignment", desc: "We manage the complexities of market entry, ensuring every solution meets international clinical standards and adheres strictly to regional regulatory requirements.", icon: ShieldCheck }
                        ].map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-[24px] p-8 shadow-sm border border-[#D6E9EC] hover:shadow-[0_15px_30px_rgba(38,125,145,0.08)] hover:border-[#3AABB8]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6 relative overflow-hidden"
                            >
                                <div className="absolute -right-6 -top-6 text-[#F4FBFC] text-8xl font-serif font-black opacity-50 select-none group-hover:text-[#EBF5F8] transition-colors">{pillar.id}</div>

                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl shadow-inner flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                                        <pillar.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-[18px] font-bold text-[#0B3D54] mb-3">{pillar.title}</h4>
                                    <p className="text-[14px] text-[#4A6870] leading-relaxed font-light">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-20 lg:py-28 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#3AABB8] mb-4">Principles</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-[#0B3D54]">Our Core Values</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#3AABB8] to-[#1D6375] mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We maintain transparency, honesty, and ethical standards in every partnership.", icon: ShieldCheck },
                            { title: "Quality", desc: "We deliver reliable and high-standard medical products professionals trust.", icon: Award },
                            { title: "Reliability", desc: "Our distribution network ensures timely delivery and consistent service excellence.", icon: Truck }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(38,125,145,0.12)] transition-all duration-500 border border-[#D6E9EC] hover:border-[#3AABB8]/30 text-center"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/30 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                <div className="w-16 h-16 bg-gradient-to-br from-[#F4FBFC] to-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#D6E9EC] mx-auto group-hover:-translate-y-2 transition-transform duration-300">
                                    <value.icon className="w-8 h-8 text-[#267D91]" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0B3D54] mb-3">{value.title}</h4>
                                <p className="text-[14px] text-[#4A6870] leading-relaxed font-light">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
