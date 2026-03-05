import type { Metadata } from "next";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Al Afiya Medical Supplies",
    description: "Get in touch with our team for sales inquiries, custom procurement, or general questions.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#F4FBFC]">
            {/* HERO SECTION - Minimalist Radial Focus */}
            <section className="relative overflow-hidden bg-[#0B3D54] pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center text-white border-b border-[#1D6375]">
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                    {/* Centered radial glow specifically highlighting the text */}
                    <div className="w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(42,138,158,0.15)_0%,transparent_70%)]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                                <div className="group bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white hover:border-[#3AABB8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-[#0B3D54] mb-2 text-[16px]">Call Us</h3>
                                    <a href="tel:+971000000000" className="text-[#4A6870] hover:text-[#267D91] text-[15px] transition-colors font-medium">+971 00 000 0000</a>
                                </div>
                                <div className="group bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white hover:border-[#3AABB8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-[#0B3D54] mb-2 text-[16px]">Email Us</h3>
                                    <a href="mailto:info@alafiyamed.com" className="text-[#4A6870] hover:text-[#267D91] text-[15px] transition-colors font-medium">info@alafiyamed.com</a>
                                </div>
                            </div>

                            <div className="group bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white hover:border-[#3AABB8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A8D8DF]/30 to-transparent rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                <div className="w-12 h-12 bg-gradient-to-br from-[#1D6375] to-[#267D91] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform relative z-10">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-[#0B3D54] mb-3 text-[18px] relative z-10">Headquarters</h3>
                                <p className="text-[#4A6870] leading-relaxed mb-6 text-[15px] relative z-10">
                                    Office 101, Medical Tower Building,<br />
                                    Dubai Healthcare City,<br />
                                    Dubai, United Arab Emirates
                                </p>
                                <div className="pt-6 border-t border-[#D6E9EC] relative z-10">
                                    <h4 className="font-bold text-[#0B3D54] text-[13px] uppercase tracking-wider mb-2">Working Hours</h4>
                                    <p className="text-[#4A6870] text-[14px]">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            {/* Embedded map placeholder */}
                            <div className="bg-[#EBF5F8] rounded-[24px] h-64 border border-[#D6E9EC] flex items-center justify-center text-[#4A6870] overflow-hidden relative shadow-inner">
                                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Dubai,UAE&zoom=11&size=600x300&maptype=roadmap&sensor=false')] opacity-20 bg-cover bg-center filter grayscale mix-blend-multiply"></div>
                                <span className="relative z-10 font-bold bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm text-[13px] tracking-wider uppercase text-[#1D6375]">Interactive Map Pending</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A8D8DF]/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                            <h2 className="text-2xl md:text-3xl font-serif text-[#0B3D54] mb-8 relative z-10">Send us a message</h2>
                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">FIRST NAME</label>
                                        <input type="text" className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">LAST NAME</label>
                                        <input type="text" className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">COMPANY / FACILITY NAME</label>
                                    <input type="text" className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="Medical Care LLC" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">EMAIL</label>
                                        <input type="email" className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">PHONE NUMBER</label>
                                        <input type="tel" className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="+971 50 000 0000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">SUBJECT</label>
                                    <select className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all text-[#4A6870] appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Request a Quote</option>
                                        <option>Bulk Sourcing</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-bold text-[#0B3D54] mb-2 tracking-wide">MESSAGE</label>
                                    <textarea rows={5} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
                                </div>
                                <button type="button" className="w-full bg-gradient-to-r from-[#1D6375] to-[#2A8A9E] hover:from-[#0B3D54] hover:to-[#1D6375] text-white font-bold text-[15px] py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(42,138,158,0.2)] hover:shadow-[0_15px_30px_rgba(42,138,158,0.3)] hover:-translate-y-1 mt-6">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
