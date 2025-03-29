import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const cursorY = useSpring(mouseY, { stiffness: 200, damping: 20 });

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

      mouseX.set(x - 50); // adjust for cursor size
      mouseY.set(y - 50);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  // 👇 ADD THIS useEffect BELOW THE ABOVE ONE
  useEffect(() => {
    const interval = setInterval(() => {
      const randomRadius = `${50 + Math.random() * 20}% ${50 + Math.random() * 20}% ${50 + Math.random() * 20}% ${50 + Math.random() * 20}%`;
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.borderRadius = randomRadius;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const scaleX = useTransform(
    () => Math.min(Math.max(1 + velocity.vx / 150, 0.8), 1.6)
  );
  const scaleY = useTransform(
    () => Math.min(Math.max(1 + velocity.vy / 150, 0.8), 1.6)
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
