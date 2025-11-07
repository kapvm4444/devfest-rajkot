import React from "react";
import { Link } from "react-router-dom";
import { FiAward, FiCalendar } from "react-icons/fi";

export default function CtaMainContent(props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16 pointer-events-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-google-sans relative z-30">
            DevFest'25
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4285f4] mb-4 font-google-sans relative z-30">
            Rajkot
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-google-sans relative z-30">
            Capturing energy of DevFest'25 - Join us for an amazing day of
            learning, networking, and innovation
          </p>
        </div>

        {/* CTAs Section */}
        <div className="space-y-6 max-w-md mx-auto relative z-30 pointer-events-auto">
          {/* Badge Creator CTA - Top Priority */}

          <Link
            to="/badge"
            className="group block w-full bg-gradient-to-r text-black bg-white border-black border-8 font-bold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-google-sans relative z-40"
          >
            <div className="flex items-center justify-center space-x-3">
              <FiAward className="w-6 h-6 transition-transform duration-300" />
              <span className="text-lg md:text-xl">Create Your Badge</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 opacity-90">
              Design your personalized DevFest'25 badge
            </p>
          </Link>

          {/* Agenda CTA - Secondary */}
          <Link
            to="/agenda"
            className="group block w-full bg-gradient-to-r text-black bg-white border-black border-8 font-bold py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-google-sans relative z-40"
          >
            <div className="flex items-center justify-center space-x-3">
              <FiCalendar className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
              <span className="text-lg md:text-xl">View Agenda</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 opacity-90">
              Check out our exciting schedule
            </p>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-gray-500 relative z-30 pointer-events-auto">
          <p className="text-sm font-google-sans">
            Organized by Google Developer Groups Rajkot
          </p>
        </div>
      </div>
    </div>
  );
}
