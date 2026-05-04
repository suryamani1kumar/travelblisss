"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { packages } from "@/data/packages";
import {
  Star,
  Phone,
  Clock,
  Hotel,
  Utensils,
  Compass,
  Car,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  MapPin,
  Users,
  Shield,
  Headphones,
  Award,
  Calendar,
  ArrowRight,
  Share2,
  Heart,
} from "lucide-react";
import PackageCard from "@/components/PackageCard";

export default function PackageDetails({ params }) {
  const { id } = use(params);
  const pkg = packages.find((p) => p.id === parseInt(id));

  const [activeImage, setActiveImage] = useState(0);
  const [openDay, setOpenDay] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 font-outfit mb-2">
            Package Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            This package doesn't exist or may have been removed.
          </p>
          <Link
            href="/holiday-packages"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
          >
            Browse All Packages
          </Link>
        </div>
      </div>
    );
  }

  const similarPackages = packages
    .filter(
      (p) =>
        p.id !== pkg.id && (p.theme === pkg.theme || p.country === pkg.country),
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
          <Link
            href="/holiday-packages"
            className="hover:text-orange-600 transition-colors"
          >
            Holiday Packages
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
          <span className="text-gray-800 font-medium truncate max-w-[240px]">
            {pkg.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Title Row ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full border border-orange-100">
                {pkg.theme}
              </span>
              <span className="bg-gray-50 text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-100 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {pkg.country}
              </span>
              <span className="bg-gray-50 text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-100 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {pkg.duration}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 font-outfit leading-tight mb-3">
              {pkg.name}
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${parseFloat(pkg.rating) >= s ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}`}
                  />
                ))}
                <span className="text-gray-800 font-semibold text-sm ml-1">
                  {pkg.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={pkg.gallery[activeImage]}
                  alt={`${pkg.name} - Photo ${activeImage + 1}`}
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Prev / Next */}
                <button
                  onClick={() =>
                    setActiveImage(
                      (p) => (p - 1 + pkg.gallery.length) % pkg.gallery.length,
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 text-gray-700" />
                </button>
                <button
                  onClick={() =>
                    setActiveImage((p) => (p + 1) % pkg.gallery.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {activeImage + 1} / {pkg.gallery.length}
                </div>
              </div>
              {/* Thumbnail Strip */}
              <div className="flex gap-2 p-3 overflow-x-auto scrollbar-none">
                {pkg.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all ${i === activeImage ? "ring-2 ring-orange-500 ring-offset-1" : "opacity-70 hover:opacity-100"}`}
                  >
                    <Image
                      src={img}
                      alt={`Thumb ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h2 className="text-base font-semibold text-gray-900 font-outfit mb-3">
                Overview
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {pkg.description}
              </p>
              {/* Highlight Pills */}
              <div className="flex flex-wrap gap-2">
                {pkg.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1.5 rounded-full border border-orange-100"
                  >
                    <Check className="w-3 h-3" /> {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Destinations Route */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h2 className="text-base font-semibold text-gray-900 font-outfit mb-4">
                Destinations Covered
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                {pkg.destinations.map((dest, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-sm font-medium text-gray-800">
                        {dest}
                      </span>
                    </div>
                    {i < pkg.destinations.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Inclusions grid */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Hotel className="w-4 h-4 text-gray-500" />
                </div>
                <h2 className="text-base font-semibold text-gray-900 font-outfit">
                  What's Included
                </h2>
              </div>
              <p className="text-xs text-gray-400 mb-5">
                Everything you need for a hassle-free holiday
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Included
                  </h3>
                  <div className="space-y-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-500" />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <X className="w-4 h-4" /> Excluded
                  </h3>
                  <div className="space-y-2.5">
                    {pkg.exclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-red-400" />
                        </div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <h2 className="text-base font-semibold text-gray-900 font-outfit mb-2">
                Day-by-Day Itinerary
              </h2>
              <p className="text-xs text-gray-400 mb-6">
                Your journey, planned in detail
              </p>
              <div className="space-y-3">
                {pkg.detailedItinerary.map((day, i) => {
                  const isOpen = openDay === day.day;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border transition-all duration-200 ${isOpen ? "border-orange-200 bg-orange-50/40" : "border-gray-100 bg-gray-50/50 hover:border-gray-200"}`}
                    >
                      <button
                        className="w-full flex items-center gap-4 px-4 py-4 text-left"
                        onClick={() => setOpenDay(isOpen ? null : day.day)}
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 transition-colors ${isOpen ? "bg-orange-500 text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                        >
                          {day.day}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                            Day {day.day}
                          </span>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {day.place}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:flex items-center gap-1 text-xs text-gray-400 bg-white border border-gray-100 px-2 py-1 rounded-full">
                            <Utensils className="w-3 h-3" /> {day.meals}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-orange-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pl-[3.75rem]">
                          <div className="space-y-2 mb-3">
                            {day.activities.map((act, ai) => (
                              <div key={ai} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                                <p className="text-xs text-gray-600">{act}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-3 pt-3 border-t border-orange-100">
                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                              <Hotel className="w-3.5 h-3.5 text-orange-400" />{" "}
                              {day.stay}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                              <Utensils className="w-3.5 h-3.5 text-orange-400" />{" "}
                              {day.meals}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Sticky Booking Sidebar ── */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-24">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-400 text-sm line-through">
                    INR {pkg.originalPrice}
                  </span>
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2 py-0.5 rounded uppercase border border-emerald-100">
                    SAVE {pkg.savings}
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl font-semibold text-gray-900 font-outfit">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm">/Adult</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  *Taxes and fees included. No hidden charges.
                </p>

                {/* Enquiry Form */}
                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-sm font-semibold text-emerald-700">
                      Query Submitted!
                    </p>
                    <p className="text-xs text-emerald-600 mt-0.5">
                      We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 mb-4">
                    <div>
                      <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        placeholder="Your name"
                        required
                        className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-100 transition-all placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-100 transition-all placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-100 transition-all placeholder-gray-300"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                          Travelers
                        </label>
                        <input
                          type="number"
                          name="travelers"
                          value={form.travelers}
                          onChange={handleFormChange}
                          placeholder="e.g. 2"
                          min="1"
                          className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-100 transition-all placeholder-gray-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                        Special Requests
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleFormChange}
                        placeholder="Any preferences or special requirements..."
                        rows={2}
                        className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-100 transition-all placeholder-gray-300 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-orange-100 transition-all font-outfit flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Send Enquiry
                    </button>
                  </form>
                )}
                <button className="w-full py-2.5 border-2 border-orange-100 hover:border-orange-300 text-orange-600 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 fill-current" />
                  Request Callback
                </button>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Why Book With Us
                </p>
                <div className="space-y-3.5">
                  {[
                    {
                      icon: Award,
                      label: "Best Price Guarantee",
                      sub: "We match any lower price",
                    },
                    {
                      icon: Headphones,
                      label: "24/7 Travel Support",
                      sub: "We're always here to help",
                    },
                  ].map(({ icon: Icon, label, sub }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">
                          {label}
                        </p>
                        <p className="text-xs text-gray-400">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Similar Packages ── */}
        {similarPackages.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 font-outfit">
                Similar Packages
              </h2>
              <Link
                href="/holiday-packages"
                className="text-orange-600 text-sm font-semibold hover:underline flex items-center gap-1"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarPackages.map((p) => (
                <Link key={p.id} href={`/holiday-packages/${p.id}`}>
                  <PackageCard package={p} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile Sticky Footer Bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl px-4 py-3 z-50 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-gray-400">Starting from</p>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-gray-900 font-outfit">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-gray-400 text-xs">/Adult</span>
          </div>
        </div>
        <div className="flex gap-2 flex-1 max-w-[260px]">
          <button className="w-11 h-11 flex-shrink-0 flex items-center justify-center border-2 border-orange-100 rounded-xl text-orange-600 hover:bg-orange-50 transition-colors">
            <Phone className="w-5 h-5 fill-current" />
          </button>
          <button className="flex-1 bg-orange-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
      <div className="lg:hidden h-20" />
    </div>
  );
}
