// components/CursorGlow.jsx
// This file defines a glowing cursor effect that smoothly follows the mouse
//  CursorGlow Component
//  Adds a custom cursor effect:
//  A small purple dot follows the mouse.
//  A larger blurry glow trails behind smoothly.
 

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });   //For track the actual mouse position
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 }); // Track a "smoothed" version of the mouse position for smooth trailing effect


  // Handles mouse movement
  // Updates the `pos` state with current cursor x & y coordinates
  // Moves `smoothPos` a small step (10%) towards `pos` each frame
  
  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);

    // smooth animation loop
    // * - Creates a nice, smooth "lag" behind the real cursor
    let frame;
    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.1,      // 0.1 = smoothness
        y: prev.y + (pos.y - prev.y) * 0.1,
      }));
      frame = requestAnimationFrame(animate);
    };
    animate();            // start animation loop

    return () => {       // Cleanup on component unmount
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [pos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Small Dot */}
      <div
        className="w-2 h-2 bg-blue-500 rounded-full absolute"
        style={{
          left: smoothPos.x - 4,
          top: smoothPos.y - 4,
        }}/>

      {/* Blurry Glow */}
      <div
        className="w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-40 absolute"
        style={{
          left: smoothPos.x - 80,
          top: smoothPos.y - 80,
        }}/>
    </div>
  );
}
