// components/Pricing.jsx
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Basic UI Components", "Community Support"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$99",
      features: [
        "Premium Templates",
        "Unlimited Components",
        "Priority Support",
      ],
      highlight: true, // middle plan highlighted
    },
    {
      name: "Enterprise",
      price: "$499",
      features: ["Team License", "Custom Support", "Early Access"],
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py- px-6 max-w-7xl mx-auto text-center">
      <motion.h2
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
     className="text-4xl font-extrabold tracking-tight mb-6">

  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">
    Flexible Pricing
  </span>

</motion.h2>
<p className="text-gray-600 mb-12 max-w-2xl mx-auto">
  Choose a plan that fits your needs — simple, transparent, and scalable.
</p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`p-8 rounded-2xl shadow-md border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              p.highlight
                ? "bg-gray-900 text-white border-gray-800"
                : "bg-white text-gray-900 border-gray-200"}`}>

            <h3 className="font-semibold text-xl mb-2">{p.name}</h3>

            <p
              className={`text-3xl font-bold mb-6 ${
                p.highlight ? "text-white" : "text-gray-900"}`}>
              {p.price}
            </p>

            <ul className="space-y-3 text-sm">
              {p.features.map((f, idx) => (
                <li
                  key={idx}
                  className={`flex items-center justify-center gap-2 ${
                    p.highlight ? "text-gray-300" : "text-gray-600"}`}>
                  <span>✅</span> {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 px-6 py-3 rounded-lg font-medium transition ${
                p.highlight
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-700"}`}>
              Get Started
            </button>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
