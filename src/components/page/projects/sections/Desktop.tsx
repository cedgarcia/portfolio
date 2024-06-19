"use client";
import React, { useEffect, useRef } from "react";
import ProjectSection from "./ProjectSection";
import BackgroundLines from "./BackgroundLines";

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
        className="relative z-40 mx-auto -mt-24 mb-20 h-[200vh] w-screen min-w-[1060px] bg-black laptop:w-10/12"
      >
        <div className="absolute z-50 m-auto h-full w-full  ">
          <div className="h-screen ">
            <ProjectSection />
          </div>
        </div>
        <BackgroundLines />
      </section>
    </>
  );
};

export default Desktop;
