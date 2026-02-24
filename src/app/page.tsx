import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Empowering Healthcare with <span className="text-blue-600">Premium Medical Equipment</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Al Afiya Medical Supplies is your trusted partner for high-quality medical equipment and consumables across the Middle East. Over 9 years of excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors shadow-sm">
                Explore Products
              </Link>
              <Link href="/contact" className="bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 px-8 py-3 rounded-md font-medium text-lg transition-colors shadow-sm">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Short Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Al Afiya</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded with a vision to enhance healthcare delivery, Al Afiya Medical Supplies LLC is a premier B2B and B2C distributor of clinical equipment, laboratory instruments, and everyday surgical consumables. We bridge the gap between world-renowned manufacturers and local healthcare facilities.
          </p>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Key Product Categories</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Discover our expansive range of medical supplies tailored for diverse clinical environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Clinical Equipment', 'Laboratory Supplies', 'Surgical Consumables'].map((category) => (
              <div key={category} className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl">🏥</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{category}</h3>
                <p className="text-slate-600 mb-4">High-performance solutions designed to meet rigorous healthcare standards.</p>
                <Link href="/products" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  View Category
                  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Healthcare Leaders Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">9+ Years Experience</h3>
              <p className="text-slate-600">Deep industry knowledge and a proven track record of reliable distribution.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Swift Delivery</h3>
              <p className="text-slate-600">Optimized logistics ensuring your critical supplies arrive when needed most.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Certified Quality</h3>
              <p className="text-slate-600">Partnering only with top-tier, compliant, and internationally certified brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-slate-700 rounded-lg">Hospitals</div>
            <div className="p-6 border border-slate-700 rounded-lg">Clinics</div>
            <div className="p-6 border border-slate-700 rounded-lg">Diagnostic Labs</div>
            <div className="p-6 border border-slate-700 rounded-lg">Pharmacies</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to equip your facility?</h2>
          <p className="text-blue-100 text-lg mb-8">Contact our procurement specialists for bulk orders, custom sourcing, and competitive quotes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium text-lg hover:bg-slate-50 transition-colors">
              Contact Us Now
            </Link>
            <a href="tel:+971000000000" className="border border-white text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors">
              Call +971 00 000 0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
