import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Small dot follows mouse exactly
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Big ring follows the dot (springy/trailing)
  const ringX = useSpring(dotX, { stiffness: 100, damping: 15 });
  const ringY = useSpring(dotY, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX - 4); // offset: dot size / 2
      dotY.set(e.clientY - 4);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [dotX, dotY]);

  return (
    <>
      {/* The trailing ring */}
      <motion.div
        className="custom-cursor-outer"
        style={{ x: ringX, y: ringY }}
      />
      {/* The main dot */}
      <motion.div
        className="custom-cursor-inner"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
};

export default CustomCursor;
