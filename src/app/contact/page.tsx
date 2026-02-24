export default function ContactPage() {
    return (
        <div className="py-16 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-slate-600">
                        For sales inquiries, custom procurement, or general questions, our dedicated team is ready to assist you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Information & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <span className="text-indigo-600 bg-indigo-50 w-10 h-10 rounded text-xl flex items-center justify-center mb-4">📞</span>
                                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                <a href="tel:+971000000000" className="text-slate-600 hover:text-blue-600 text-lg">+971 00 000 0000</a>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <span className="text-emerald-600 bg-emerald-50 w-10 h-10 rounded text-xl flex items-center justify-center mb-4">✉️</span>
                                <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                <a href="mailto:info@alafiyamed.com" className="text-slate-600 hover:text-blue-600">info@alafiyamed.com</a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <span className="text-rose-600 bg-rose-50 w-10 h-10 rounded text-xl flex items-center justify-center mb-4">📍</span>
                                <h3 className="font-bold text-slate-900 mb-2">Headquarters</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Office 101, Medical Tower Building,<br />
                                    Dubai Healthcare City,<br />
                                    Dubai, United Arab Emirates
                                </p>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Working Hours</h4>
                                <p className="text-slate-600 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        {/* Embedded map placeholder */}
                        <div className="bg-slate-200 rounded-lg h-64 border border-slate-300 flex items-center justify-center text-slate-500 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Dubai,UAE&zoom=11&size=600x300&maptype=roadmap&sensor=false')] opacity-20 bg-cover bg-center"></div>
                            <span className="relative z-10 font-medium">Interactive Google Map Embed</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                    <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Company / Facility Name</label>
                                <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Medical Care LLC" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input type="email" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="jane@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+971 50 000 0000" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <select className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white">
                                    <option>General Inquiry</option>
                                    <option>Request a Quote</option>
                                    <option>Bulk Sourcing</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea rows={5} className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help you today?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors shadow-sm mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
