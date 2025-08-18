import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Layers, 
  Code, 
  MonitorSmartphone, 
  ShieldCheck, 
  Zap, 
  Paintbrush 
} from "lucide-react";

export default function Features() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const items = [
    { 
      title: "Reusable Components", 
      desc: "Save time with pre-designed, modular components you can drag, drop, and customize instantly.", 
      icon: <Layers className="w-10 h-10 text-purple-600" /> 
    },
    { 
      title: "Modern Tech Stack", 
      desc: "Built using React, Tailwind, and Framer Motion — a future-proof stack for blazing-fast UIs.", 
      icon: <Code className="w-10 h-10 text-blue-600" /> 
    },
    { 
      title: "Responsive Design", 
      desc: "Seamlessly adapts to any device — desktops, tablets, or mobile for a flawless experience.", 
      icon: <MonitorSmartphone className="w-10 h-10 text-pink-600" /> 
    },
    { 
      title: "Secure & Reliable", 
      desc: "Every component is optimized with accessibility, performance, and security best practices.", 
      icon: <ShieldCheck className="w-10 h-10 text-green-600" /> 
    },
    { 
      title: "Lightning Fast", 
      desc: "Optimized for speed — smooth animations, lightweight components, and instant loading.", 
      icon: <Zap className="w-10 h-10 text-yellow-500" /> 
    },
    { 
      title: "Customizable Styles", 
      desc: "Easily tweak colors, fonts, and layouts — or add your own branding for a unique look.", 
      icon: <Paintbrush className="w-10 h-10 text-indigo-500" /> 
    },
  ];

  return (
    <section 
      id="features" 
      className="relative py-50 px-6 max-w-7xl mx-auto overflow-hidden"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}>

      {/* Cursor-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(168,85,247,0.15), transparent 80%)`
        }}/>

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent relative z-10">
        Powerful Features to Supercharge Your Workflow
      </motion.h2>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            
            className="p-8 rounded-2xl shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-2xl mb-3 text-gray-800">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
