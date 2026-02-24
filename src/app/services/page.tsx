import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            title: "Distribution & Logistics",
            desc: "Robust supply chain solutions ensuring timely delivery of medical equipment and consumables across the Middle East. Featuring temperature-controlled transport for sensitive items.",
            icon: "🚚"
        },
        {
            title: "Bulk Supply Ordering",
            desc: "Streamlined procurement for large hospitals and clinic networks. Benefit from tiered pricing, fast order processing, and scheduled replenishments for essential stocks.",
            icon: "📦"
        },
        {
            title: "Custom Procurement Projects",
            desc: "Tailored sourcing for specialized medical hardware. We leverage our extensive global manufacturer network to find exactly what your facility requires.",
            icon: "🤝"
        },
        {
            title: "After-Sales Support",
            desc: "Comprehensive warranty support, maintenance routing, and technical assistance for all distributed capital equipment. Your operations never stand still.",
            icon: "🛠️"
        }
    ];

    return (
        <div className="py-16 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Beyond distribution. We provide end-to-end supply chain integration tailored to the demands of modern healthcare facilities.
                    </p>
                </div>

                <div className="space-y-12">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                                {service.icon}
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                <p className="text-lg text-slate-600 mb-6">{service.desc}</p>
                                <Link href="/contact" className="inline-block bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition-colors">
                                    Inquire About This Service
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
