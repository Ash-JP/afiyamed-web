import Link from "next/link";

export default function ProductsPage() {
    const categories = [
        { id: "clinical-equipment", name: "Clinical Equipment", icon: "🩺", desc: "Diagnostic tools, patient monitors, and essential clinical hardware." },
        { id: "laboratory-supplies", name: "Laboratory Supplies", icon: "🔬", desc: "Reagents, glassware, and precision laboratory instruments." },
        { id: "surgical-consumables", name: "Surgical Consumables", icon: "✂️", desc: "Sterile instruments, drapes, sutures, and protective wear." },
        { id: "pharmacy-essentials", name: "Pharmacy Essentials", icon: "💊", desc: "Storage solutions, dispensing tools, and point-of-care products." },
    ];

    return (
        <div className="py-16 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Products</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Browse our comprehensive catalog of medical equipment and consumables sourced from industry-leading manufacturers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <Link key={cat.id} href={`/products/${cat.id}`} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 block">
                            <div className="p-8">
                                <div className="text-4xl mb-4 bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    {cat.icon}
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cat.name}</h2>
                                <p className="text-sm text-slate-500 mb-6">{cat.desc}</p>
                                <div className="text-blue-600 font-medium flex items-center text-sm">
                                    Explore Catalog
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
