import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-white tracking-tight">AL AFIYA</span>
                        <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                            Leading medical equipment and consumables distributor in the Middle East. Over 9 years of excellence in serving healthcare professionals.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="text-sm text-slate-400 hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/careers" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Industries Served</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-slate-400">Hospitals & Clinics</li>
                            <li className="text-sm text-slate-400">Diagnostic Labs</li>
                            <li className="text-sm text-slate-400">Pharmacies</li>
                            <li className="text-sm text-slate-400">Research Centers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-slate-400 flex items-start">
                                <span className="mr-2 mt-1">📍</span>
                                <span>Dubai Healthcare City,<br />Dubai, United Arab Emirates</span>
                            </li>
                            <li className="text-sm text-slate-400 flex items-center">
                                <span className="mr-2">📞</span>
                                <a href="tel:+971000000000" className="hover:text-white">+971 00 000 0000</a>
                            </li>
                            <li className="text-sm text-slate-400 flex items-center">
                                <span className="mr-2">✉️</span>
                                <a href="mailto:info@alafiyamed.com" className="hover:text-white">info@alafiyamed.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Al Afiya Medical Supplies LLC. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="text-slate-500 hover:text-white">
                            <span className="sr-only">LinkedIn</span>
                            LinkedIn
                        </a>
                        <a href="#" className="text-slate-500 hover:text-white">
                            <span className="sr-only">Twitter</span>
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
