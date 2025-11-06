import React from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import { agendaData } from "../data/agendaData";

export default function Agenda() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Agenda
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Google Developer Groups Rajkot DevFest 2025
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <Timeline data={agendaData} className="timeline-container" />
        </div>
      </div>
    </div>
  );
}
