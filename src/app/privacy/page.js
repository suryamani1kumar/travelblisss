"use client";

import { Shield, Lock, Eye, FileText, Globe, Server } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "May 2, 2026";

  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-orange-600" />,
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, such as when you create an account, make a booking, or contact our support team. This may include your name, email address, phone number, payment information, and travel preferences."
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to process your travel bookings, to communicate with you about your account or bookings, and to send you promotional communications (if you've opted in)."
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-600" />,
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use state-of-the-art encryption technology."
    },
    {
      icon: <Server className="w-6 h-6 text-orange-600" />,
      title: "Cookies & Tracking",
      content: "We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-orange-50 text-orange-600 rounded-2xl mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 font-outfit">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3 font-outfit">
                  <FileText className="w-7 h-7 text-orange-600" />
                  Introduction
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to Travel Blisss. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 font-outfit">{section.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h2 className="text-xl font-semibold text-slate-900 mb-6 font-outfit">Your Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  You have the right to request access to your personal data, request correction of your personal data, request erasure of your personal data, object to processing of your personal data, and request restriction of processing your personal data.
                </p>
                <div className="bg-orange-50 p-8 rounded-2xl">
                  <h4 className="font-semibold text-orange-900 mb-2 font-outfit">Contact Us About Privacy</h4>
                  <p className="text-orange-700 text-sm leading-relaxed mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please contact our data protection officer at:
                  </p>
                  <a href="mailto:privacy@travelblisss.com" className="text-orange-600 font-semibold hover:underline font-outfit">privacy@travelblisss.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
