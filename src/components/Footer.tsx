import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Linkedin,
    Twitter,
    ChevronRight,
    Building2,
    Microscope,
    Stethoscope,
    FlaskConical
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0B3D54] border-t border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold font-serif tracking-tight drop-shadow-sm">AL AFIYA</span>
                        <p className="mt-4 text-[13px] text-[#A8D8DF] leading-relaxed">
                            Leading medical equipment and consumables distributor in the Middle East. Over 9 years of excellence in serving healthcare professionals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Products", path: "/products" },
                                { name: "Services", path: "/services" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className="text-[14px] text-[#D6E9EC] hover:text-[#3AABB8] transition-colors flex items-center group">
                                        <ChevronRight className="w-3.5 h-3.5 mr-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries Served */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-5">Industries Served</h3>
                        <ul className="space-y-3">
                            <li className="text-[14px] text-[#D6E9EC] flex items-center gap-2.5">
                                <Building2 className="w-4 h-4 text-[#3AABB8]" /> Hospitals & Clinics
                            </li>
                            <li className="text-[14px] text-[#D6E9EC] flex items-center gap-2.5">
                                <Microscope className="w-4 h-4 text-[#3AABB8]" /> Diagnostic Labs
                            </li>
                            <li className="text-[14px] text-[#D6E9EC] flex items-center gap-2.5">
                                <Stethoscope className="w-4 h-4 text-[#3AABB8]" /> Pharmacies
                            </li>
                            <li className="text-[14px] text-[#D6E9EC] flex items-center gap-2.5">
                                <FlaskConical className="w-4 h-4 text-[#3AABB8]" /> Research Centers
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-5">Contact Us</h3>
                        <ul className="space-y-4 text-[14px] text-[#D6E9EC]">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#3AABB8] shrink-0 mt-0.5" />
                                <span>Dubai Healthcare City,<br />Dubai, United Arab Emirates</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#3AABB8] shrink-0" />
                                <a href="tel:+971000000000" className="hover:text-[#3AABB8] transition-colors">+971 00 000 0000</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#3AABB8] shrink-0" />
                                <a href="mailto:info@alafiyamed.com" className="hover:text-[#3AABB8] transition-colors">info@alafiyamed.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[13px] text-[#A8D8DF]">
                        &copy; {new Date().getFullYear()} Al Afiya Medical Supplies LLC. All rights reserved.
                    </p>
                    <div className="flex space-x-5">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#3AABB8] text-white/70 hover:text-white transition-all transform hover:-translate-y-1">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#3AABB8] text-white/70 hover:text-white transition-all transform hover:-translate-y-1">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
