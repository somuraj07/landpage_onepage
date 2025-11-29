"use client";

import { motion } from "framer-motion";

const sections = [
  {
    tag: "Attendance",
    title: "Smart Attendance Tracking",
    desc: "Track student attendance in real-time with accurate daily, weekly, and monthly reports.",
    img: "/33.png",
  },
  {
    tag: "Marks Report",
    title: "Detailed Academic Performance",
    desc: "View complete marks reports, subject-wise scores, and progress analytics for each student.",
    img: "/11.png",
  },
  {
    tag: "Admission",
    title: "Digital Admission Process",
    desc: "Manage student admissions, form submissions, approvals, and verification seamlessly.",
    img: "/77.png",
  },
  {
    tag: "Fees",
    title: "Online Fee Management",
    desc: "Students and parents can view fee structures, pay online, and download payment receipts anytime.",
    img: "/44.png",
  },
  {
    tag: "Workshop Registration",
    title: "One-Click Workshop Registration",
    desc: "Register for events, seminars, and workshops easily with automated confirmations.",
    img: "/66.png",
  },
  {
    tag: "Certificates",
    title: "Instant Certificate Downloads",
    desc: "Download course certificates, participation certificates, and academic documents instantly.",
    img: "/55.png",
  },
  {
    tag: "Assignments",
    title: "Assignment Submission & Tracking",
    desc: "Submit assignments, view deadlines, and track evaluation updates from teachers.",
    img: "/22.png",
  },
  {
    tag: "Parent-Teacher Chat",
    title: "Secure Parent & Teacher Messaging",
    desc: "A dedicated communication channel for parents and teachers to discuss student progress.",
    img: "/88.png",
  },
  {
    tag: "News Feed",
    title: "Latest Updates & Announcements",
    desc: "Stay updated with all important college news, notices, and alerts in one central feed.",
    img: "/d.png",
  },
];

export default function AnimatedAlternatingLayout() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-green-900 to-black py-20 px-6 space-y-32">

      {sections.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={index} className="grid grid-cols-4 gap-6 items-center">

            {/* Empty Left */}
            <div></div>

            {/* EVEN → Image Left | Content Right  */}
            {isEven ? (
              <>
                {/* Image Left */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center"
                >
                  <motion.img
                    src={item.img}
                    alt="Feature"
                    className="w-[320px] md:w-[420px] lg:w-[500px] object-contain"
                    animate={{ y: ["0%", "-10%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-white space-y-4"
                >
                  <span className="bg-green-600 px-3 py-1 rounded-md text-sm">
                    {item.tag}
                  </span>

                  <h2 className="text-3xl font-semibold">{item.title}</h2>

                  <p className="text-gray-200">{item.desc}</p>
                </motion.div>
              </>
            ) : (
              <>
                {/* ODD → Content Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-white space-y-4"
                >
                  <span className="bg-green-600 px-3 py-1 rounded-md text-sm">
                    {item.tag}
                  </span>

                  <h2 className="text-3xl font-semibold">{item.title}</h2>

                  <p className="text-gray-200">{item.desc}</p>
                </motion.div>

                {/* Image Right */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center"
                >
                  <motion.img
                    src={item.img}
                    alt="Feature"
                    className="w-[320px] md:w-[420px] lg:w-[500px] object-contain"
                    animate={{ y: ["0%", "-10%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </>
            )}

            {/* Empty Right */}
            <div></div>
          </div>
        );
      })}

    </div>
  );
}
