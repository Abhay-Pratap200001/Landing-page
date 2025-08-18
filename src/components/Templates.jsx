// components/Objectives.jsx
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function templates () {
  const objectives = [
    {
      title: "Launch Core Verticals (Year 1–2)",
      desc: "Certified courses, research mentorship, media platform, academic journal, and annual conference.",
    },
    {
      title: "Editorial Integrity",
      desc: "Establish a robust editorial process with peer reviews, plagiarism checks, and academic mentoring.",
    },
    {
      title: "Nationwide Outreach",
      desc: "Build awareness through partnerships, events, student ambassadors, and campus campaigns.",
    },
    {
      title: "Global Partnerships",
      desc: "Collaborate with universities, think tanks, and embassies for shared events, internships, and publications.",
    },
    {
      title: "Modular Certification",
      desc: "Offer flexible learning modules leading to diplomas in diplomacy and international affairs.",
    },
    {
      title: "Alumni & Mentorship Network",
      desc: "Connect past cohorts with current ones through mentorship, guest talks, and advisory roles.",
    },
    {
      title: "Annual Youth Diplomacy Report",
      desc: "Highlight top student work in an annual publication shared with global institutions.",
    },
  ];

  return (
    <section id="objectives" className="relative  px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Objectives of{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Our Platform
        </span>
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {objectives.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 shadow-lg hover:shadow-xl border border-gray-200 transition">
            <CheckCircle className="w-7 h-7 text-purple-500 shrink-0"/>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{o.title}</h3>
              <p className="text-gray-600">{o.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
