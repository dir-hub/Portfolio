"use client";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

const Word = ({
  word,
  idx,
}: {
  word: string;
  idx: number;
}) => {
  return (
    <motion.span
      key={word + idx}
      initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.75,
        delay: idx * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        idx > 3 ? "text-purple-300" : "dark:text-white text-black",
        "mr-2 inline-block whitespace-pre will-change-transform will-change-opacity last:mr-0"
      )}
    >
      {word}
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
  const wordArray = words.split(" ");

  return (
    <div className="my-4">
      <motion.div
        className={cn(
          "font-bold flex flex-wrap justify-center gap-x-2 gap-y-1",
          className
        )}
      >
        {wordArray.map((word, idx) => (
          <Word key={word + idx} word={word} idx={idx} />
        ))}
      </motion.div>
    </div>
  );
};
