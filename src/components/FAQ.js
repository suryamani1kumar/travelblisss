"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book a holiday package?",
      answer:
        "Booking is easy! You can browse our featured packages on the website and click 'Book Now', or simply call our travel experts who will guide you through the process step-by-step.",
    },
    {
      question: "What is usually included in your packages?",
      answer:
        "Our standard packages typically include premium accommodations, inter-city transfers, sightseeing tours with local guides, and daily breakfast. Detailed inclusions are listed on each specific package page.",
    },
    {
      question: "Can I customize my travel itinerary?",
      answer:
        "Absolutely! We specialize in tailor-made journeys. You can talk to our consultants about your interests, budget, and schedule, and we'll create a unique itinerary just for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation terms vary depending on the package and the proximity to the travel date. We recommend reviewing the specific terms during the booking process or contacting our support team for details.",
    },
    {
      question: "Do you provide 24/7 support during the trip?",
      answer:
        "Yes, we provide round-the-clock assistance for all our travelers. You'll have a dedicated support contact to help with any unexpected situations or questions during your journey.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 font-outfit">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know about your next blissful journey
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "border-orange-600 bg-orange-50/30"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-3 cursor-pointer text-left"
              >
                <span
                  className={`text-md ${openIndex === index ? "text-orange-600" : "text-slate-900"}`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-orange-600" : "text-slate-400"}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-3 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
