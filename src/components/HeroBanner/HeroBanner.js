"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroBanner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    duration: "",
    travelers: "",
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <section className="relative overflow-hidden min-h-[300px] flex items-center py-2 md:py-4">
      <Image
        src="/images/hero-bg.png"
        alt="Hero Banner Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-2 flex flex-col lg:flex-row items-center gap-8">
        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 font-outfit tracking-tight">
            Discover Your Next <br />
            <span className="text-orange-400">Dream Destination</span>
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed max-w-xl mb-8">
            Experience the world like never before with our curated travel packages. From serene mountains to vibrant cityscapes, we bring you the best of travel bliss.
          </p>
        </div>

        {/* ── RIGHT: Plan Your Trip Form ── */}
        <div className="w-full lg:w-[420px] flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-2xl p-4">
            <h2 className="text-lg text-center font-bold text-gray-800 mb-0.5">
              Plan Your Trip
            </h2>

            {submitted && (
              <div className="mb-4 px-4 py-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-700 text-sm font-medium">
                ✅ Inquiry submitted! We'll respond within 2 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 w-20 flex-shrink-0">
                    <span>🇺🇸</span>
                    <span className="text-xs">+1</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Travel Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-2 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Duration (Nights)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g. 7"
                    min="1"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Travelers
                  </label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    min="1"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Special requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Private tea ceremony, Michelin-star restaurants…"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(255 74 0), rgb(255 153 0))",
                }}
              >
                Submit Inquiry — Get Custom Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
