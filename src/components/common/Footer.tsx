import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

import arrow from "../../../public/arrow.svg";
import ShuffleTextPage from "./ShuffleTextPage";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full flex-col  items-center bg-white text-black tablet:flex-row tablet:justify-between tablet:px-[3rem] tablet:py-[3rem] laptop:px-[8rem]">
        <div className="flex flex-col items-center justify-center py-6 tablet:flex-row tablet:items-start">
          <div className="flex flex-col items-center ">
            <Link href="/" className="font-heading1 text-[2rem] text-black">
              Ced Garcia
            </Link>
            <div className="flex py-6">
              <Link href="">
                <FaLinkedin className="mx-2 text-2xl" />
              </Link>
              <Link href="">
                <FaGithub className="mx-2 text-2xl" />
              </Link>
              <Link href="">
                <FaCodepen className="mx-2 text-2xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col font-semibold tablet:ml-[3rem] laptop:ml-[10rem]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <Link href="" className="mt-10 w-fit">
              <div
                className="
                flex w-full items-center px-5 py-2 font-heading2 text-black duration-300 ease-in-out"
              >
                <span className="mx-2">
                  <ShuffleTextPage text="Download CV" />
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="none" fillRule="evenodd" stroke="#000">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
          <div className="py-6">
            <span className="font-heading4 text-gray-700">Portfolio</span> •{" "}
            <span className="font-heading1 text-gray-700">2024</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
