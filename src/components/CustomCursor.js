// CustomCursor.js
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });
  const prev = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const vx = x - prev.current.x;
      const vy = y - prev.current.y;

      setVelocity({ vx, vy });

      prev.current = { x, y };

      mouseX.set(x - 25);
      mouseY.set(y - 25);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  // Distortion based on velocity
  const scaleX = useTransform(
    () => Math.min(Math.max(1 + Math.abs(velocity.vx) / 100, 0.8), 2),
  );
  const scaleY = useTransform(
    () => Math.min(Math.max(1 - Math.abs(velocity.vy) / 250, 0.75), 1.5),
  );

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: cursorX,
        y: cursorY,
        scaleX,
        scaleY,
      }}
    />
  );
};

export default CustomCursor;
