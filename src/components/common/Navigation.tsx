"use client";

import { useState } from "react";
import Link from "next/link";

import ShuffleText from "@/components/common/ShuffleText";
import ShuffleTextPage from "./ShuffleTextPage";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNav = () => {
    setNavOpen(!navOpen);
    console.log("clicked");
  };

  return (
    <>
      {/* Mobile Nav */}
      <nav className="flex items-center justify-between px-6 py-4 laptop:hidden">
        <Link className="text-[2rem] font-bold" href="/">
          <ShuffleText text="< 𝘌 />" />
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
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden items-center justify-between bg-red-500 p-4 font-heading5 text-lg laptop:flex">
        <Link className="text-[2rem] font-bold " href="/">
          {/* <ShuffleText text="＜ 𝘌 /＞" /> */}
          {/* <ShuffleText text="< 𝘌 />" /> */}
          <ShuffleText text="JC Garcia" />
        </Link>
        <div className="nav-links">
          <Link className="m-6 " href="/">
            <ShuffleText text="Home" />
          </Link>
          <Link className="m-6 " href="/projects">
            <ShuffleText text="Projects" />
          </Link>
          <Link className="m-6 " href="/about">
            <ShuffleText text="About Me" />
          </Link>
          <Link className="m-6 " href="/contact">
            <ShuffleText text="Contact" />
          </Link>
        </div>
      </nav>
      {/* Mobile Nav Container */}
      <div
        className={`${navOpen ? "left-0 w-screen" : "left-full w-0"} absolute flex h-full flex-col justify-evenly  overflow-x-hidden bg-slate-600 transition-all duration-300`}
      >
        <div className="nav-links flex h-1/3 flex-col justify-between">
          <Link className="font-heading3 text-4xl" href="/">
            Home
          </Link>
          <Link className="font-heading3 text-4xl" href="/projects">
            Projects
          </Link>
          <Link className="font-heading3 text-4xl" href="/about">
            About
          </Link>
          <Link className="font-heading3 text-4xl" href="/contact">
            Contact
          </Link>
        </div>

        <div className="flex items-center justify-evenly">
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
        </div>
      </div>
    </>
  );
};

export default Navigation;
