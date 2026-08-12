"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Reveals its existing content once it approaches the viewport. */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(
        "w-full motion-safe:translate-y-7 motion-safe:opacity-0 motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out motion-reduce:transform-none",
        isVisible && "motion-safe:translate-y-0 motion-safe:opacity-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
