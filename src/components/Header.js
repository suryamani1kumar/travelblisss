"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">
            Travel Blisss
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-indigo-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/holiday-packages"
            className="text-gray-800 hover:text-indigo-600 font-medium transition-colors"
          >
            Packages
          </Link>
          <Link
            href="#about"
            className="text-gray-800 hover:text-indigo-600 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-gray-800 hover:text-indigo-600 font-medium transition-colors"
          >
            Contact
          </Link>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Book Now
          </button>
        </nav>

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
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Book Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
