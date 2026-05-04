"use client";

import { FileText, CheckCircle2, AlertCircle, Scale, CreditCard, HelpCircle } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "May 2, 2026";

  const terms = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-orange-600" />,
      title: "Acceptance of Terms",
      content: "By accessing and using Travel Blisss, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
      title: "Payment & Bookings",
      content: "All bookings are subject to availability and confirmation. Payments must be made in full at the time of booking unless otherwise specified in your itinerary."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-orange-600" />,
      title: "Cancellation Policy",
      content: "Cancellations are subject to the specific terms of the travel service providers. A service fee may apply to any cancellations or changes made to your booking."
    },
    {
      icon: <Scale className="w-6 h-6 text-orange-600" />,
      title: "User Responsibilities",
      content: "You are responsible for ensuring that all travel documents (passports, visas, etc.) are valid and in order for your destination."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Scale className="w-64 h-64 text-white" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 font-outfit">Terms of Service</h1>
          <p className="text-slate-400 font-medium">Please read these terms carefully before using our services.</p>
          <div className="mt-8 inline-block px-4 py-2 bg-white/10 rounded-full text-slate-300 text-sm">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <h2 className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3 font-outfit">
                <FileText className="w-7 h-7 text-orange-600" />
                Standard Terms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {terms.map((term, index) => (
                  <div key={index} className="space-y-4">
                    <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center">
                      {term.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 font-outfit">{term.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <h2 className="text-xl font-semibold text-slate-900 mb-6 font-outfit">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Travel Blisss acts as an agent for third-party travel providers. We are not liable for any injury, loss, claim, damage, or any special, exemplary, punitive, indirect, incidental or consequential damages of any kind which arises out of or is in any way connected with the performance of travel service providers.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 flex gap-4 items-start">
                <div className="text-amber-600 mt-1">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <p className="text-slate-500 text-sm italic">
                  Note: Some jurisdictions do not allow the limitation of liability, so the above limitations may not apply to you.
                </p>
              </div>
            </div>

            <div className="bg-orange-600 rounded-3xl p-10 md:p-12 text-white text-center">
              <HelpCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-outfit">Have questions about our terms?</h2>
              <p className="text-orange-100 mb-8 max-w-xl mx-auto">
                If you need clarification on any part of these terms, please don't hesitate to reach out to our legal department.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-100 transition-all shadow-xl font-outfit"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
