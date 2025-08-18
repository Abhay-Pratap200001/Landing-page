// Navbar 1
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // show after scrolling 100px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 w-full bg-white/40 backdrop-blur-md shadow-sm z-50"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-xl font-bold cursor-pointer text-purple-700"
            >
              CopyUI
            </motion.h1>

            {/* Nav Links */}
            <div className="space-x-6 hidden md:flex">
              {["Features", "Templates", "Pricing", "FAQ"].map((item, i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="relative font-medium text-gray-700 hover:text-purple-600"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  {/* underline animation */}
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
              Get Started
              
            </motion.button>
               {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/90 backdrop-blur-md shadow-inner"
              >
                <div className="flex flex-col items-center py-4 space-y-4">
                  {["Features", "Templates", "Pricing", "FAQ"].map((item, i) => (
                    <a
                      key={i}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 font-medium hover:text-purple-600"
                    >
                      {item}
                    </a>
                  ))}
                  <button className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
