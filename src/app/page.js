"use client";

import PackageCard from "../components/PackageCard";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // Featured packages
  const featuredPackages = [
    {
      id: 1,
      name: "Paradise Beach Escape",
      destination: "Maldives",
      description: "Relax on pristine beaches with crystal clear waters",
      duration: "7 Days / 6 Nights",
      groupSize: "2-6 people",
      season: "Year-round",
      price: 1299,
      emoji: "🏝️",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
      category: "beach",
    },
    {
      id: 2,
      name: "Mountain Adventure",
      destination: "Swiss Alps",
      description: "Conquer peaks and explore alpine villages",
      duration: "10 Days / 9 Nights",
      groupSize: "4-12 people",
      season: "Summer & Winter",
      price: 1899,
      emoji: "⛰️",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
      category: "adventure",
    },
    {
      id: 3,
      name: "Northern Lights Quest",
      destination: "Iceland",
      description: "Chase the magical Aurora Borealis in winter wonderland",
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      season: "September-March",
      price: 1399,
      emoji: "🌌",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=500&fit=crop",
      category: "adventure",
    },
  ];

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

  // Indian cities data
  const indianCities = [
    {
      name: "Amritsar",
      tours: "1+",
      price: "34,413",
      image:
        "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&h=500&fit=crop",
    },
    {
      name: "Nainital",
      tours: "1+",
      price: "34,151",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=500&fit=crop",
    },
    {
      name: "Udaipur",
      tours: "1+",
      price: "21,580",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=500&fit=crop",
    },
    {
      name: "Jaisalmer",
      tours: "2+",
      price: "28,002",
      image:
        "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=400&h=500&fit=crop",
    },
    {
      name: "Shimla",
      tours: "3+",
      price: "19,500",
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&h=500&fit=crop",
    },
    {
      name: "Goa",
      tours: "5+",
      price: "15,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=500&fit=crop",
    },
  ];
  const [cityStart, setCityStart] = useState(0);
  const visibleCities = indianCities.slice(cityStart, cityStart + 5);

  // Theme categories data
  const themeCategories = [
    {
      name: "Family",
      tours: 43,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#FFF5F2" />
          <path
            d="M42 22c-1.1 0-2.1.4-2.8 1.2C38.5 22.4 37.5 22 36.4 22c-1.8 0-3.3 1.2-3.8 2.8-.5-1.6-2-2.8-3.8-2.8-1.1 0-2.1.4-2.8 1.2C25.3 22.4 24.3 22 23.2 22c-2.4 0-4.4 2-4.4 4.4 0 4.6 7.6 9.6 7.6 9.6s7.6-5 7.6-9.6c0-2.4-2-4.4-4.4-4.4z"
            fill="#FF5722"
          />
          <path
            d="M32 48c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
            stroke="#333"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M24 40c0-4.4 3.6-8 8-8s8 3.6 8 8"
            stroke="#333"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="32" cy="38" r="3" fill="#333" />
        </svg>
      ),
    },
    {
      name: "Honeymoon",
      tours: 33,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#FFF5F2" />
          <path d="M20 40h24v4H20z" fill="#333" />
          <path d="M22 32h20v8H22z" fill="none" stroke="#333" strokeWidth="2" />
          <path
            d="M28 32V28c0-2.2 1.8-4 4-4s4 1.8 4 4v4"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />
          <path
            d="M32 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            fill="#FF5722"
          />
        </svg>
      ),
    },
    {
      name: "Nature",
      tours: 9,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#F2FFF5" />
          <path
            d="M32 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"
            fill="none"
            stroke="#2E7D32"
            strokeWidth="2"
          />
          <path
            d="M32 24c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"
            fill="#2E7D32"
            opacity="0.2"
          />
          <path d="M32 28l-2 4h4z" fill="#2E7D32" />
        </svg>
      ),
    },
    {
      name: "Solo",
      tours: 32,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#F2F5FF" />
          <circle cx="32" cy="24" r="4" fill="#333" />
          <path
            d="M24 44l4-12 4 4 4-4 4 12"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />
          <path d="M40 32l4 4" fill="none" stroke="#333" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Culture",
      tours: 1,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#FFFBF2" />
          <circle
            cx="32"
            cy="32"
            r="8"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />
          <path
            d="M32 20v4M32 40v4M20 32h4M40 32h4"
            stroke="#333"
            strokeWidth="2"
          />
          <path
            d="M24 24l2 2M38 38l2 2M24 40l2-2M38 26l2-2"
            stroke="#333"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      name: "Adventure",
      tours: 18,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#F2F2F2" />
          <path
            d="M20 44l12-24 12 24z"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />
          <path d="M26 32h12" stroke="#333" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Wellness",
      tours: 7,
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto">
          <circle cx="32" cy="32" r="30" fill="#FDF2FF" />
          <path
            d="M32 40c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
            fill="none"
            stroke="#9C27B0"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];
  const [themeStart, setThemeStart] = useState(0);
  const visibleThemes = themeCategories.slice(themeStart, themeStart + 5);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero Section ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a3d2b 0%, #0f2d1e 60%, #0a2016 100%)",
        }}
        className="relative overflow-hidden"
      >
        {/* subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-12">
          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>

          {/* ── RIGHT: Plan Your Trip Form ── */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-2xl p-7">
              <h2 className="text-lg text-center font-bold text-gray-800 mb-0.5">
                Plan Your Trip
              </h2>

              {submitted && (
                <div className="mb-4 px-4 py-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-700 text-sm font-medium">
                  ✅ Inquiry submitted! We'll respond within 2 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/*Travel Date + Duration + Travelers */}
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

                {/* Special Requests */}
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

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
                  style={{
                    background: "linear-gradient(90deg,#1a6b45,#28a05f)",
                  }}
                >
                  Submit Inquiry — Get Custom Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Tour Packages by Theme ── */}
      <section className="relative py-16 px-6 bg-white">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-black text-gray-900 mb-12">
            Explore Tour Packages by Theme
          </h2>

          <div className="relative flex items-center">
            {/* Left arrow */}
            <button
              onClick={() => setThemeStart(Math.max(0, themeStart - 1))}
              disabled={themeStart === 0}
              className="absolute -left-5 z-20 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-orange-700 disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300"
            >
              ‹
            </button>

            {/* Theme cards container */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {visibleThemes.map((theme) => (
                <Link
                  key={theme.name}
                  href={`/holiday-packages?theme=${theme.name}`}
                  className="group bg-white rounded-xl py-8 px-4 text-center shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {theme.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {theme.name}
                  </h3>
                  <div className="w-10 h-0.5 bg-orange-100 mx-auto mb-4" />
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">
                    {theme.tours} Tour Packages
                  </p>
                </Link>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() =>
                setThemeStart(
                  Math.min(themeCategories.length - 5, themeStart + 1),
                )
              }
              disabled={themeStart >= themeCategories.length - 5}
              className="absolute -right-5 z-20 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-orange-700 disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ── Top Indian Cities Section ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Top Indian Cities | Best Selling Vacation Deals
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                  Destinations List
                </span>
                <div className="w-12 h-0.5 bg-orange-600 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/holiday-packages"
                className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                View all <span className="text-lg">↗</span>
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setCityStart(Math.max(0, cityStart - 1))}
                  disabled={cityStart === 0}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xl text-gray-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setCityStart(
                      Math.min(indianCities.length - 5, cityStart + 1),
                    )
                  }
                  disabled={cityStart >= indianCities.length - 5}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xl text-gray-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {visibleCities.map((city) => (
              <Link
                key={city.name}
                href={`/holiday-packages?city=${city.name}`}
                className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={city.image}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase tracking-tighter z-10">
                  {city.tours} Tour
                </span>

                {/* Info Box (Floating at bottom) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl py-4 px-2 text-center shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-black text-gray-900 text-lg leading-tight mb-1">
                    {city.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    Starting @{" "}
                    <span className="text-orange-600 ml-1">₹{city.price}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Packages Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Holiday Packages
          </h2>
          <p className="text-lg text-gray-600">
            Explore our handpicked selection of amazing destinations
          </p>
        </div>

        {/* Featured Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/holiday-packages"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            Browse All Packages →
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Choose Travel Blisss?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Curated Experiences
              </h3>
              <p className="text-gray-600">
                Handpicked destinations and activities tailored for
                unforgettable moments
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Best Value
              </h3>
              <p className="text-gray-600">
                Competitive pricing with all-inclusive packages and hidden gem
                destinations
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                24/7 customer support and personalized travel planning
                assistance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Travel Blisss. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
