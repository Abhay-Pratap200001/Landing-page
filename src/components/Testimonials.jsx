// components/Testimonials.jsx
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "Alice", text: "This saved me hours of work!" },
    { name: "Bob", text: "Beautiful components, easy to use." },
    { name: "Charlie", text: "Highly recommend for any dev team." },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, rotate: 2 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight mb-4">
          What Developers Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600">
          Trusted by developers worldwide to speed up their workflow.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (

          <motion.div
            key={i}
            variants={card}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },}}
            className="p-8 bg-white rounded-2xl shadow-lg relative overflow-hidden">

            {/* Glow animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}/>

            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 italic mb-4 relative z-10">
              “{r.text}”
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-semibold text-gray-900 relative z-10">
              — {r.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
