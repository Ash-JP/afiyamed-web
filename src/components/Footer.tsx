import Link from "next/link";
import Image from "next/image";
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-2">
                            <Image
                                src="/logo.png"
                                alt="Al Afiya Medical Supplies"
                                width={200}
                                height={56}
                                className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] w-[120px] dark:brightness-0 dark:invert"
                            />
                        </Link>
                        <p className="mt-2 text-[12px] text-[#A8D8DF] leading-relaxed">
                            Leading medical equipment and consumables distributor in the Middle East. Over 9 years of excellence in serving healthcare professionals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-wider text-white uppercase mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Products", path: "/products" },
                                { name: "Services", path: "/services" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className="text-[13px] text-[#D6E9EC] hover:text-[#3AABB8] transition-colors flex items-center group">
                                        <ChevronRight className="w-3.5 h-3.5 mr-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries Served */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-wider text-white uppercase mb-2">Industries Served</h3>
                        <ul className="space-y-1">
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
                        <h3 className="text-xs font-semibold tracking-wider text-white uppercase mb-2">Contact Us</h3>
                        <ul className="space-y-1 text-[13px] text-[#D6E9EC]">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#3AABB8] shrink-0 mt-0.5" />
                                <span>Dubai Healthcare City,<br />Dubai, United Arab Emirates</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#3AABB8] shrink-0" />
                                <a href="tel:971503074484" className="hover:text-[#3AABB8] transition-colors">971 50 307 4484</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#3AABB8] shrink-0" />
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yourname@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3AABB8] transition-colors">info@alafiyamed.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-5 border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-[12px] text-[#A8D8DF]">
                        &copy; {new Date().getFullYear()} Al Afiya Medical Supplies LLC. All rights reserved.
                    </p>
                    <div className="flex space-x-5">
                        <a href="mailto:info@afiyamed.com" className="p-2 rounded-full bg-white/5 hover:bg-[#3AABB8] text-white/70 hover:text-white transition-all transform hover:-translate-y-1">
                            <span className="sr-only">Email</span>
                            <Mail className="w-4 h-4" />
                        </a>
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
