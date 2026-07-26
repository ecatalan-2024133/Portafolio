import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleOver = (event) => {
      setHovered(Boolean(event.target.closest("a, button")));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <span
        className={`cursor-dot${hovered ? " hovered" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <span
        className={`cursor-ring${hovered ? " hovered" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
