"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Flow scroll effect
    useEffect(() => {
        const handleScroll = () => {
            // Prevent navbar from hiding or tracking scroll if the mobile menu is open
            if (isMobileMenuOpen) return;

            const currentScrollY = window.scrollY;

            // Check if we are at the top
            if (currentScrollY < 50) {
                setIsScrolled(false);
                setIsVisible(true);
            } else {
                setIsScrolled(true);
                // Hide when scrolling down, show when scrolling up
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobileMenuOpen]);

    return (
        <div
            className={`fixed left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "top-6 translate-y-0 opacity-100" : "top-0 -translate-y-full opacity-0"
                }`}
        >
            {/* 
              Unique Multi-Layered Glass Navbar 
              Widened to max-w-7xl for a longer feel
            */}
            <nav className={`pointer-events-auto w-full max-w-7xl relative group transition-all duration-500 ${isScrolled ? "scale-[0.98]" : "scale-100"
                }`}>

                {/* Glowing Ambient Background Behind Navbar */}
                <div className={`absolute inset-[-4px] bg-gradient-to-r from-[#2A8A9E] via-[#3AABB8] to-[#1D6375] rounded-2xl blur-md transition-opacity duration-500 ${isScrolled ? "opacity-10 group-hover:opacity-40" : "opacity-30 group-hover:opacity-60"
                    }`}></div>

                {/* Main Glass Panel */}
                <div className={`relative bg-[#0B3D54]/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ${isScrolled ? "shadow-[0_20px_40px_-10px_rgba(11,61,84,0.7)] bg-[#0B3D54]/95" : "shadow-[0_15px_40px_-5px_rgba(11,61,84,0.6)]"
                    }`}>

                    {/* Inner Accent Line (Top) */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3AABB8] to-transparent opacity-70"></div>

                    <div className="px-6 py-1 sm:px-8">
                        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
                            }`}>

                            {/* Logo Area */}
                            <div className="flex items-center relative z-10">
                                <Link href="/" className="flex-shrink-0 flex items-center group/logo">
                                    <Image
                                        src="/logo.png"
                                        alt="Al Afiya Medical Supplies"
                                        width={160}
                                        height={45}
                                        priority
                                        className={`brightness-0 invert hover:opacity-100 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${isScrolled ? "w-[130px] opacity-100" : "w-[160px] opacity-90 group-hover/logo:opacity-100"
                                            }`}
                                    />
                                </Link>
                                {/* Vertical Divider */}
                                <div className={`hidden md:block w-px bg-white/20 ml-8 mr-2 transition-all duration-500 ${isScrolled ? "h-6 opacity-50" : "h-8 opacity-100"
                                    }`}></div>
                            </div>

                            {/* Navigation Links - Centered */}
                            <div className="hidden sm:flex sm:items-center sm:space-x-1 lg:space-x-2">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About Us", path: "/about" },
                                    { name: "Products", path: "/products" },
                                    { name: "Services", path: "/services" },
                                    { name: "Contact", path: "/contact" }
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="relative px-4 py-2 text-white/80 hover:text-white text-[15px] font-medium transition-colors group/link"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {/* Hover Pill Effect */}
                                        <div className="absolute inset-0 bg-white/10 rounded-lg scale-90 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-200"></div>
                                    </Link>
                                ))}
                            </div>

                            {/* Contact CTA (Right Side) */}
                            <div className="hidden sm:flex items-center space-x-4">
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex items-center sm:hidden">
                                <button
                                    type="button"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-xl text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3AABB8] transition-all"
                                    aria-expanded={isMobileMenuOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`sm:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opacity-100 border-t border-white/10" : "max-h-0 opacity-0 overflow-hidden"}`}>
                        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#0B3D54]/95 backdrop-blur-xl">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Products", path: "/products" },
                                { name: "Services", path: "/services" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
