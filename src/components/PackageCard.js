"use client";

import Image from "next/image";

export default function PackageCard({ package: pkg }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

        {/* Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">📍 Destination:</span>
            <span className="font-semibold text-gray-800">{pkg.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">⏱️ Duration:</span>
            <span className="font-semibold text-gray-800">{pkg.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">👥 Group Size:</span>
            <span className="font-semibold text-gray-800">{pkg.groupSize}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">🗓️ Season:</span>
            <span className="font-semibold text-gray-800">{pkg.season}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {pkg.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-gray-600 text-xs">Starting from</p>
            <p className="text-2xl font-bold text-indigo-600">${pkg.price}</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
