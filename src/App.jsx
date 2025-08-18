// App.jsx
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Templates from "./components/Templates";
import Directory from "./components/Directory";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import CursorGlow from "./components/CursorGlory";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="font-sans bg-slate-100 text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Directory />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
      <CursorGlow/>
    </div>
  );
}

export default App;
