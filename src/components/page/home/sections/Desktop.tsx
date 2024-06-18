"use client";
import React, { useEffect, useRef } from "react";
import LandingSection from "./LandingSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import BackgroundLines from "./BackgroundLines";

const HomePageDesktop = () => {
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
        console.log("X: ", x, "Y: ", y);
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
        className="relative z-40 mx-auto -mt-24 mb-20 h-[400vh] w-screen min-w-[1060px] bg-black laptop:w-10/12"
      >
        <div className="absolute z-50 m-auto h-full w-full  ">
          <div className="hero h-screen ">
            <LandingSection />
            <AboutSection />
            <ProjectSection />
          </div>
        </div>

        <BackgroundLines />
      </section>
    </>
  );
};

export default HomePageDesktop;
