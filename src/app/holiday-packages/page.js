"use client";

import PackageCard from "../../components/PackageCard";
import { useState } from "react";

export default function HolidayPackages() {
  const [filter, setFilter] = useState("all");

  const packages = [
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
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
      highlights: [
        "Luxury overwater bungalows",
        "Snorkeling & dive trips",
        "Sunset catamaran cruise",
        "Spa treatments included",
      ],
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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
      highlights: [
        "Guided hiking tours",
        "Cable car rides",
        "Mountain hut stays",
        "Training included",
      ],
      category: "adventure",
    },
    {
      id: 3,
      name: "Cultural City Tour",
      destination: "Italy",
      description: "Immerse in art, culture, and authentic cuisine",
      duration: "8 Days / 7 Nights",
      groupSize: "2-8 people",
      season: "Spring & Fall",
      price: 1549,
      emoji: "🎨",
      image: "https://images.unsplash.com/photo-1552832860-dac89ebbc641?w=500&h=500&fit=crop",
      highlights: [
        "Museum tours with experts",
        "Cooking classes",
        "Wine tasting",
        "Historical site visits",
      ],
      category: "culture",
    },
    {
      id: 4,
      name: "Safari Wildlife Experience",
      destination: "Kenya",
      description: "Witness the Great Migration and wildlife in their natural habitat",
      duration: "9 Days / 8 Nights",
      groupSize: "4-10 people",
      season: "June-October",
      price: 1799,
      emoji: "🦁",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=500&fit=crop",
      highlights: [
        "Game drives with experts",
        "Big Five sightings",
        "Luxury tented camps",
        "Photography tours",
      ],
      category: "adventure",
    },
    {
      id: 5,
      name: "Tropical Jungle Trek",
      destination: "Costa Rica",
      description: "Explore lush rainforests and discover exotic wildlife",
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 people",
      season: "December-April",
      price: 999,
      emoji: "🌴",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=500&fit=crop",
      highlights: [
        "Zip-lining through canopy",
        "Waterfall hikes",
        "Wildlife spotting tours",
        "Local village visit",
      ],
      category: "adventure",
    },
    {
      id: 6,
      name: "Northern Lights Quest",
      destination: "Iceland",
      description: "Chase the magical Aurora Borealis in winter wonderland",
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      season: "September-March",
      price: 1399,
      emoji: "🌌",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=500&fit=crop",
      highlights: [
        "Aurora photography",
        "Geothermal hot springs",
        "Ice cave exploration",
        "Local guide included",
      ],
      category: "adventure",
    },
    {
      id: 7,
      name: "Tropical Island Paradise",
      destination: "Bali",
      description: "Experience temple culture and pristine beaches",
      duration: "7 Days / 6 Nights",
      groupSize: "2-8 people",
      season: "Year-round",
      price: 899,
      emoji: "🛕",
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=500&fit=crop",
      highlights: [
        "Temple tours",
        "Beach club experiences",
        "Traditional massage",
        "Surfing lessons",
      ],
      category: "beach",
    },
    {
      id: 8,
      name: "Luxury Cruise Adventure",
      destination: "Mediterranean",
      description: "Sail through Europe's most beautiful coastlines",
      duration: "12 Days / 11 Nights",
      groupSize: "2-unlimited",
      season: "May-September",
      price: 2499,
      emoji: "🚢",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop",
      highlights: [
        "5-star cruise ship",
        "Port-of-call tours",
        "Fine dining",
        "Entertainment shows",
      ],
      category: "beach",
    },
  ];

  const filteredPackages =
    filter === "all" ? packages : packages.filter((pkg) => pkg.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative px-6 text-white bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop')",
          minHeight: '50vh',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Holiday Packages
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Discover unforgettable destinations and create lasting memories
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
              filter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-600"
            }`}
          >
            All Packages
          </button>
          <button
            onClick={() => setFilter("beach")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
              filter === "beach"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-600"
            }`}
          >
            Beach
          </button>
          <button
            onClick={() => setFilter("adventure")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
              filter === "adventure"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-600"
            }`}
          >
            Adventure
          </button>
          <button
            onClick={() => setFilter("culture")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
              filter === "culture"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-600"
            }`}
          >
            Culture
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* No results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl">
              No packages found for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div 
        className="relative py-16 px-6 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=400&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-2xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't find your dream destination?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            We offer customized holiday packages tailored to your preferences
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors duration-200">
            Create Custom Package
          </button>
        </div>
      </div>
    </div>
  );
}
