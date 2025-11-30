"use client";

import { motion } from "framer-motion";

const sections = [
  {
    tag: "Smart Admission",
    title: "Seamless Online Student Enrollment",
    desc: "Smart Admission digitizes your entire admission workflow. Schools can collect student details, verify documents, manage approvals, and track application status—all in one place. Parents can register from anywhere, making the admission process faster, transparent, and hassle-free.",
    img: "/33.png",
  },
  {
    tag: "QuickAttendance",
    title: "Real-Time Attendance Tracking",
    desc: "QuickAttendance helps teachers mark attendance in seconds. The system automatically records daily presence, late entries, and absences and updates parents instantly. Schools can also generate insightful attendance reports for classes, sections, and individual students.",
    img: "/11.png",
  },
  {
    tag: "WorkHub",
    title: "Effortless Homework & Assignment Management",
    desc: "WorkHub simplifies the way teachers assign, students submit, and parents track homework. Teachers can upload worksheets, share deadlines, and review submissions, while students receive timely reminders to stay on track.",
    img: "/77.png",
  },
  {
    tag: "CampusFeed",
    title: "Daily College & School Updates, All in One Place",
    desc: "CampusFeed acts as a live notice board for your school. Share announcements, events, achievements, circulars, and important updates instantly with students and parents. No more missed messages—everyone stays informed in real time.",
    img: "/44.png",
  },
  {
    tag: "ConnectBot",
    title: "Smart Parent–Teacher Communication",
    desc: "ConnectBot enables smooth communication between teachers and parents. With intelligent chat assistance, queries are answered instantly, meetings can be scheduled, and teachers can send personalized updates. It strengthens the bridge between home and school.",
    img: "/66.png",
  },
  {
    tag: "ScoreTrack",
    title: "Instant Marks, Grades & Performance Reports",
    desc: "ScoreTrack offers a clear overview of every student’s academic progress. Teachers can upload marks, generate report cards, and analyze performance trends, while parents can check results anytime with complete transparency.",
    img: "/55.png",
  },
  {
    tag: "EventEnroll",
    title: "Easy Workshop & Event Registrations",
    desc: "EventEnroll makes it simple for students and parents to sign up for school workshops, seminars, celebrations, and other events. It handles registrations, waitlists, confirmations, and reminders—ensuring smooth event management.",
    img: "/22.png",
  },
  {
    tag: "FeeDesk",
    title: "Secure and Simple Fee Payments",
    desc: "FeeDesk provides a safe platform for parents to pay tuition fees, exam fees, and other charges online. It supports multiple payment modes, offers instant receipts, and helps schools track payment history effortlessly.",
    img: "/88.png",
  },
  {
    tag: "CertifyNow",
    title: "One-Click Certificate Requests",
    desc: "CertifyNow allows students to request transfer certificates, bonafide letters, or any other official documents with just one click. Schools can verify, process, and deliver certificates digitally, reducing manual workload.",
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
