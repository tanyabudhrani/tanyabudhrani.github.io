import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop only
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Do not render on mobile
  if (!isDesktop) return null;

  // Dot follows exact mouse
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Ring springs behind dot
  const ringX = useSpring(dotX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(dotY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX - 4);   // center 8px dot
      dotY.set(e.clientY - 4);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [dotX, dotY]);

  return (
    <>
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
};

export default CustomCursor;
