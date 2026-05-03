"use client";

import Image from "next/image";
import { Star, Phone, ChevronRight } from "lucide-react";

export default function PackageCard({ package: pkg }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-[240px] w-full rounded-2xl overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((dot, i) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-4 px-4 pb-4">
        {/* Duration and Rating */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-[12px] font-medium">
            {pkg.duration}
          </span>
          <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm">
            <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span className="text-gray-800 font-bold text-[12px]">
              {pkg.rating || "4.6"}
            </span>
            <span className="text-gray-400 text-[11px]">
              ({pkg.reviews || "168"})
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 leading-tight mb-3 line-clamp-2 min-h-[2.5rem] font-outfit">
          {pkg.name}
        </h3>

        {/* Itinerary / Highlights */}
        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 mb-4 overflow-hidden whitespace-nowrap">
          {pkg.itinerary ? (
            pkg.itinerary.map((item, index) => (
              <span key={index} className="flex items-center gap-1">
                {index > 0 && <span>•</span>}
                <span className="text-gray-800">{item.days}</span> {item.place}
              </span>
            ))
          ) : (
            <span className="text-gray-400">View detailed itinerary</span>
          )}
          {pkg.extraPlaces && (
            <span className="text-orange-600 ml-auto">+{pkg.extraPlaces}</span>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-gray-400 text-[12px] line-through">
              INR {pkg.originalPrice || "29,695"}
            </span>
            <span className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-100 uppercase">
              SAVE INR {pkg.savings || "7,195"}
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-gray-900 font-outfit">
              INR {pkg.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-[12px]">/Adult</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-orange-100 rounded-xl text-orange-600 hover:bg-orange-50 transition-colors">
            <Phone className="w-5 h-5 fill-current" />
          </button>
          <button className="flex-1 bg-[#ff7000] hover:bg-[#e66500] text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-orange-100">
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
}
