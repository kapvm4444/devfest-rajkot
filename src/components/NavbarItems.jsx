import React from "react";
import { useNavigate } from "react-router-dom";

const navbarList = [
  { text: "Explore Agenda", link: "/agenda" },
  { text: "Create your Badge", link: "/badge" },
];

export default function NavbarItems({ closeNavbar }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:flex md:items-center gap-6">
        {navbarList.map((item, index) => (
          <button
            key={index}
            className="bg-white text-black px-6 py-3 rounded-3xl border-2 border-black text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 font-google-sans"
            onClick={() => navigate(item.link)}
          >
            {item.text}
          </button>
        ))}
      </div>

      {/* Mobile version */}
      <div className="md:hidden flex flex-col gap-4 w-full px-2">
        {navbarList.map((item, index) => (
          <button
            key={index}
            className="bg-white text-black px-6 py-3 rounded-3xl border-2 border-black text-sm font-bold transition-all hover:bg-gray-50 font-google-sans w-full"
            onClick={() => {
              navigate(item.link);
              closeNavbar();
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
}
