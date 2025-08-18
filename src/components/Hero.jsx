// Hero2
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react"; // lucide icons

export default function Hero() {
  return (
    <section className="h-screen py-10 flex flex-col justify-center items-center text-center px-6 pt-20">
      {/* ⭐ Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
      >
        <Star className="w-4 h-4 fill-purple-600 text-purple-600" />
        Rated 5 Stars by 800+ Developers
      </motion.div>

      {/* 🎯 Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Design Made <span className="text-purple-600">Simple</span>
      </motion.h1>

      {/* ✍️ Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 max-w-xl"
      >
        Everything you need to grow your design workflow. Components, templates, and tools — all in one place.
      </motion.p>

      {/* 🚀 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-8"
      >
        <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 flex items-center gap-2">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl shadow hover:bg-gray-200">
          View Components
        </button>
      </motion.div>

{/* 🖼️ Hero Image / Mockup */}
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.77 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    delay: 0.6,
    duration: 0.8,
    ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier
  }}
  className="mt-12"
>
  <img
    src="https://dummyimage.com/800x400/ede9fe/6b21a8&text=UI+Preview"
    alt="UI Preview"
    className="rounded-xl shadow-lg"
  />
</motion.div>

    </section>
  );
}
