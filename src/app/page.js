"use client";

import { useEffect, useState } from "react";

export default function ComingSoon() {
  const targetDate = new Date("2026-12-31T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 animate-gradient text-white px-6">

      <div className="text-center max-w-2xl animate-fadeIn">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          🚀 Coming Soon
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          We're building something amazing. Stay tuned for the launch.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-110 transition-transform duration-300"
            >
              <p className="text-3xl font-bold">{value}</p>
              <p className="uppercase text-sm text-gray-300">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-300 mt-12">
          © {new Date().getFullYear()} Your Brand
        </p>

      </div>

    </div>
  );
}
