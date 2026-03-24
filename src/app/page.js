"use client";

import PackageCard from "../components/PackageCard";
import Link from "next/link";

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
  ];

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
            Travel Blisss
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Discover extraordinary destinations and create unforgettable memories
          </p>
        </div>
      </div>

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
                Handpicked destinations and activities tailored for unforgettable moments
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Best Value
              </h3>
              <p className="text-gray-600">
                Competitive pricing with all-inclusive packages and hidden gem destinations
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                24/7 customer support and personalized travel planning assistance
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
