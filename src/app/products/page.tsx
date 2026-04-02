import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
    title: "Healthcare Products",
    description: "Extensive catalog of medical consumables, diagnostic tools, surgical equipment, and laboratory instruments for clinics and hospitals.",
    openGraph: {
        title: "Clinical & Surgical Supplies | Al Afiya Medical",
        description: "Browse our extensive catalog of high-quality medical supplies and diagnostic equipment.",
    }
};

export default function ProductsPage() {
    return <ProductsClient />;
}
