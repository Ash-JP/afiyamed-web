export default function AboutPage() {
    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center">About Us</h1>

                {/* Company Background */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Background</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Established over 9 years ago, Al Afiya Medical Supplies LLC has grown to become a cornerstone in the Middle East&apos;s medical distribution network. We specialize in providing high-quality medical equipment, laboratory supplies, and everyday consumables to hospitals, clinics, and research facilities across the region.
                    </p>
                </section>

                {/* Mission and Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                            <span className="text-blue-600 mr-2">🎯</span> Mission
                        </h2>
                        <p className="text-slate-600">
                            To empower healthcare providers with reliable, state-of-the-art medical products, ensuring uncompromised patient care through efficient distribution and unwavering support.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                            <span className="text-blue-600 mr-2">👁️</span> Vision
                        </h2>
                        <p className="text-slate-600">
                            To be the most trusted and comprehensive medical supply partner in the Middle East, driving advancements in healthcare accessibility and quality.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Core Values</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="p-6 border border-slate-200 rounded-lg text-center">
                            <h3 className="font-bold text-slate-900 mb-2">Integrity</h3>
                            <p className="text-sm text-slate-600">Transparent and ethical in all our dealings.</p>
                        </div>
                        <div className="p-6 border border-slate-200 rounded-lg text-center">
                            <h3 className="font-bold text-slate-900 mb-2">Quality</h3>
                            <p className="text-sm text-slate-600">Delivering excellence without compromise.</p>
                        </div>
                        <div className="p-6 border border-slate-200 rounded-lg text-center">
                            <h3 className="font-bold text-slate-900 mb-2">Reliability</h3>
                            <p className="text-sm text-slate-600">Consistent and timeline-driven service.</p>
                        </div>
                    </div>
                </section>

                {/* Regional Presence & Certifications */}
                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Regional Presence</h2>
                        <p className="text-slate-600 mb-4">
                            Headquartered in Dubai, UAE, our logistics network spans across the GCC and broader Middle East, enabling rapid deployment of critical medical supplies.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Certifications & Compliance</h2>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>ISO 9001:2015 Certified</li>
                            <li>Ministry of Health (MOH) Approved</li>
                            <li>Good Distribution Practice (GDP) Compliant</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
