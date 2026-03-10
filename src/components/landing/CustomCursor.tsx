import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: clicking ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-foreground" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: clicking ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
      >
        <div className="w-10 h-10 rounded-full border border-primary/50" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
