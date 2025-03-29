// CustomCursor.js
import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const outerX = useMotionValue(0);
  const outerY = useMotionValue(0);

  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);

  const smoothInnerX = useSpring(innerX, { stiffness: 120, damping: 20 });
  const smoothInnerY = useSpring(innerY, { stiffness: 120, damping: 20 });

  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;

      // Outer ring follows mouse directly
      outerX.set(clientX - 40); // half of outer width
      outerY.set(clientY - 40);

      // Inner dot follows with spring
      innerX.set(clientX - 4); // half of inner size
      innerY.set(clientY - 4);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [outerX, outerY, innerX, innerY]);

  return (
    <>
      <motion.div
        className="custom-cursor-outer"
        style={{ x: outerX, y: outerY }}
      />
      <motion.div
        className="custom-cursor-inner"
        style={{ x: smoothInnerX, y: smoothInnerY }}
      />
    </>
  );
};

export default CustomCursor;
