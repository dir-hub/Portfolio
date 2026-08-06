"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";

const RecentProjects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20" id="projects">
      <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="mx-auto mt-8 grid w-full max-w-[1600px] grid-cols-1 items-start gap-x-6 gap-y-16 px-4 py-4 sm:mt-10 sm:px-6 md:grid-cols-2 md:gap-x-10 lg:gap-x-16 lg:gap-y-24 xl:gap-x-20 2xl:gap-x-24">
        {projects.map((item) => {
          const isLivePreview = hoveredProjectId === item.id;

          return (
          <div
            className="flex min-h-[28rem] w-full items-center justify-center sm:min-h-[32rem] lg:min-h-[36rem] 2xl:min-h-[40rem]"
            key={item.id}
          >
            <PinContainer
              title={isLivePreview ? item.liveLink : item.link}
              href={isLivePreview ? item.liveLink : item.link}
              containerClassName={`w-full flex justify-center" ${
                item.id % 2 === 0 ? "xl:justify-start" : "xl:justify-end"
              }`}
            >
              <div className="w-full">
                <div className="relative mb-6 flex h-52 w-full items-center justify-center overflow-hidden sm:mb-8 sm:h-60 lg:h-72 2xl:h-80">
                  <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162D]">
                    <img
                      src="/bg.png"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative z-10 flex h-full w-full items-end justify-center px-4 pt-4 sm:px-5 sm:pt-5">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full rounded-lg object-cover rotate-1 [clip-path:inset(0_round_0.8rem)]"
                      />
                    </div>
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <Link
                      href={item.liveLink}
                      target="_blank"
                      onMouseEnter={() => setHoveredProjectId(item.id)}
                      onMouseLeave={() => setHoveredProjectId(null)}
                      onFocus={() => setHoveredProjectId(item.id)}
                      onBlur={() => setHoveredProjectId(null)}
                      className="flex lg:text-xl md:text-xs text-sm text-purple-300"
                    >
                      Check Live Site
                    </Link>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
