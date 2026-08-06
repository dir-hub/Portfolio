"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const bgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.1], [-100, 0]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ y }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] flex justify-center",
          className
        )}
      >
        <motion.div
          style={{
            backdropFilter: "blur(12px)",
            backgroundColor: bgOpacity,
          }}
          className="flex items-center gap-1 rounded-full border border-white/[0.2] bg-black/10 px-2 py-2 sm:gap-4 sm:px-4 dark:bg-white/10"
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-neutral-50 transition-colors hover:text-white sm:px-3 sm:text-sm dark:text-neutral-300"
            >
              {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
              <span>{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
