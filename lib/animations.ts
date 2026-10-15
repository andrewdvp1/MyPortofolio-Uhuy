// ============================================================================
// VARIASI ANIMASI FRAMER MOTION
// ============================================================================
import type { MotionProps, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

type ViewportMargin = NonNullable<MotionProps["viewport"]>["margin"];

/**
 * Props siap pakai untuk animasi "muncul saat di-scroll" (sekali saja).
 * Pemakaian: <motion.div {...revealOnScroll("-60px")} className="...">
 */
export const revealOnScroll = (
  margin?: ViewportMargin,
  variants: Variants = staggerContainer
) =>
  ({
    initial: "hidden",
    whileInView: "visible",
    viewport: margin ? { once: true, margin } : { once: true },
    variants,
  }) as const;

