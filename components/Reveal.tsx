"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  fade?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  fade = true,
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: fade ? 0 : 1, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}