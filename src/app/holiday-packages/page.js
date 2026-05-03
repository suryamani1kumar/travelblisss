"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Star,
  Phone,
  X,
  Search,
  Clock,
  Hotel,
  Utensils,
  Compass,
  Car,
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

// Reuse the card design but in a list format
const PackageListCard = ({ pkg }) => {
  const inclusions = [
    { icon: Hotel, label: "Hotels" },
    { icon: Utensils, label: "Meals" },
    { icon: Compass, label: "Activity" },
    { icon: Car, label: "Transfer" },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 p-4 mb-6 group">
      {/* Image Container */}
      <div className="relative w-full md:w-72 h-56 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
          <span className="text-gray-800 font-semibold text-xs font-outfit">
            {pkg.rating}
          </span>
          <span className="text-gray-400 text-[10px]">({pkg.reviews})</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <div className="flex justify-between items-start mb-1">
            <span className="text-[11px] tracking-widest text-gray-500 font-medium">
              {pkg.theme} • {pkg.country}
            </span>
            <span className="text-gray-500 text-xs font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {pkg.duration}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">
            {pkg.name}
          </h3>

          {/* Itinerary Text */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-2 mb-2">
            {pkg.itinerary &&
              pkg.itinerary.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-900 font-bold text-xs">
                      {item.days}
                    </span>
                    <span className="text-gray-600 text-xs font-medium">
                      {item.place}
                    </span>
                  </div>
                  {idx < pkg.itinerary.length - 1 && (
                    <span className="text-gray-300 text-xs">→</span>
                  )}
                </React.Fragment>
              ))}
          </div>

          {/* Inclusions Icons */}
          <div className="flex gap-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-100">
                  <item.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-medium text-gray-400 uppercase tracking-tighter">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-gray-50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-400 text-xs line-through">
                INR {pkg.originalPrice}
              </span>
              <span className="bg-emerald-50 text-emerald-600 text-[9px] font-semibold px-2 py-0.5 rounded uppercase">
                Save INR {pkg.savings}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold text-gray-900 font-outfit">
                INR {pkg.price.toLocaleString()}
              </span>
              <span className="text-gray-500 text-xs font-medium">/Adult</span>
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button className="w-10 h-10 flex items-center justify-center border-2 border-orange-100 rounded-xl text-orange-600 hover:bg-orange-50 transition-colors">
              <Phone className="w-5 h-5 fill-current" />
            </button>
            <button className="flex-1 sm:px-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-orange-100 font-outfit">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HolidayPackages() {
  const [activeFilters, setActiveFilters] = useState({
    price: 50000,
    durations: [],
    countries: [],
    themes: [],
    cities: [],
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: "Manali Kasol Escape | Temples, Valleys & Starlit Nights",
      country: "India",
      city: "Manali",
      theme: "Adventure",
      duration: "6D & 5N",
      durationDays: 6,
      rating: "4.6",
      reviews: "168",
      price: 22500,
      originalPrice: "29,695",
      savings: "7,195",
      itinerary: [
        { days: "1D", place: "Delhi" },
        { days: "2D", place: "Manali" },
        { days: "2D", place: "Kasol" },
      ],
      extraPlaces: 1,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Mystical Manali With Trip To Solang Valley",
      country: "India",
      city: "Manali",
      theme: "Family",
      duration: "4D & 3N",
      durationDays: 4,
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
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      name: "Maldives Luxury Overwater Villa Escape",
      country: "Maldives",
      city: "Male",
      theme: "Honeymoon",
      duration: "5D & 4N",
      durationDays: 5,
      rating: "4.9",
      reviews: "320",
      price: 45000,
      originalPrice: "55,000",
      savings: "10,000",
      itinerary: [
        { days: "1D", place: "Male" },
        { days: "4D", place: "Resort" },
      ],

      extraPlaces: 0,
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      name: "Swiss Alps Adventure: Jungfraujoch & Mt. Titlis",
      country: "Switzerland",
      city: "Lucerne",
      theme: "Adventure",
      duration: "7D & 6N",
      durationDays: 7,
      rating: "4.8",
      reviews: "95",
      price: 38900,
      originalPrice: "48,000",
      savings: "9,100",
      itinerary: [
        { days: "2D", place: "Zurich" },
        { days: "3D", place: "Lucerne" },
        { days: "2D", place: "Interlaken" },
      ],
      extraPlaces: 2,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      name: "Dubai Skyline & Desert Safari Highlights",
      country: "UAE",
      city: "Dubai",
      theme: "Solo",
      duration: "5D & 4N",
      durationDays: 5,
      rating: "4.7",
      reviews: "1.2K",
      price: 29999,
      originalPrice: "38,500",
      savings: "8,501",
      itinerary: [
        { days: "2D", place: "Downtown" },
        { days: "1D", place: "Desert" },
        { days: "2D", place: "Marina" },
      ],
      extraPlaces: 3,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    },
  ];

  const filterOptions = {
    durations: ["1-3 Days", "4-6 Days", "7+ Days"],
    countries: ["India", "Maldives", "Switzerland", "UAE", "Thailand"],
    themes: ["Adventure", "Honeymoon", "Family", "Solo", "Culture"],
    cities: ["Manali", "Male", "Lucerne", "Dubai", "Bangkok"],
  };

  const handleFilterChange = (type, value) => {
    setActiveFilters((prev) => {
      const current = prev[type];
      if (type === "price") return { ...prev, price: value };
      const next = current.includes(value)
        ? current.filter((i) => i !== value)
        : [...current, value];
      return { ...prev, [type]: next };
    });
  };

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesPrice = pkg.price <= activeFilters.price;
      const matchesCountry =
        activeFilters.countries.length === 0 ||
        activeFilters.countries.includes(pkg.country);
      const matchesTheme =
        activeFilters.themes.length === 0 ||
        activeFilters.themes.includes(pkg.theme);
      const matchesCity =
        activeFilters.cities.length === 0 ||
        activeFilters.cities.includes(pkg.city);

      let matchesDuration = true;
      if (activeFilters.durations.length > 0) {
        matchesDuration = activeFilters.durations.some((d) => {
          if (d === "1-3 Days")
            return pkg.durationDays >= 1 && pkg.durationDays <= 3;
          if (d === "4-6 Days")
            return pkg.durationDays >= 4 && pkg.durationDays <= 6;
          if (d === "7+ Days") return pkg.durationDays >= 7;
          return false;
        });
      }

      return (
        matchesPrice &&
        matchesCountry &&
        matchesTheme &&
        matchesCity &&
        matchesDuration
      );
    });
  }, [activeFilters]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── Hero Section ── */}
      <HeroBanner />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-8">
          {/* ── Sidebar Filters (Desktop) ── */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-8">
              {/* Price Filter */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 font-outfit mb-4">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={activeFilters.price}
                  onChange={(e) => handleFilterChange("price", e.target.value)}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between mt-2 text-xs font-semibold text-gray-500">
                  <span>₹5,000</span>
                  <span className="text-orange-600">
                    Up to ₹{activeFilters.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Filter Sections */}
              {[
                { title: "Durations", key: "durations" },
                { title: "Country", key: "countries" },
                { title: "Cities", key: "cities" },
                { title: "Themes", key: "themes" },
              ].map((section) => (
                <div
                  key={section.key}
                  className="border-t border-gray-100 pt-6"
                >
                  <h4 className="text-sm font-semibold text-gray-900 font-outfit mb-4">
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {filterOptions[section.key].map((option) => (
                      <label
                        key={option}
                        className="flex items-center group cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={activeFilters[section.key].includes(
                              option,
                            )}
                            onChange={() =>
                              handleFilterChange(section.key, option)
                            }
                            className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-orange-600 checked:border-orange-600 transition-all"
                          />
                          <X className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 left-0.5 pointer-events-none" />
                        </div>
                        <span className="ml-3 text-sm font-semibold text-gray-600 group-hover:text-orange-600 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* ── Main Content Area (Right) ── */}
          <main className="flex-1">
            {filteredPackages.length > 0 ? (
              <div className="flex flex-col">
                {filteredPackages.map((pkg) => (
                  <PackageListCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-500 mb-8">
                  Try adjusting your filters to find the perfect holiday.
                </p>
                <button
                  onClick={() =>
                    setActiveFilters({
                      price: 100000,
                      durations: [],
                      countries: [],
                      themes: [],
                      cities: [],
                    })
                  }
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ── Mobile Filter Drawer ── */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="relative w-80 bg-white h-full overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* ... same filter content as desktop ... */}
            <div className="space-y-8">
              {/* Just copy the same logic but for mobile */}
              {/* [Price, Durations, Countries, etc.] */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 font-outfit mb-4">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={activeFilters.price}
                  onChange={(e) => handleFilterChange("price", e.target.value)}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between mt-2 text-xs font-semibold text-gray-500">
                  <span>₹5,000</span>
                  <span className="text-orange-600">
                    Up to ₹{activeFilters.price.toLocaleString()}
                  </span>
                </div>
              </div>
              {[
                { title: "Durations", key: "durations" },
                { title: "Country", key: "countries" },
                { title: "Cities", key: "cities" },
                { title: "Themes", key: "themes" },
              ].map((section) => (
                <div
                  key={section.key}
                  className="border-t border-gray-100 pt-6"
                >
                  <h4 className="text-sm font-semibold text-gray-900 font-outfit mb-4">
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {filterOptions[section.key].map((option) => (
                      <label
                        key={option}
                        className="flex items-center group cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={activeFilters[section.key].includes(
                              option,
                            )}
                            onChange={() =>
                              handleFilterChange(section.key, option)
                            }
                            className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-orange-600 checked:border-orange-600 transition-all"
                          />
                          <X className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 left-0.5 pointer-events-none" />
                        </div>
                        <span className="ml-3 text-sm font-semibold text-gray-600 group-hover:text-orange-600 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full mt-10 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-100"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
