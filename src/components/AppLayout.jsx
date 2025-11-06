import React from "react";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-8 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
