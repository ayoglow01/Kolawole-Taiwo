
import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -32px 0px",
  });

  const shouldReduceMotion = useReducedMotion();

  const animationProps = {
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, y: 20 },

    animate:
      shouldReduceMotion || isInView
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 20 },

    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delayMs / 1000,
      ease: "easeOut" as const,
    },

    className,
    ref: (node: HTMLElement | null) => {
      ref.current = node;
    },
  };

  if (as === "li") {
    return (
      <motion.li {...animationProps}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div {...animationProps}>
      {children}
    </motion.div>
  );
}
