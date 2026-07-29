'use client';
import React from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeCard } from "./GridGlobe";
import animationData from '@/data/confetti.json'
import Lottie from 'react-lottie'
import MagicButton from './MagicButton'
import { IoCopyOutline } from 'react-icons/io5'

const leftLists: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
];

const rightLists: string[] = [
  "Node.js",
  "Express.js",
  "MongoDB",
];

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 md:gap-7 w-full max-w-full mx-auto px-4 xl:px-40",
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
  const containerBase =
    "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:border-white/[0.2] transition-all duration-300 bg-black-100";
    const [copied, setCopied] = React.useState(false);
    
    const handleCopy = () => {
      navigator.clipboard.writeText('royd3366@gmail.com');
      setCopied(true);
    }
  return (
    <div
      className={cn(
        containerBase,
        id === 6
          ? "p-2 pr-0"
          : id === 2 || id === 5
          ? "p-0 pl-2"
          : id === 1
          ? "p-0"
          : "p-2 md:p-2",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn('relative z-10 flex flex-col h-full', id === 6 ? '!justify-center md:!justify-center lg:!justify-center' : 'justify-between')}>
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
              {id === 2 && <GlobeCard />}
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
            </div>
            <div
              className={cn(
                id === 6 ? '' : titleClassName,
                'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 lg:pl-1 z-20 pointer-events-none',
                id === 1 ? 'ml-2' : '',
                id === 3 ? 'center-title-on-lg-range title-responsive' : '',
                id === 6 ? '!items-center !justify-center !text-center md:!text-center lg:!text-center pointer-events-none transform -translate-y-6 w-full' : ''
              )}
              style={id === 6 ? { textAlign: 'center' } : undefined}
            >
              <div className={cn('font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10', id === 6 ? '!text-center md:!text-center lg:!text-center' : '')}>
                {description}
              </div>
              <div
                className={cn(
                  'font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-xl lg:text-2xl',                 
                  id === 6
                    ? 'max-w-full !text-center md:!text-center lg:!text-center'
                    : 'max-w-xs'
                )}
              >
                {title}
              </div>
            </div>
          </>
        )}
         {id === 3 && (
            <div className="flex gap-1  w-fit absolute -right-3 lg:-top-5 hide-tech-on-lg tech-list-responsive">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-1 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                     rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-1 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                     rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                
              </div>
            </div>
          )}

          {id === 6 && (
                <div className={id === 6 ? 'relative h-full' : 'mt-5 relative'}>
                  <div className={id === 6 ? 'absolute inset-0 flex items-center justify-center pointer-events-none' : 'absolute -bottom-5 right-0'}>
                {/** react-lottie expects an options object */}
                {(() => {
                  const lottieOptions = {
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                  } as any

                    return <Lottie options={lottieOptions} height={260} width={260} />
                })()}
              </div>

                <div className={id === 6 ? 'absolute inset-0 flex items-center justify-center pointer-events-none' : 'absolute bottom-4 left-4 w-56'}>
                  <div className={id === 6 ? 'pointer-events-auto transform -translate-y-6' : 'pointer-events-auto'}>
                    <MagicButton
                      title={copied ? 'Email copied' : 'Copy my email'}
                      icon={<IoCopyOutline />}
                      position="left"
                      otherClasses="!bg-[#161a31]"
                      handleClick={handleCopy}
                    />
                  </div>
                </div>
            </div>
          )}
      </div>
    </div>
  );
};
