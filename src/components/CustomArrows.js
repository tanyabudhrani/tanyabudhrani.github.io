import React from "react";
import { motion } from "framer-motion";

export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.2 }}
      className={className}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.2 }}
      className={className}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    />
  );
};
