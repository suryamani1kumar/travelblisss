"use client";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import PackageCard from "../components/PackageCard";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

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

  // Theme categories data
  const themeCategories = [
    {
      name: "Family",
      tours: 43,
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&h=200&fit=crop",
    },
    {
      name: "Honeymoon",
      tours: 33,
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=200&h=200&fit=crop",
    },
    {
      name: "Nature",
      tours: 9,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
    },
    {
      name: "Solo",
      tours: 32,
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=200&h=200&fit=crop",
    },

    {
      name: "Adventure",
      tours: 18,
      image:
        "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=200&h=200&fit=crop",
    },
    {
      name: "Wellness",
      tours: 7,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop",
    },
  ];
  const [themeStart, setThemeStart] = useState(0);
  const visibleThemes = themeCategories.slice(themeStart, themeStart + 5);
  const [pkgStart, setPkgStart] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero Section ── */}
      <HeroBanner />

      {/* ── Top Indian Cities Section ── */}
      <section className="bg-white pt-15 px-6">
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
                <span className="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-black px-2 py-1.5 rounded-lg z-10">
                  {city.tours} Packages
                </span>

                {/* Info Box (Floating at bottom) */}
                <div className="absolute bottom-2 left-2 right-2 bg-white rounded-2xl py-4 px-2 text-center shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-300">
                  <p className="font-black text-gray-700 text-md leading-tight mb-1">
                    {city.name}
                  </p>
                  <p className="text-[13px] text-gray-500">
                    Starting From @{" "}
                    <strong className="text-[16px] font-bolder text-orange-600 ml-1">
                      ₹{city.price}
                    </strong>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore Tour Packages by Theme ── */}
      <section className="relative pt-15 px-6 bg-white">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Explore Tour Packages by Theme
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
              Theme List
            </span>
            <div className="w-12 h-0.5 bg-orange-600 rounded-full" />
          </div>
          <div className="relative flex items-center mt-5">
            {/* Left arrow */}
            <button
              onClick={() => setThemeStart(Math.max(0, themeStart - 1))}
              disabled={themeStart === 0}
              className="cursor-pointer absolute -left-5 z-20 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-orange-700 disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft />
            </button>

            {/* Theme cards container */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {visibleThemes.map((theme) => (
                <Link
                  key={theme.name}
                  href={`/holiday-packages?theme=${theme.name}`}
                  className="group relative h-[180px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-white font-black text-2xl mb-2 drop-shadow-md tracking-tight">
                      {theme.name}
                    </h3>
                    <div className="w-12 h-1 bg-orange-500 mb-3 rounded-full shadow-lg" />
                    <p className="text-white/90 text-[10px] font-black uppercase tracking-[0.2em] bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                      {theme.tours} Packages
                    </p>
                  </div>
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
              className="cursor-pointer absolute -right-5 z-20 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl shadow-lg hover:bg-orange-700 disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Holiday Packages Section */}
      <section className="max-w-7xl mx-auto px-6 pt-15 pb-15 overflow-hidden bg-white">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
              Manali Most Popular Tours
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Destinations List
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
