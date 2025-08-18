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
    const lenis = new Lenis({
      duration: 1.6, // longer duration = smoother
      easing: (t) => 1 - Math.pow(2, -10 * t), // very soft ease-out
      smoothWheel: true,
      smoothTouch: true, // enable on mobile too
      wheelMultiplier: 0.9, // reduce speed so it glides
      gestureDirection: "vertical", // force vertical smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
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
      <CursorGlow />
    </div>
  );
}

export default App;
