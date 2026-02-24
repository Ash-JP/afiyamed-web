import Link from "next/link";
import { use } from "react";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    // Mock data mapping
    const categoryData: Record<string, { title: string, desc: string }> = {
        "clinical-equipment": { title: "Clinical Equipment", desc: "High-grade clinical diagnostic and monitoring equipment for hospitals." },
        "laboratory-supplies": { title: "Laboratory Supplies", desc: "Precision instruments and high-purity reagents for diagnostic centers." },
        "surgical-consumables": { title: "Surgical Consumables", desc: "Reliable, sterile consumables ensuring safety in the operating room." },
        "pharmacy-essentials": { title: "Pharmacy Essentials", desc: "Storage and dispensing solutions for modern pharmacies." }
    };

    const resolvedParams = use(params);
    const data = categoryData[resolvedParams.category] || { title: "Products", desc: "Explore our medical supplies catalog." };

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav className="flex mb-8 text-sm text-slate-500">
                    <Link href="/products" className="hover:text-blue-600">Products</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-medium capitalize">{data.title}</span>
                </nav>

                <div className="mb-12 border-b border-slate-200 pb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{data.title}</h1>
                    <p className="text-lg text-slate-600">{data.desc}</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                            <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                                [Product Image Placeholder]
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Standard Product Title {item}</h3>
                                <p className="text-sm text-slate-500 mb-4 flex-grow">A brief description of this medical product&apos;s features and specifications for B2B procurement.</p>
                                <Link href="/contact" className="w-full text-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded font-medium transition-colors">
                                    Inquire Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
