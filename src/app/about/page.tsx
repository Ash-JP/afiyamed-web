import type { Metadata } from "next";
import Image from "next/image";

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

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Who Are We
                    </h1>
                    <p className="text-lg text-[#BFE9EF]">
                        A Culture of Caring, A Legacy of Quality
                    </p>
                </div>

            </section>

            {/* ✅ COMPANY MESSAGE */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-10">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#164B5F] mb-6 text-center">
                        Bridging Global Innovation with Regional Clinical Needs
                    </h2>

                    <p className="text-[#4A6070] leading-relaxed mb-4">
                        In 2017, Al Afiya Medical Supplies LLC was founded on a premise that remains at the heart of everything we do:
                        the belief that the right tools, delivered at the right time, are the foundation of better health.
                    </p>

                    <p className="text-[#4A6070] leading-relaxed mb-4">
                        Today, we serve as a vital link in the regional healthcare value chain, connecting hospitals and clinics across
                        the UAE and Oman with the latest advancements in medical technology. We understand that modern healthcare
                        providers face a dual challenge: the need to adopt complex, new therapies while maintaining operational
                        and budgetary efficiency.
                    </p>

                    <p className="text-[#4A6070] leading-relaxed mb-4">
                        We bridge this gap through strategic scouting and rigorous supply chain management. By introducing novel
                        surgical methods to our market, we empower our medical community to address evolving health complexities
                        with confidence and precision.
                    </p>

                    <p className="text-[#4A6070] leading-relaxed mb-6">
                        At Al Afiya, we are not just a distributor; we are your strategic partner. We hold ourselves to a standard
                        of absolute transparency, ensuring that every product we deliver meets the highest clinical benchmarks.
                        We look forward to continuing our mission of making world-class healthcare a reality for every segment
                        of our society.
                    </p>

                    <div className="text-right mt-8">
                        <p className="font-semibold text-[#164B5F]">
                            Best regards,
                        </p>
                        <p className="text-[#4A6070]">
                            [Anish Haneefa]
                        </p>
                        <p className="text-[#4A6070]">
                            CEO, Al Afiya Medical Supplies LLC
                        </p>
                    </div>

                </div>
            </section>
            {/* ✅ OUR BACKGROUND */}
            <section className="relative py-24">

                {/* subtle divider line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#164B5F] to-[#2BA8B8] rounded-full" />

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold text-[#164B5F] mb-8">
                        Our Background
                    </h2>

                    <p className="text-[#4A6070] leading-relaxed">
                        Established over 9 years ago, Al Afiya Medical Supplies LLC has grown
                        to become a cornerstone in the Middle East's medical distribution network.
                    </p>

                    <p className="text-[#4A6070] leading-relaxed mt-6">
                        We specialize in providing high-quality medical equipment, laboratory supplies,
                        and everyday consumables to hospitals, clinics, and research facilities
                        across the region.
                    </p>

                </div>
            </section>

            {/* ✅ COMPANY INTRO */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold text-[#164B5F] mb-6">
                        About Al Afiya Medical Supplies
                    </h2>

                    <p className="text-[#4A6070] leading-relaxed">
                        Al Afiya Medical Supplies LLC is a trusted distribution and trading company
                        specializing in high-quality surgical equipment, medical devices, and healthcare solutions.
                    </p>

                    <p className="text-[#4A6070] leading-relaxed mt-4">
                        With a strong commitment to quality, reliability, and customer satisfaction,
                        we proudly serve hospitals, clinics, laboratories, and healthcare providers.
                    </p>

                </div>
            </section>

            {/* ✅ IMAGE + CONTENT SECTION (RESTORED) */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h3 className="text-3xl font-bold text-[#164B5F] mb-6">
                            Excellence in Healthcare Distribution
                        </h3>

                        <p className="text-[#4A6070] leading-relaxed">
                            We bridge the gap between world-class manufacturers and healthcare professionals
                            by delivering dependable medical solutions that support better patient care,
                            operational efficiency, and clinical excellence.
                        </p>
                    </div>

                    {/* RIGHT IMAGE CARD */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">

                        <Image
                            src="/about-image.png"   // ✅ YOUR IMAGE HERE
                            alt="Medical Supplies"
                            width={500}
                            height={350}
                            className="rounded-xl object-cover"
                        />

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
                        <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">

                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2BA8B8]/10 mb-6 text-2xl">
                                🛡️
                            </div>

                            <h3 className="text-xl font-bold text-[#164B5F] mb-3">
                                Integrity
                            </h3>

                            <p className="text-[#4A6070]">
                                We maintain transparency, honesty, and ethical standards
                                in every partnership and transaction.
                            </p>

                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">

                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2BA8B8]/10 mb-6 text-2xl">
                                ⭐
                            </div>

                            <h3 className="text-xl font-bold text-[#164B5F] mb-3">
                                Quality
                            </h3>

                            <p className="text-[#4A6070]">
                                We deliver only reliable and high-standard medical
                                products that healthcare professionals can trust.
                            </p>

                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col items-center text-center">

                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2BA8B8]/10 mb-6 text-2xl">
                                🚚
                            </div>

                            <h3 className="text-xl font-bold text-[#164B5F] mb-3">
                                Reliability
                            </h3>

                            <p className="text-[#4A6070]">
                                Our efficient distribution network ensures timely
                                delivery and consistent service excellence.
                            </p>

                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}