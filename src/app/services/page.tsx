import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Comprehensive medical distribution, logistics, bulk supply ordering, and after-sales support for healthcare providers in the UAE and Oman.",
    openGraph: {
        title: "Medical Services & Logistics | Al Afiya Medical",
        description: "Explore our end-to-end medical supply chain services including distribution, bulk ordering, and specialized procurement.",
    }
};

export default function ServicesPage() {
    return <ServicesClient />;
}
