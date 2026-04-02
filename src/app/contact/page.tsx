import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Al Afiya Medical Supplies LLC for inquiries, orders, and support. Located in the UAE and Oman.",
    openGraph: {
        title: "Contact Al Afiya Medical | UAE & Oman",
        description: "Connect with our expert team for medical supply inquiries and logistics support.",
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
