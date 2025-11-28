"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    { title: "Attendance Tracking", desc: "Daily presence monitoring with instant reports.", icon: "/1.png" },
    { title: "Homework & Assignments", desc: "Assign, submit, and track homework easily.", icon: "/2.png" },
    { title: "Fees Payments", desc: "Secure online fee payments with invoices.", icon: "/3.png" },
    { title: "Admissions", desc: "Completely digital admission & enrollment workflow.", icon: "/4.png" },
    { title: "Workshop Registration", desc: "Register for events & workshops instantly.", icon: "/5.png" },
    { title: "Parents Chat", desc: "Direct communication between teachers & parents.", icon: "/6.png" },
    { title: "Certificates", desc: "Auto-generate school certificates in seconds.", icon: "/7.png" },
    { title: "Marks Report", desc: "Performance analytics & smart grading.", icon: "/8.png" },
    { title: "More Coming Soon", desc: "New modules added regularly.", icon: "/9.png" },
  ];

  // Floating icon positions around center mobile
  const floatPos = [
    { x: -40, y: -150 },
    { x: 140, y: -160 },
    { x: -45, y: -20 },
    { x: 150, y: 0 },
    { x: -30, y: 120 },
    { x: 120, y: 130 },
    { x: -10, y: 210 },
    { x: 40, y: -260 },
    { x: 0, y: -330 },
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0d3d2b] to-black">

      {/* ------------------------------------------------ NAVBAR ------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full fixed top-0 left-0 z-50 bg-gradient-to-br from-[#0d3d2b] to-black/25 px-8 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo2.png"
              alt="Logo"
              width={180}
              height={60}
              className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ------------------------------------------------ HERO SECTION ------------------------------------------------ */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0d3d2b] to-black pt-28 px-6">

        {/* Floating circles (Background animation) */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full border border-white/30 absolute"
            style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
            animate={{ y: [0, -8, 0], x: [0, 6, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }}
          />
        ))}

        {/* Floating Triangles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i + 50}
            className="absolute opacity-50"
            style={{ top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%` }}
            animate={{ rotate: [0, 160, 0], y: [0, 10, 0] }}
            transition={{ duration: 6 + Math.random() * 3, repeat: Infinity }}
          >
            <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
              <polygon points="50,10 90,90 10,90" stroke="white" strokeWidth="5" />
            </svg>
          </motion.div>
        ))}

        {/* HERO TEXT */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-4xl leading-tight"
          >
            Smart School Management <br /> Software for Modern Schools
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

        {/* HERO IMAGES (Laptop + Mobile + Side Icons) */}
        <div className="relative mt-16 w-full flex justify-center">
          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
          >
            <Image src="/la.png" width={440} height={310} alt="Laptop" className="drop-shadow-2xl" />
          </motion.div>

          {/* Floating Mobile */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[31%] bottom-[-5px] rotate-[-6deg]"
          >
            <Image src="/mo.png" width={100} height={360} alt="Mobile" className="drop-shadow-2xl" />
          </motion.div>

          {/* Left icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="absolute left-[30%] bottom-[80px]"
          >
            <Image src="/left.png" width={80} height={65} alt="Left Icon" />
          </motion.div>

          {/* Right icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.7, repeat: Infinity }}
            className="absolute right-[25%] bottom-[80px]"
          >
            <Image src="/right.png" width={80} height={65} alt="Right Icon" />
          </motion.div>
        </div>
      </div>

      {/* ------------------------------------------------ FEATURE SECTION ------------------------------------------------ */}
      <div className="mt-24 mb-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">

        {/* LEFT 4 FEATURES */}
        <div className="flex flex-col gap-10">
          {features.slice(0, 4).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.15 }}>
                  <Image src={item.icon} width={55} height={55} alt={item.title} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTER — MOBILE WITH FLOATING ICONS */}
        <div className="relative flex justify-center items-center min-h-[500px]">
          {/* Mobile PNG */}
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-20">
            <Image src="/each.png" width={260} height={620} alt="Mobile" className="drop-shadow-xl" />
          </motion.div>

          {/* Floating feature icons */}
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="absolute z-10"
              style={{ left: "50%", top: "50%", transform: `translate(${floatPos[i].x}px, ${floatPos[i].y}px)` }}
              animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            >
              <motion.div whileHover={{ scale: 1.2 }} className="rounded-full p-2" style={{ boxShadow: "0 0 12px rgba(255,255,255,0.45)" }}>
                <Image src={item.icon} width={70} height={70} alt="" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT 5 FEATURES */}
        <div className="flex flex-col gap-10">
          {features.slice(4).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.15 }}>
                  <Image src={item.icon} width={55} height={55} alt={item.title} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
