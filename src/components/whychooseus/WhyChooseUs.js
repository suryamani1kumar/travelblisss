"use client";

import { ShieldCheck, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: "Value Packages",
      description:
        "We offer handpicked holiday packages that combine premium experiences with unbeatable value.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-orange-600" />,
      title: "Travel Support",
      description:
        "Our experienced travel experts are available 24/7 to guide you throughout your entire journey.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
          <path d="M13 13l6 6"></path>
        </svg>
      ),
      title: "Easy Booking",
      description:
        "Enjoy a quick and hassle-free booking experience with our simple and efficient tour selection process.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
      title: "Verified Stays",
      description:
        "Thousands of travelers trust our verified accommodations for a safe and blissful holiday experience.",
    },
  ];

  return (
    <section className="py-10 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 font-outfit">
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-lg">
            We make travel planning effortless and affordable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3 font-outfit">
                {feature.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
