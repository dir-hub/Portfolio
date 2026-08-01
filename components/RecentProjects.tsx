"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="mx-auto mt-8 grid w-full max-w-[1600px] grid-cols-1 items-start gap-x-6 gap-y-16 px-4 py-4 sm:mt-10 sm:px-6 md:grid-cols-2 md:gap-x-10 lg:gap-x-16 lg:gap-y-24 xl:gap-x-20 2xl:gap-x-24">
        {projects.map((item) => (
          <div
            className="flex min-h-[28rem] w-full items-center justify-center sm:min-h-[32rem] lg:min-h-[36rem] 2xl:min-h-[40rem]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              containerClassName={`w-full flex justify-center ${
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
                    <img
                      src={item.img}
                      alt={item.title}
                      className="relative z-10 h-full w-full object-contain p-4 sm:p-5"
                    />
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
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
