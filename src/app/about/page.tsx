import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Al Afiya Medical Supplies LLC, a premier healthcare distributor in the UAE and Oman since 2017.",
    openGraph: {
        title: "About Al Afiya Medical | Our Heritage & Vision",
        description: "Discover our journey from inception in 2017 to becoming a leading medical supplier in the Middle East.",
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
