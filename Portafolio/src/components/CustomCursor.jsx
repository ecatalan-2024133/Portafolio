import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ring.current.x += (pos.current.x - ring.current.x) * 0.18;
        ring.current.y += (pos.current.y - ring.current.y) * 0.18;
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const el = e.target;
      if (el && el.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovered(true);
      }
    };
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${hovered ? "hovered" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${hovered ? "hovered" : ""}`} />
    </>
  );
}
