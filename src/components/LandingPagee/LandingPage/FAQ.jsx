// Import necessary hooks and libraries
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  // Array of FAQ objects: each has a question (q) and an answer (a)
  const faqs = [
    {
      q: "How do I use these components?",
      a: "Install the package, copy the component into your project, and customize it with Tailwind or your preferred styling."
    },
    {
      q: "Is there a free plan?",
      a: "Yes! The Starter plan is free forever and includes access to basic UI components."
    },
    {
      q: "Do you offer refunds?",
      a: "Absolutely. If you’re not satisfied, we provide a 14-day money-back guarantee on paid plans."
    },
    {
      q: "Can I use these in client projects?",
      a: "Yes, Pro and Enterprise plans include a commercial license so you can use them in unlimited client projects."
    },
    {
      q: "Do you provide updates?",
      a: "Yes, Pro and Enterprise users get regular updates, new components, and early access to beta features."
    },
    {
      q: "Is team collaboration supported?",
      a: "Yes, our Enterprise plan allows multiple team members to collaborate with shared access and priority support."
    }
  ];

  // State to track which FAQ item is currently open null none open
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="py-30 px-6 bg-gradient-to-b from-gray-50">

     {/* Section header */}
<div className="max-w-5xl mx-auto text-center mb-16">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-4xl font-extrabold tracking-tight mb-4">
    Frequently Asked Questions
  </motion.h2>

  {/* Animated subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-gray-600 max-w-2xl mx-auto">

    Can’t find the answer you’re looking for? Reach out to our support team.
  </motion.p>
</div>

  {/* FAQ grid layout */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                backgroundColor: isOpen ? "#f0f7ff" : "#f9fafb", // subtle blue vs gray
                borderColor: isOpen ? "#3b82f6" : "#e5e7eb", // blue-500 vs gray-200
                color: isOpen ? "#1e40af" : "#374151", // darker blue vs gray-700
              }}
              transition={{ duration: 0.3 }}
              className="border rounded-xl shadow-sm">

         {/* Button that toggles the FAQ open/close */}
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium focus:outline-none">
                <span>{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} />
                </motion.span>
              </button>
              
              {/* AnimatePresence allows smooth removal when closing */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden">
                    <p className="px-6 pb-4 text-gray-700">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
