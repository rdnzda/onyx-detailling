"use client";

import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  className?: string;
}

// Apparition discrète au scroll (léger fondu, sans glissement appuyé).
export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0,
  duration = 0.5,
  className = ""
}: RevealProps) => {
  const reduce = useReducedMotion();
  return (
    <div className={className} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: reduce ? 0 : 12 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration, delay: Math.min(delay, 0.2), ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
