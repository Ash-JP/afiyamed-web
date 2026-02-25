import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL('https://alafiyamed.com'), // Replace with your actual production domain
  title: {
    default: "Al Afiya Medical Supplies LLC",
    template: "%s | Al Afiya Medical"
  },
  description: "Leading medical equipment and consumables distributor based in the Middle East.",
  openGraph: {
    title: "Al Afiya Medical Supplies LLC",
    description: "Leading medical equipment and consumables distributor based in the Middle East.",
    url: 'https://alafiyamed.com',
    siteName: 'Al Afiya Medical',
    locale: 'en_AE', // UAE locale
    type: 'website',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-AE': '/en-AE',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Al Afiya Medical Supplies LLC",
              image: "https://alafiyamed.com/logo.png", // Ensure you have a logo.png at root
              description: "Leading B2B and B2C distributor of clinical equipment, laboratory instruments, and everyday surgical consumables in the Middle East.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office 101, Medical Tower Building",
                addressLocality: "Dubai Healthcare City",
                addressRegion: "Dubai",
                addressCountry: "AE"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.2345, // Replace with actual latitude
                longitude: 55.3188 // Replace with actual longitude
              },
              url: "https://alafiyamed.com",
              telephone: "+971000000000",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
