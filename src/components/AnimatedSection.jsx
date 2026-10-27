import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up"
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 35 };
      case "down": return { opacity: 0, y: -35 };
      case "left": return { opacity: 0, x: -35 };
      case "right": return { opacity: 0, x: 35 };
      default: return { opacity: 0, y: 35 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
