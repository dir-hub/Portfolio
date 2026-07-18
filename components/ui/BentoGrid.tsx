import React from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 md:gap-7 max-w-7xl w-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:border-white/[0.2] transition-all duration-300 bg-black-100 p-2 md:p-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col justify-between h-full">
        {header ? (
          header
        ) : (
          <>
            <div className="w-full h-full absolute">
              {img && (
                <img
                  src={img}
                  alt={typeof title === "string" ? title : "bento-item"}
                  className={cn(imgClassName, "object-cover object-center")}
                />
              )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
              {spareImg && (
                <img
                  src={spareImg}
                  alt="spare"
                  className="object-cover object-center w-full h-full"
                />
              )}
              {id === 6 && (
                <BackgroundGradientAnimation>
                  <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
                </BackgroundGradientAnimation>
              )}
              <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                  {description}
                </div>
              </div>
            </div>
            <div className={cn("flex flex-col gap-2", titleClassName, id === 6 && "flex justify-center h-full")}>
              <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <h3 className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 text-xl lg:text-3xl max-w-xs">
                  {title}
                </h3>
                {description && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm lg:text-base">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
