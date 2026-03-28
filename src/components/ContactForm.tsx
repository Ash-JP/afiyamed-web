"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
    });

    // UI states
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send message. Please try again.");
            }

            // Success!!
            setStatus("success");

            // Clear the form
            setFormData({
                firstName: "",
                lastName: "",
                company: "",
                email: "",
                phone: "",
                subject: "General Inquiry",
                message: "",
            });

            // Revert back to idle after 5 seconds automatically
            setTimeout(() => setStatus("idle"), 5000);

        } catch (error: unknown) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Status Messages */}
            {status === "success" && (
                <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200 shadow-sm animate-pulse-once">
                    <strong>Success!</strong> Your message has been sent successfully. Our team will get back to you shortly.
                </div>
            )}

            {status === "error" && (
                <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 shadow-sm">
                    <strong>Error:</strong> {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">FIRST NAME <span className="text-red-500">*</span></label>
                    <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">LAST NAME <span className="text-red-500">*</span></label>
                    <input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
            </div>
            <div>
                <label htmlFor="company" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">COMPANY / FACILITY NAME</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="Medical Care LLC" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">EMAIL <span className="text-red-500">*</span></label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">PHONE NUMBER <span className="text-red-500">*</span></label>
                    <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all" placeholder="971 50 307 4484" />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">SUBJECT <span className="text-red-500">*</span></label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all text-[#4A6870] appearance-none cursor-pointer">
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Request a Quote">Request a Quote</option>
                    <option value="Bulk Sourcing">Bulk Sourcing</option>
                    <option value="Partnership">Partnership</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-[15px] font-bold text-[#0B3D54] mb-2 tracking-wide">MESSAGE <span className="text-red-500">*</span></label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-[#F4FBFC] border border-[#D6E9EC] rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-[#3AABB8] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
            </div>
            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex justify-center items-center bg-gradient-to-r from-[#1D6375] to-[#2A8A9E] hover:from-[#0B3D54] hover:to-[#1D6375] text-white font-bold text-[17px] py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(42,138,158,0.2)] hover:shadow-[0_15px_30px_rgba(42,138,158,0.3)] hover:-translate-y-1 mt-6 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed group"
            >
                {status === "loading" ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                ) : 'Send Message'}
            </button>
        </form>
    );
}
