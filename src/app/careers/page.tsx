import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description: "Build a rewarding career at Al Afiya Medical Supplies. We are always looking for driven, passionate individuals.",
};

export default function CareersPage() {
    const jobs = [
        { title: "Medical Sales Executive", location: "Dubai, UAE", type: "Full-Time" },
        { title: "Logistics Coordinator", location: "Sharjah, UAE", type: "Full-Time" },
        { title: "Biomedical Engineer (Support)", location: "Riyadh, KSA", type: "Full-Time" }
    ];

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Join Our Team</h1>
                    <p className="text-lg text-slate-600">
                        Build a rewarding career at Al Afiya Medical Supplies. We are always looking for driven, passionate individuals to help us elevate healthcare standards in the Middle East.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    {/* Vacancies List */}
                    <div className="md:col-span-7">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h2>
                        <div className="space-y-4">
                            {jobs.map((job, idx) => (
                                <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                                        <p className="text-slate-500 text-sm mt-1">📍 {job.location} • 🕒 {job.type}</p>
                                    </div>
                                    <button className="mt-4 sm:mt-0 text-blue-600 font-medium hover:text-blue-800">
                                        Apply Now →
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100 flex items-center">
                            <span className="text-3xl mr-4">📞</span>
                            <div>
                                <h3 className="font-bold text-slate-900">HR Inquiries</h3>
                                <p className="text-slate-600">Contact our Human Resources department: <a href="mailto:hr@alafiyamed.com" className="text-blue-600 hover:underline">hr@alafiyamed.com</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Submission Form */}
                    <div className="md:col-span-5 bg-white border border-slate-200 shadow-sm rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Submit Your CV</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Position of Interest</label>
                                <select className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700">
                                    <option>General Application</option>
                                    <option>Sales & Marketing</option>
                                    <option>Logistics & Supply Chain</option>
                                    <option>Engineering & Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Upload Resume (PDF only)</label>
                                <input type="file" accept=".pdf" className="w-full border border-slate-300 rounded-md px-4 py-1.5 focus:ring-blue-500 focus:border-blue-500 text-sm" />
                            </div>
                            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors shadow-sm mt-4">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
