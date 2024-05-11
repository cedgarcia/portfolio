"use client";

import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNav = () => {
    setNavOpen(!navOpen);
    console.log("clicked");
  };

  return (
    <>
      {/* Mobile Nav */}
      <nav className="flex">
        <Link href="/">Logo</Link>
        {/* <div className="fixed"> */}
        <div
          className={`${navOpen ? "" : ""} flex h-10  w-10 cursor-pointer flex-col  justify-evenly bg-slate-600`}
          onClick={openNav}
        >
          <div
            className={`${navOpen ? "-rotate-45 delay-300 " : "delay-0 "} line block  h-1  w-full bg-white  transition-all  duration-300 `}
          ></div>
          <div
            className={`${navOpen ? "-my-5 h-0 w-full opacity-0" : "my-2 h-1 w-full opacity-100 delay-300"} line  block  bg-white transition-all  `}
          ></div>
          <div
            className={`${navOpen ? "rotate-45 delay-300 " : " delay-0"} line block h-1 w-full  bg-white transition-all duration-300`}
          ></div>
        </div>
        {/* </div> */}
      </nav>
      <div
        className={`${navOpen ? "left-0" : "left-full"} absolute  h-screen w-screen bg-slate-600 transition-all duration-300`}
      >
        <div className="nav-links">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
