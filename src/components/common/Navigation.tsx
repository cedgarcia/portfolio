"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ShuffleText from "@/components/common/ShuffleText";

const Navigation = () => {
  const currentPath = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="relative z-[999]">
      <div className="flex items-center justify-between px-[25px] py-[15px] laptop:hidden">
        <Link className="-mx-5 text-[2rem]" href="/">
          <ShuffleText text="〔∃〙" />
        </Link>
        <div
          className={`flex h-10 w-10 cursor-pointer flex-col justify-evenly`}
          onClick={openNav}
        >
          <div
            className={`${navOpen ? "-rotate-45 delay-300" : "delay-0"} line block h-1 w-full bg-white transition-all duration-300`}
          ></div>
          <div
            className={`${navOpen ? "-my-5 h-0 w-full opacity-0" : "my-2 h-1 w-full opacity-100 delay-300"} line block bg-white transition-all`}
          ></div>
          <div
            className={`${navOpen ? "rotate-45 delay-300" : "delay-0"} line block h-1 w-full bg-white transition-all duration-300`}
          ></div>
        </div>
      </div>

      <div className="relative z-[999] mx-auto mt-[50px] hidden max-w-[1100px] items-center justify-between p-4 px-[10px] py-[30px] font-heading5 text-lg laptop:flex">
        <Link className="-mx-5 text-[2rem]" href="/">
          <ShuffleText text="〔∃〙" />
        </Link>
        <div className="font-heading4 text-[1.2rem] tracking-wide">
          <Link
            className={
              currentPath === "/" ? "m-6 text-blue-400" : "m-6 text-white"
            }
            href="/"
          >
            <ShuffleText text="Home" />
          </Link>
          <Link
            className={
              currentPath === "/projects"
                ? "m-6 text-blue-400"
                : "m-6 text-white"
            }
            href="/projects"
          >
            <ShuffleText text="Projects" />
          </Link>
          <Link
            className={
              currentPath === "/about" ? "m-6 text-blue-400" : "m-6 text-white"
            }
            href="/about"
          >
            <ShuffleText text="About" />
          </Link>
          <Link
            className={
              currentPath === "/contact"
                ? "m-6 text-blue-400"
                : "m-6 text-white"
            }
            href="/contact"
          >
            <ShuffleText text="Contact" />
          </Link>
        </div>
      </div>

      <div
        className={`${navOpen ? "left-0 w-screen opacity-100 " : "left-full w-0 opacity-0"} absolute flex h-screen flex-col justify-evenly overflow-x-hidden  bg-black px-[35px] transition-all duration-300`}
      >
        <div className="flex h-1/3 flex-col justify-between">
          <Link className="font-heading3 text-4xl" href="/">
            Home
          </Link>
          <Link className="font-heading3 text-4xl" href="/projects">
            Projects
          </Link>
          <Link className="font-heading3 text-4xl" href="/about">
            About Me
          </Link>
          <Link className="font-heading3 text-4xl" href="/contact">
            Contact
          </Link>
        </div>

        {/* <div className="flex items-center justify-evenly">
          <div className="social-links flex flex-col">
            <p>Socials</p>
            <Link href="">LinkedIn</Link>
            <Link href="">Github</Link>
            <Link href="">Instagram</Link>
          </div>
          <div className="project-links flex flex-col">
            <p>Projects</p>
            <Link href="">Project1</Link>
            <Link href="">Project2</Link>
            <Link href="">Project3</Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
