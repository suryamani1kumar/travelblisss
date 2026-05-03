import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const PacakagesTheme = () => {
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
  return (
    <section className="relative py-10 px-6 bg-white">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-outfit">
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
                  <h3 className="text-white font-semibold text-xl mb-2 drop-shadow-md tracking-tight font-outfit">
                    {theme.name}
                  </h3>
                  <div className="w-12 h-1 bg-orange-500 mb-3 rounded-full shadow-lg" />
                   <p className="text-white/90 text-[10px] font-semibold uppercase tracking-[0.2em] bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
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
  );
};

export default PacakagesTheme;
