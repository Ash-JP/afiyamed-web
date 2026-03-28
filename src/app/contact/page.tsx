import type { Metadata } from "next";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "./FAQAccordion";
export const metadata: Metadata = {
    title: "Contact Us | Al Afiya Medical Supplies",
    description: "Get in touch with our team for sales inquiries, custom procurement, or general questions.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#F4FBFC]">
            {/* HERO SECTION - Minimalist Radial Focus */}
            <section className="relative overflow-hidden bg-[#0B3D54] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-[#1D6375]">
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D54] via-[#124D64] to-[#1D6375]"></div>
                    
                    {/* Droplet Water Ripple Animation */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-10">
                        {/* 5 concentric circles representing rippling water lines */}
                        {[0, 1.5, 3, 4.5, 6].map((delay, i) => (
                            <div 
                                key={i}
                                className="absolute w-[100px] h-[100px] border border-[#A8D8DF] rounded-full will-change-transform transform-gpu mix-blend-screen"
                                style={{
                                    animation: `waterDropRipple 7.5s cubic-bezier(0.1, 0.4, 0.8, 1) infinite`,
                                    animationDelay: `${delay}s`,
                                    opacity: 0,
                                }}
                            />
                        ))}
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes waterDropRipple {
                            0% { transform: scale(0.1); opacity: 0.25; border-width: 2px; }
                            100% { transform: scale(20); opacity: 0; border-width: 0px; }
                        }
                        `
                    }} />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
                    <h2 className="text-[12px] font-semibold tracking-[3px] uppercase text-[#A8D8DF] mb-4 drop-shadow-sm">
                        Get In Touch
                    </h2>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="text-base md:text-xl text-[#D6E9EC] mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                        For sales inquiries, custom procurement, or general questions, our dedicated team is ready to assist you.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-20 lg:py-28 relative">
                {/* Generically removed distracting right-side gradient blobs from content background */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Contact Information & Map */}
                        <div className="space-y-8">
                            {/* Info Cards */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <a href="tel:+971503074484" className="group bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white hover:border-[#3AABB8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300 block">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-[#0B3D54] mb-2 text-[16px]">Call Us</h3>
                                    <span className="text-[#4A6870] group-hover:text-[#267D91] text-[15px] transition-colors font-medium">+971 50 307 4484</span>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@afiyamed.com" target="_blank" rel="noopener noreferrer" className="group bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white hover:border-[#3AABB8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300 block">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-[#0B3D54] mb-2 text-[16px]">Email Us</h3>
                                    <span className="text-[#4A6870] group-hover:text-[#267D91] text-[15px] transition-colors font-medium">info@afiyamed.com</span>
                                </a>
                            </div>

                            <div className="group bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white hover:border-[#3AABB8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/30 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform relative z-10">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-[#0B3D54] mb-3 text-[18px] relative z-10">Headquarters</h3>
                                <p className="text-[#4A6870] leading-relaxed mb-6 text-[15px] relative z-10">
                                    Main Office -- Musaffah M-17,<br />
                                    Abu Dhabi, UAE
                                </p>
                                <div className="pt-6 border-t border-[#D6E9EC] relative z-10">
                                    <h4 className="font-bold text-[#0B3D54] text-[13px] uppercase tracking-wider mb-2">Working Hours</h4>
                                    <p className="text-[#4A6870] text-[14px]">Monday to Saturday, 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            {/* FAQ Accordion Section */}
                            <FAQAccordion />
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A8D8DF]/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                            <h2 className="text-2xl md:text-3xl font-serif text-[#0B3D54] mb-8 relative z-10">Send us a message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
