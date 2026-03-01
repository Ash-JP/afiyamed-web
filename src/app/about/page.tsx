import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | Al Afiya Medical Supplies",
    description: "Leading medical equipment distributor in the Middle East with 9+ years of excellence in healthcare solutions.",
};

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-gradient-to-b from-[#F4FBFC] to-white">
            {/* Subtle Grid Pattern with gentle pulse animation */}
            <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(#164B5F_1px,transparent_1px)] [background-size:20px_20px] animate-pulse-slow" />
            
            {/* Floating Glow Effects with gentle movement */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#2A8A9E]/20 rounded-full blur-[120px] -z-10 animate-float-slow" />
            <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#1D6375]/10 rounded-full blur-[150px] -z-10 animate-float-slower" />

            {/* HERO SECTION */}
            <section className="relative text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D54] via-[#1D6375] to-[#2A8A9E] animate-gradient-shift" />
                
                {/* Animated floating particles */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#2A8A9E]/20 rounded-full blur-3xl animate-float-delayed" />
                
                {/* Inner Accent Line with shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                
                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <span className="inline-block text-sm uppercase tracking-[0.2em] text-[#BFE9EF] mb-4 animate-fade-up">
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white animate-fade-up animation-delay-200">
                        Who We Are
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#2A8A9E] to-white/50 mx-auto mb-8 animate-scale-up animation-delay-400" />
                    <p className="text-xl text-[#BFE9EF] max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-600">
                        A Culture of Caring, A Legacy of Quality
                    </p>
                </div>
            </section>

            {/* COMPANY INTRO */}
            <section className="py-20 bg-[#0B3D54]/5">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center animate-on-scroll">
                        {/* Inner Accent Line with shimmer */}
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2A8A9E] to-[#1D6375] mx-auto mb-8 animate-scale-up" />
                        <h2 className="text-4xl font-bold text-[#0B3D54] mb-6 animate-fade-up animation-delay-200">
                            About Al Afiya Medical Supplies
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-4 text-lg text-[#4A6070] leading-relaxed">
                            <p className="animate-fade-up animation-delay-400">
                                Al Afiya Medical Supplies LLC is a trusted distribution and trading company
                                specializing in high-quality surgical equipment, medical devices, and healthcare solutions.
                            </p>
                            <p className="animate-fade-up animation-delay-600">
                                With a strong commitment to quality, reliability, and customer satisfaction,
                                we proudly serve hospitals, clinics, laboratories, and healthcare providers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR BACKGROUND */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative group animate-on-scroll">
                        {/* Glowing background effect with hover animation */}
                        <div className="absolute inset-[-4px] bg-gradient-to-r from-[#2A8A9E]/20 via-[#3AABB8]/20 to-[#1D6375]/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                        
                        {/* Main content card with glass effect */}
                        <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <span className="text-sm uppercase tracking-[0.2em] text-[#2A8A9E] font-semibold animate-slide-right">
                                Our Story
                            </span>
                            <h2 className="text-4xl font-bold text-[#0B3D54] mt-4 mb-8 animate-slide-right animation-delay-200">
                                Our Background
                            </h2>
                            <div className="space-y-6 text-lg text-[#4A6070] leading-relaxed">
                                <p className="animate-slide-right animation-delay-400">
                                    Established over 9 years ago, Al Afiya Medical Supplies LLC has grown
                                    to become a cornerstone in the Middle East's medical distribution network.
                                </p>
                                <p className="animate-slide-right animation-delay-600">
                                    We specialize in providing high-quality medical equipment, laboratory supplies,
                                    and everyday consumables to hospitals, clinics, and research facilities
                                    across the region.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE + CONTENT SECTION */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="animate-on-scroll">
                            <span className="text-sm uppercase tracking-[0.2em] text-[#2A8A9E] font-semibold animate-slide-right">
                                Our Mission
                            </span>
                            <h3 className="text-4xl font-bold text-[#0B3D54] mt-4 mb-6 leading-tight animate-slide-right animation-delay-200">
                                Excellence in Healthcare Distribution
                            </h3>
                            <p className="text-lg text-[#4A6070] leading-relaxed animate-slide-right animation-delay-400">
                                We bridge the gap between world-class manufacturers and healthcare professionals
                                by delivering dependable medical solutions that support better patient care,
                                operational efficiency, and clinical excellence.
                            </p>
                        </div>
                        
                        {/* Glass card for image */}
                        <div className="relative group animate-on-scroll animation-delay-400">
                            {/* Glowing background effect */}
                            <div className="absolute inset-[-4px] bg-gradient-to-r from-[#2A8A9E] via-[#3AABB8] to-[#1D6375] rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" />
                            
                            {/* Main glass panel */}
                            <div className="relative bg-[#0B3D54]/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                                {/* Inner Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                
                                <Image
                                    src="/about-image.png"
                                    alt="Medical Supplies"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-20 bg-gradient-to-b from-white to-[#F4FBFC]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16 animate-on-scroll">
                        <span className="text-sm uppercase tracking-[0.2em] text-[#2A8A9E] font-semibold animate-fade-up">
                            Our Foundation
                        </span>
                        <h2 className="text-4xl font-bold text-[#0B3D54] mt-4 animate-fade-up animation-delay-200">
                            Core Values
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2A8A9E] to-[#1D6375] mx-auto mt-8 animate-scale-up animation-delay-400" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🛡️",
                                title: "Integrity",
                                description: "We maintain transparency, honesty, and ethical standards in every partnership and transaction.",
                                delay: "0"
                            },
                            {
                                icon: "⭐",
                                title: "Quality",
                                description: "We deliver only reliable and high-standard medical products that healthcare professionals can trust.",
                                delay: "200"
                            },
                            {
                                icon: "🚚",
                                title: "Reliability",
                                description: "Our efficient distribution network ensures timely delivery and consistent service excellence.",
                                delay: "400"
                            }
                        ].map((value, index) => (
                            <div 
                                key={index}
                                className="relative group animate-on-scroll"
                                style={{ animationDelay: `${value.delay}ms` }}
                            >
                                {/* Glowing background effect */}
                                <div className="absolute inset-[-4px] bg-gradient-to-r from-[#2A8A9E] via-[#3AABB8] to-[#1D6375] rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-105" />
                                
                                {/* Main glass card */}
                                <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                                    {/* Inner Accent Line */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A8A9E]/30 to-transparent"></div>
                                    
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2A8A9E]/10 to-[#1D6375]/10 mb-6 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0B3D54] mb-3 group-hover:text-[#2A8A9E] transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#4A6070] leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-16 bg-[#0B3D54] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] animate-pulse-slow" />
                
                {/* Animated background particles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#2A8A9E]/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1D6375]/20 rounded-full blur-3xl animate-float-delayed" />
                
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "9+", label: "Years of Excellence" },
                            { number: "500+", label: "Happy Clients" },
                            { number: "1000+", label: "Products Delivered" },
                            { number: "24/7", label: "Customer Support" }
                        ].map((stat, index) => (
                            <div 
                                key={index} 
                                className="group animate-on-scroll"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#2A8A9E] mb-2 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                                    {stat.number}
                                </div>
                                <div className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white/100 transition-colors duration-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add the animation styles to your global CSS or create a new CSS module */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-30px) scale(1.05); }
                }
                
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(20px) scale(0.95); }
                }
                
                @keyframes fade-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slide-right {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes scale-up {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 12s ease-in-out infinite;
                }
                
                .animate-float-slower {
                    animation: float-slower 15s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float 8s ease-in-out infinite;
                    animation-delay: -4s;
                }
                
                .animate-fade-up {
                    animation: fade-up 1s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-slide-right {
                    animation: slide-right 1s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-scale-up {
                    animation: scale-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-shimmer {
                    position: relative;
                    overflow: hidden;
                }
                
                .animate-shimmer::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: shimmer 2s infinite;
                }
                
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 10s ease infinite;
                }
                
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
                
                .animation-delay-400 {
                    animation-delay: 400ms;
                }
                
                .animation-delay-600 {
                    animation-delay: 600ms;
                }
                
                /* Scroll-triggered animations */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                
                .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            {/* Add Intersection Observer for scroll animations */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    document.addEventListener('DOMContentLoaded', function() {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('visible');
                                }
                            });
                        }, { threshold: 0.1 });
                        
                        document.querySelectorAll('.animate-on-scroll').forEach(el => {
                            observer.observe(el);
                        });
                    });
                `
            }} />
        </main>
    );
}