"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "framer-motion";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {reduce ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}