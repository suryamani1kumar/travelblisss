"use client";

import { PhoneCall } from "lucide-react";

export default function CallBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-slate-900 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
        {/* Left Side: Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
          <img
            src="/images/consultant.png"
            alt="Expert"
            className="w-full h-full object-cover rounded-full border-4 border-white/10"
          />
        </div>

        {/* Center: Content */}
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 font-outfit">
            Get Guidance from Travel Professionals
          </h2>
          <p className="text-slate-400 text-lg">
            Get customized travel suggestions and access special offers from our
            certified consultants.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0">
          <a
            href="tel:+918700461925"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold py-4 px-8 rounded-xl transition-all flex items-center gap-3 shadow-lg"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call at +91 87004 61925</span>
          </a>
        </div>
      </div>
    </section>
  );
}
