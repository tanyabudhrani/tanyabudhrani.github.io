// CustomCursor.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x - 25, y: position.y - 25 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
};

export default CustomCursor;
