import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavbarItems from "./NavbarItems.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function closeNavBar() {
    setIsOpen(false);
  }
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f0f0f0]/95 backdrop-blur-md border-b-2 border-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              <img src="/devfest.png" alt="DevFest" className="h-16 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center gap-6">
            <NavbarItems />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#f0f0f0] border-t border-gray-300 px-4 py-6">
          <NavbarItems closeNavbar={closeNavBar} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
