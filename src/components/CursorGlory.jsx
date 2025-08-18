// components/CursorGlow.jsx
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);

    // smooth animation loop
    let frame;
    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.1, // 0.1 = smoothness
        y: prev.y + (pos.y - prev.y) * 0.1,
      }));
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [pos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Small Dot */}
      <div
        className="w-2 h-2 bg-purple-500 rounded-full absolute"
        style={{
          left: smoothPos.x - 4,
          top: smoothPos.y - 4,
        }}
      />

      {/* Blurry Glow */}
      <div
        className="w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-40 absolute"
        style={{
          left: smoothPos.x - 80,
          top: smoothPos.y - 80,
        }}
      />
    </div>
  );
}
