"use client";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import PackageCard from "../components/PackageCard";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import CallBanner from "../components/CallBanner";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import PacakagesTheme from "@/components/pacakgestheme/PacakagesTheme";

export default function Home() {
  // Featured packages
  const featuredPackages = [
    {
      id: 1,
      name: "Manali Kasol Escape | Temples, Valleys & Starlit Nights",
      destination: "Manali",
      duration: "6 days & 5 nights",
      rating: "4.6",
      reviews: "168",
      price: 22500,
      originalPrice: "29,695",
      savings: "7,195",
      itinerary: [
        { days: "1D", place: "Delhi" },
        { days: "2D", place: "Manali" },
        { days: "2D", place: "Kasol" },
        { days: "1D", place: "Delhi" },
      ],
      extraPlaces: 1,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Mystical Manali With Trip To Solang Valley",
      destination: "Manali",
      duration: "4 days & 3 nights",
      rating: "5.0",
      reviews: "48",
      price: 11625,
      originalPrice: "17,520",
      savings: "5,895",
      itinerary: [
        { days: "1D", place: "Delhi" },
        { days: "4D", place: "Manali" },
      ],
      extraPlaces: 1,
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Manali Leh Srinagar Bike Adventure",
      destination: "Leh Ladakh",
      duration: "12 days & 11 nights",
      rating: "4.5",
      reviews: "1.1K",
      price: 39800,
      originalPrice: "47,928",
      savings: "8,128",
      itinerary: [
        { days: "1D", place: "Delhi" },
        { days: "1D", place: "Manali" },
        { days: "1D", place: "Jispa" },
        { days: "1D", place: "Sarchu" },
        { days: "2D", place: "Leh" },
      ],
      extraPlaces: 6,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Spiti Valley Road Trip | The Middle Land Adventure",
      destination: "Spiti Valley",
      duration: "9 days & 8 nights",
      rating: "4.9",
      reviews: "82",
      price: 28500,
      originalPrice: "35,000",
      savings: "6,500",
      itinerary: [
        { days: "1D", place: "Manali" },
        { days: "2D", place: "Kaza" },
        { days: "2D", place: "Tabo" },
        { days: "1D", place: "Chandratal" },
      ],
      extraPlaces: 3,
      image:
        "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Spiti Valley Road Trip | The Middle Land Adventure",
      destination: "Spiti Valley",
      duration: "9 days & 8 nights",
      rating: "4.9",
      reviews: "82",
      price: 28500,
      originalPrice: "35,000",
      savings: "6,500",
      itinerary: [
        { days: "1D", place: "Manali" },
        { days: "2D", place: "Kaza" },
        { days: "2D", place: "Tabo" },
        { days: "1D", place: "Chandratal" },
      ],
      extraPlaces: 3,
      image:
        "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Spiti Valley Road Trip | The Middle Land Adventure",
      destination: "Spiti Valley",
      duration: "9 days & 8 nights",
      rating: "4.9",
      reviews: "82",
      price: 28500,
      originalPrice: "35,000",
      savings: "6,500",
      itinerary: [
        { days: "1D", place: "Manali" },
        { days: "2D", place: "Kaza" },
        { days: "2D", place: "Tabo" },
        { days: "1D", place: "Chandratal" },
      ],
      extraPlaces: 3,
      image:
        "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=600&h=400&fit=crop",
    },
  ];

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

  const [pkgStart, setPkgStart] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero Section ── */}
      <HeroBanner />

      {/* ── Top Indian Cities Section ── */}
      <section className="bg-white pt-15 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-outfit">
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
              <div className="flex gap-2">
                <button
                  onClick={() => setCityStart(Math.max(0, cityStart - 1))}
                  disabled={cityStart === 0}
                  className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xl text-gray-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() =>
                    setCityStart(
                      Math.min(indianCities.length - 5, cityStart + 1),
                    )
                  }
                  disabled={cityStart >= indianCities.length - 5}
                  className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xl text-gray-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight />
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
                className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
                <span className="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-semibold px-2 py-1.5 rounded-lg z-10">
                  {city.tours} Packages
                </span>

                {/* Info Box (Floating at bottom) */}
                <div className="absolute bottom-2 left-2 right-2 bg-white rounded-2xl py-4 px-2 text-center shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="font-semibold text-gray-700 text-md leading-tight mb-1 font-outfit">
                    {city.name}
                  </p>
                  <p className="text-[13px] text-gray-500">
                    Starting From @{" "}
                    <strong className="text-[16px] font-semibold text-orange-600 ml-1">
                      ₹{city.price}
                    </strong>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CallBanner />

      {/* ── Explore Tour Packages by Theme ── */}
      <PacakagesTheme />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Holiday Packages Section */}
      <section className="max-w-7xl mx-auto px-6  py-10 overflow-hidden bg-white">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-2 font-outfit">
              Most Popular Tours
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Tours List
              </span>
              <div className="w-12 h-0.5 bg-orange-600 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setPkgStart(Math.max(0, pkgStart - 1))}
                disabled={pkgStart === 0}
                className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setPkgStart(
                    Math.min(featuredPackages.length - 3, pkgStart + 1),
                  )
                }
                disabled={pkgStart >= featuredPackages.length - 3}
                className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Packages Grid (Carousel) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-500 ease-in-out">
            {featuredPackages.slice(pkgStart, pkgStart + 3).map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
