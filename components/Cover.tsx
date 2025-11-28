"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    { title: "Attendance Tracking", desc: "Daily presence monitoring with instant reports.", icon: "/7.png" },
    { title: "Homework & Assignments", desc: "Assign, submit, and track homework easily.", icon: "/5.png" },
    { title: "Fees Payments", desc: "Secure online fee payments with invoices.", icon: "/8.png" },
    { title: "Admissions", desc: "Completely digital admission & enrollment workflow.", icon: "/1.png" },
    { title: "Workshop Registration", desc: "Register for events & workshops instantly.", icon: "/9.png" },
    { title: "Parents Chat", desc: "Direct communication between teachers & parents.", icon: "/4.png" },
    { title: "Certificates", desc: "Auto-generate school certificates in seconds.", icon: "/2.png" },
    { title: "Marks Report", desc: "Performance analytics & smart grading.", icon: "/3.png" },
    { title: "News Feed", desc: "Latest news, instantly. ", icon: "/6.png" },
  ];

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

      {/* NAVBAR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full fixed top-0 left-0 z-50 bg-gradient-to-br from-[#0d3d2b] to-black/25 px-4 md:px-8 py-3 md:py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo2.png"
              alt="Logo"
              width={150}
              height={50}
              className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] md:w-[180px]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0d3d2b] to-black pt-24 md:pt-28 px-4 md:px-6">

        {/* Floating circles */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border border-white/30 absolute"
            style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
            animate={{ y: [0, -8, 0], x: [0, 6, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }}
          />
        ))}

        {/* TRIANGLES */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-40 md:opacity-50"
            style={{ top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%` }}
            animate={{ rotate: [0, 160, 0], y: [0, 10, 0] }}
            transition={{ duration: 6 + Math.random() * 3, repeat: Infinity }}
          >
            <svg width="10" height="10" className="md:w-[14px] md:h-[14px]" viewBox="0 0 100 100" fill="none">
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
            className="font-bold text-3xl md:text-4xl leading-snug md:leading-tight"
          >
            Smart School Management <br /> Software for Modern Schools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-sm md:text-base mt-3 md:mt-4 max-w-lg md:max-w-xl mx-auto opacity-90"
          >
            Manage admissions, attendance, fees, homework, exams & communication —
            everything in one beautiful system.
          </motion.p>
        </div>

        {/* HERO IMAGES */}
        <div className="relative mt-10 md:mt-16 w-full flex justify-center">

          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            className="scale-[0.75] md:scale-100"
          >
            <Image src="/la.png" width={440} height={310} alt="Laptop" className="drop-shadow-2xl" />
          </motion.div>

          {/* Mobile */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] md:right-[31%] bottom-[-15px] md:bottom-[-5px] rotate-[-6deg] scale-75 md:scale-100"
          >
            <Image src="/mo.png" width={100} height={360} alt="Mobile" className="drop-shadow-2xl" />
          </motion.div>

          {/* Left Icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="absolute left-[10%] md:left-[30%] bottom-[60px] md:bottom-[80px] scale-75 md:scale-100"
          >
            <Image src="/left.png" width={80} height={65} alt="Left Icon" />
          </motion.div>

          {/* Right Icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.7, repeat: Infinity }}
            className="absolute right-[10%] md:right-[25%] bottom-[60px] md:bottom-[80px] scale-75 md:scale-100"
          >
            <Image src="/right.png" width={80} height={65} alt="Right Icon" />
          </motion.div>
        </div>

      </div>

      {/* FEATURE GRID */}
      <div className="mt-24 mb-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">

        {/* LEFT FEATURES */}
        <div className="flex flex-col gap-10">
          {features.slice(0, 4).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.15 }}>
                  <Image src={item.icon} width={45} height={45} className="md:w-[55px]" alt={item.title} />
                </motion.div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTER MOBILE + ICONS */}
        <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-20 scale-[0.8] md:scale-100">
            <Image src="/each.png" width={240} height={600} alt="Mobile" className="drop-shadow-xl" />
          </motion.div>

          {features.map((item, i) => (
            <motion.div
              key={i}
              className="absolute z-10 hidden md:block"
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

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-10">
          {features.slice(4).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.15 }}>
                  <Image src={item.icon} width={45} height={45} className="md:w-[55px]" alt={item.title} />
                </motion.div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
