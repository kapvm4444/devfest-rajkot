import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiAward } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-google-sans">
            DevFest'25
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4285f4] mb-4 font-google-sans">
            Rajkot
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-google-sans">
            Capturing energy of DevFest'25 - Join us for an amazing day of
            learning, networking, and innovation
          </p>
        </div>

        {/* CTAs Section */}
        <div className="space-y-6 max-w-md mx-auto">
          {/* Badge Creator CTA - Top Priority */}
          <Link
            to="/badge"
            className="group block w-full bg-gradient-to-r from-[#4285f4] to-[#3367d6] hover:from-[#3367d6] hover:to-[#2851a3] text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-google-sans"
          >
            <div className="flex items-center justify-center space-x-3">
              <FiAward className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg md:text-xl">Create Your Badge</span>
            </div>
            <p className="text-blue-100 text-sm mt-2 opacity-90">
              Design your personalized DevFest'25 badge
            </p>
          </Link>

          {/* Agenda CTA - Secondary */}
          <Link
            to="/agenda"
            className="group block w-full bg-gradient-to-r from-[#34a853] to-[#2d8f3f] hover:from-[#2d8f3f] hover:to-[#1e5f2b] text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-google-sans"
          >
            <div className="flex items-center justify-center space-x-3">
              <FiCalendar className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
              <span className="text-lg md:text-xl">View Agenda</span>
            </div>
            <p className="text-green-100 text-sm mt-2 opacity-90">
              Check out our exciting schedule
            </p>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-gray-500">
          <p className="text-sm font-google-sans">
            Organized by Google Developer Groups Rajkot
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
