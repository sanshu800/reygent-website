"use client";

import { motion, useReducedMotion } from "motion/react";

interface HeroEntryProps {
  children: React.ReactNode[];
}

/**
 * Staggered page-load animation for hero content.
 * Each direct child animates in sequence with a 100ms stagger.
 * Fires once on mount. Respects prefers-reduced-motion.
 */
export function HeroEntry({ children }: HeroEntryProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start gap-6"
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
