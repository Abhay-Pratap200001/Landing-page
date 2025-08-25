import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import P2 from "./Pages/ProjectPage/PageSecond";
import P1 from "./Pages/ProjectPage/Pagefirst";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, //  how long each scroll takes higher = smoother
      easing: (t) => 1 - Math.pow(2, -10 * t), //very soft ease-out
      smoothWheel: true,   // enable smooth scroll on mouse wheel
      smoothTouch: true, // enable on mobile too
      wheelMultiplier: 0.9, // adjust scroll speed lower = slower glide
      gestureDirection: "vertical", // force vertical smoothness
    });

   let frame;
  // requestAnimationFrame loop to update Lenis each frame
    const raf = (time) => {
      lenis.raf(time); // update scroll state
      frame = requestAnimationFrame(raf); // keep looping
    };
    frame = requestAnimationFrame(raf);

    // Cleanup: cancel RAF + destroy Lenis instance when component unmounts
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans bg-slate-100 text-gray-900">
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />   {/* ✅ Fixed */}
          <Route path="/create" element={<P1/>} />
          <Route path="/p2" element={<P2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
