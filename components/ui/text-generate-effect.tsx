"use client";
import { useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "@/utils/cn";

const Word = ({ 
  word, 
  idx, 
  totalWords, 
  progress 
}: { 
  word: string; 
  idx: number; 
  totalWords: number; 
  progress: any;
}) => {
  const start = idx / totalWords * 100;
  const end = start + 100 / totalWords;
  const opacity = useTransform(progress, [start - 10, end], [0, 1]);

  return (
    <motion.span
      key={word + idx}
      className={cn(
        idx > 3 ? "text-purple-300" : "dark:text-white text-black",
        "opacity-0"
      )}
      style={{ opacity }}
    >
      {word}{" "}
    </motion.span>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue<number>(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [progress]);

  const wordArray = words.split(" ");

  return (
    <div className="my-4">
      <motion.div ref={elementRef} className={cn("font-bold", className)}>
        {wordArray.map((word, idx) => (
          <Word 
            key={word + idx} 
            word={word} 
            idx={idx} 
            totalWords={wordArray.length} 
            progress={progress} 
          />
        ))}
      </motion.div>
    </div>
  );
};
