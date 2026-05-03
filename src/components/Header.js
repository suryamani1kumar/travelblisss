"use client";

import Link from "next/link";
import { useState } from "react";
import { PhoneCall } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-gray-800 font-outfit tracking-tight">Travel Blisss</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="tel:+18446354010"
            className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition-all flex items-center gap-3 shadow-lg`}
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call at +1-844-635-4010</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span
            className={`h-0.5 w-6 bg-gray-800 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-800 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-800 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/holiday-packages"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600 font-medium transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
