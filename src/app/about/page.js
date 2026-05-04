"use client";

import WhyChooseUs from "@/components/whychooseus/WhyChooseUs";
import { Users, Target, Heart, Award, Star, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop" 
            alt="About Travel Blisss"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 animate-fadeIn font-outfit">Our Story of Bliss</h1>
          <p className="text-xl text-slate-200 leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>
            We believe that travel is more than just visiting places; it's about the soul-stirring moments that stay with you forever.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-orange-600 font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Crafting Journeys Since 2010</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Travel Blisss was founded with a simple yet profound mission: to make world-class travel accessible, personal, and profoundly joyful. We don't just book tickets; we curate experiences that resonate with your personal travel style.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Users className="w-10 h-10 text-orange-600 mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">Expert Team</h4>
                <p className="text-slate-600 text-sm">Dedicated professionals with years of local expertise.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target className="w-10 h-10 text-orange-600 mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm">To provide seamless, unforgettable travel experiences.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1000&auto=format&fit=crop" 
                alt="Travel team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Award className="w-6 h-6" />
                </div>
                <h5 className="font-semibold text-slate-900 leading-tight">Voted #1 Travel Agency 2024</h5>
              </div>
              <p className="text-slate-500 text-sm">Recognized for excellence in customer service and destination planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-950 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-5xl font-semibold mb-6">What We Stand For</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto hover:bg-orange-600 transition-colors">
                <Heart className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-semibold">Passion for Travel</h4>
              <p className="text-slate-400 leading-relaxed">
                We are travelers ourselves. Our passion drives us to discover hidden gems and share them with you.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto hover:bg-orange-600 transition-colors">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-semibold">Trust & Integrity</h4>
              <p className="text-slate-400 leading-relaxed">
                Honest pricing, verified accommodations, and transparent communication in everything we do.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto hover:bg-orange-600 transition-colors">
                <Star className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-semibold">Excellence</h4>
              <p className="text-slate-400 leading-relaxed">
                We strive for perfection in every itinerary, ensuring every detail is handled with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us component integration */}
      <WhyChooseUs />
    </div>
  );
}

