"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 animate-fadeIn font-outfit">
            Get in Touch
          </h1>
          <p
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            Have questions about a package? Need a custom itinerary? Our travel
            experts are ready to help you plan your perfect bliss.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info Sidebar */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-8 font-outfit">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-500 mb-1">
                      Mon-Fri from 8am to 6pm.
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="text-orange-600 font-semibold hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-500 mb-1">
                      Our team is here to help.
                    </p>
                    <a
                      href="mailto:hello@travelblisss.com"
                      className="text-orange-600 font-semibold hover:underline"
                    >
                      hello@travelblisss.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-500 mb-1">
                      Come say hello at our office.
                    </p>
                    <p className="text-slate-900 font-semibold leading-relaxed">
                      123 Travel Lane, Bliss City
                      <br />
                      TC 45678, United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4 md:p-6">
              <div className="mb-10">
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                  Send us a message
                </h2>
                <p className="text-slate-500">
                  We'll get back to you as soon as possible, usually within 24
                  hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                      Subject
                    </label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Assistance</option>
                      <option value="custom">Custom Package Request</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-2xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
