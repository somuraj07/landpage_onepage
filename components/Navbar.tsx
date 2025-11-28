"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      
      {/* ---------------- NAVBAR ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full fixed top-0 left-0 z-50
          bg-gradient-to-br from-[#0d3d2b] to-black/25
          px-8 py-4
        "
      >
        <div className="max-w-7xl mx-auto flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo2.png"
              alt="Logo"
              width={200}
              height={60}
              className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="
          w-full min-h-screen
          bg-gradient-to-br from-[#0d3d2b] to-black
          relative overflow-hidden text-white px-6
        "
      >
        {/* Small floating circles */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full border border-white/30 absolute"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{ y: [0, -8, 0], x: [0, 6, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Triangles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 50}
            className="absolute opacity-50"
            style={{
              top: `${Math.random() * 85}%`,
              left: `${Math.random() * 85}%`,
            }}
            animate={{ rotate: [0, 160, 0], y: [0, 10, 0] }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
              <polygon
                points="50,10 90,90 10,90"
                stroke="white"
                strokeWidth="5"
                fill="transparent"
              />
            </svg>
          </motion.div>
        ))}

        {/* Text Content */}
        <div className="text-center pt-28"> {/* pt-28 ensures content starts below navbar */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-4xl leading-tight"
          >
            Smart School Management <br />
            Software for Modern Schools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-base mt-4 max-w-xl mx-auto opacity-90"
          >
            Manage admissions, attendance, fees, homework, exams & communication — 
            everything in one beautiful system.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="relative mt-12 w-full flex justify-center">
          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            className="relative z-20"
          >
            <Image
              src="/la.png"
              width={440}
              height={310}
              alt="Laptop"
              className="drop-shadow-2xl"
            />
          </motion.div>

          {/* Mobile */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute right-[31%] bottom-[-5px] z-30"
            style={{ rotate: "-6deg" }}
          >
            <Image
              src="/mo.png"
              width={100}
              height={360}
              alt="Mobile"
              className="drop-shadow-2xl"
            />
          </motion.div>

          {/* Left Icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[30%] bottom-[80px] z-10"
          >
            <Image src="/left.png" width={80} height={65} alt="Icon" />
          </motion.div>

          {/* Right Icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[25%] bottom-[80px] z-10"
          >
            <Image src="/right.png" width={80} height={65} alt="Icon" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
