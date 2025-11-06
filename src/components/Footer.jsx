import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp Community",
      url: "https://chat.whatsapp.com/gdgrajkot",
      icon: <FaWhatsapp className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/gdgrajkot",
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gdgrajkot",
      icon: <FaTwitter className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/gdgrajkot",
      icon: <FaFacebook className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/gdgrajkot",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: "Community Page",
      url: "https://gdg.community.dev/gdg-rajkot/",
      icon: <FaGlobe className="w-6 h-6" />,
    },
    {
      name: "Contact Email",
      url: "mailto:gdgrajkot@gmail.com",
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-[#f0f0f0] border-t-2 border-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/gdg-rajkot.png"
              alt="GDG Rajkot"
              className="h-28 w-auto"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-3 hover:bg-gray-200 rounded-full border border-gray-300 hover:border-gray-500"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm border-t border-gray-300 pt-6 w-full">
            <p className="font-google-sans">
              &copy; {currentYear} Google Developer Groups Rajkot. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
