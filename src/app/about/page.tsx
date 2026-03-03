import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Al Afiya Medical Supplies LLC.",
};

export default function AboutPage() {
    return <AboutClient />;
}
