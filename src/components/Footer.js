"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold text-white font-outfit tracking-tight">
                Travel Blisss
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs text-sm">
              Crafting unforgettable journeys and blissful experiences across
              the globe. Your adventure starts here.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4s-1 2.17-2 2.85c.95.11 1.92-.14 2.12-.15-.43 1.35-2.5 3.53-2.5 3.53 0 4.75-3.46 10.32-10.12 10.32A10.12 10.12 0 0 1 2 17.65s3.37.13 5.1-.61c-2.1-.14-4.45-1.5-4.45-1.5a4.06 4.06 0 0 0 2.21-.03c-2.45-.48-4.14-2.48-4.14-2.48a3.27 3.27 0 0 0 1.92.51s-3.56-2.35-1.49-6.08c2.47 3.04 6.11 5.04 10.15 5.24a4.06 4.06 0 0 1 3.93-4.9c1.1 0 2.1.45 2.82 1.17a8.11 8.11 0 0 0 2.59-.99s-.4 1.34-1.55 2.1z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-orange-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6 font-outfit">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:w-3 transition-all"></span>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:w-3 transition-all"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6 font-outfit">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:w-3 transition-all"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:w-3 transition-all"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:w-3 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6 font-outfit">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-slate-900 rounded-lg text-orange-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Address</p>
                  <p className="text-white text-sm">
                    123 Travel Lane, Bliss City, TC 45678
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-slate-900 rounded-lg text-orange-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <a
                    href="tel:+918700461925"
                    className="text-white text-sm hover:text-orange-400 transition-colors"
                  >
                    +91 87004 61925
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-slate-900 rounded-lg text-orange-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a
                    href="mailto:info@travelblisss.com"
                    className="text-white text-sm hover:text-orange-400 transition-colors"
                  >
                    info@travelblisss.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Travel Blisss. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
