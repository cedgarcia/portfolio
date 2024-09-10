"use client";
import React, { useEffect, useRef } from "react";
import BackgroundLines from "./BackgroundLines";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import sharpenCedrickImage from "@/app/assets/sharpen_cedrick.png";
import ShuffleText from "@/components/common/ShuffleTextFast";
import ShuffleTextSuperFast from "@/components/common/ShuffleTextSuperFast";

const Desktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        document.documentElement.style.setProperty("--x", `${x}px`);
        document.documentElement.style.setProperty("--y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative z-40 mx-auto -mt-24 mb-20 h-[110vh] w-screen min-w-[1060px] bg-black laptop:w-10/12"
      >
        <div className="absolute z-50 m-auto h-full w-full  ">
          <div className="h-screen ">
            <div className="h-screen px-8 py-[8rem] tablet:px-[10%] tablet:pb-[8rem]">
              <div className="py-12">
                <div className=" font-heading1 text-[3rem] text-blue-400 tablet:text-[4rem]">
                  <ShuffleText text="John Cedrick Garcia" />
                </div>
                <div className="font-heading5 text-[1.3rem] tracking-wider text-blue-100  ">
                  <ShuffleText text="Software Developer, from Pasig Philippines" />
                </div>
              </div>
              <div className="flex justify-between gap-3">
                <div className="w-7/12">
                  <div className="text-[1rem] font-light leading-[2rem] text-white     ">
                    <ShuffleTextSuperFast text="  My interest in development began in 2020 when I tried to code by completing projects on" />

                    <a href="" className="font-heading3 text-blue-300">
                      {" "}
                      <ShuffleText text="frontendmentor.io." />
                    </a>
                  </div>
                  <div className="py-2 text-[1rem] font-thin leading-[2rem] text-white     ">
                    <ShuffleTextSuperFast
                      text="Through this, I learned a great deal about Frontend
                    development."
                    />
                    <ShuffleTextSuperFast
                      text=" I leverage my passion for Visual Arts to guide
                      the execution of my engineering work."
                    />
                  </div>
                  <div className="text-[1rem] font-thin leading-[2rem] text-white     ">
                    <ShuffleTextSuperFast
                      text=" Fast-forward to today, and I've had the privilege of working
                      at"
                    />{" "}
                    <a
                      href="https://bluehive.com.ph/"
                      className="font-heading3 text-blue-300"
                      target="_blank"
                    >
                      <ShuffleText text="Bluehive" />
                    </a>
                    <ShuffleTextSuperFast
                      text="a software development company. Currently, my main focus
                      is on building "
                    />
                    <ShuffleTextSuperFast
                      text="accessible, inclusive products and scalable
                      systems for a variety of clients."
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-[17rem] mr-[8rem]  w-3/12">
                  <img
                    src={sharpenCedrickImage.src}
                    alt="Cedrick Garcia"
                    className="h-[60%]"
                  />
                </div>
              </div>

              <div className="flex w-fit flex-col tablet:flex-row"></div>
            </div>
          </div>
        </div>
        <BackgroundLines />
      </section>
    </>
  );
};

export default Desktop;
