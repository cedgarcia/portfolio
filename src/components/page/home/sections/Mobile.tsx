import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import ShuffleTextSlow from "@/components/common/ShuffleTextSlow";
import Link from "next/link";
import projectsData from "@/app/assets/projects2.json";
import Image from "next/image";

const Mobile = () => {
  return (
    <>
      {/* Landing Section */}
      <section className="margin-auto absolute top-[85vh] -ml-[4rem] rotate-90 font-heading4 text-[13px] uppercase tracking-[5px] text-blue-400 tablet:top-[50vh]">
        <ShuffleTextPage text="scroll down >>>" />
      </section>
      <div className="flex h-screen flex-col justify-start py-[8rem] pl-[10%] tablet:h-[60vh]">
        <div className=" font-heading3 text-[2rem] text-blue-100">
          <ShuffleTextPage text="Hi, I'm" />
        </div>
        <div className="flex flex-col py-10  font-heading1 text-[4.5rem] leading-[5rem] text-blue-300 tablet:flex-row">
          <span className="mr-5">
            <ShuffleTextSlow text="Cedrick" />
          </span>
          <span>
            <ShuffleTextSlow text="Garcia" />
          </span>
        </div>
        <div className="">
          <div className="font-heading3 text-[2rem] text-blue-400">
            <ShuffleTextPage text="I build digital" />
          </div>
          <div className="tablet:flex">
            <div className="font-heading3 text-[2.4rem] text-blue-500 tablet:text-[2.6rem]">
              <ShuffleTextPage text="solutions " />
            </div>
            <div className="font-heading3 text-[2.6rem] text-blue-600 tablet:ml-4  tablet:text-blue-500">
              <ShuffleTextPage text="for the web. " />
            </div>
          </div>
        </div>
      </div>
      {/* Driven to build section */}
      <section className="flex flex-col justify-center px-[10%] pb-[4rem]">
        <div className="pb-12 leading-[3.5rem]">
          <span className="font-heading1 text-[2.3rem] text-blue-400 ">
            <ShuffleTextPage text="Driven to build" />
          </span>
          <br />
          <span className="flex flex-col font-heading2 text-[2rem] text-blue-100  tablet:flex-row ">
            <ShuffleTextPage text="outstanding" />
            <span className="tablet:ml-4">
              <ShuffleTextPage text=" web experiences." />
            </span>
          </span>
        </div>
        <div className="text-[1.2rem] leading-[2.5rem] tracking-wide text-white">
          <ShuffleTextPage text="I am a " />
          <span className="ml-2 font-heading1 text-blue-200">
            <ShuffleTextSlow text="Software Engineer" />
          </span>

          <br />
          <ShuffleTextPage text="with expertise in " />
          <span className="font-heading2 text-blue-200 tablet:ml-2">
            <ShuffleTextSlow text="Frontend Web Development" />
          </span>

          <br />
          <ShuffleTextPage text="Currently, I’m focused on building " />
          <br />
          <span>
            <ShuffleTextPage text="and maintaining existing products at" />
            <Link href="https://bluehive.com.ph/">
              <span className="font-heading1 text-blue-500 hover:text-blue-300 tablet:ml-2">
                <ShuffleTextSlow text="BlueHive." />
              </span>
            </Link>
          </span>
        </div>
        {/* <Link
          target="__blank"
          href="https://drive.google.com/file/d/1Rq_CG8o35T16brTgSbqfB6NT3JY303RX/view"
          className="mt-10 w-fit "
        >
          <div className="w-full border-2 px-5 py-2 font-heading2 text-blue-300 duration-300 ease-in-out  hover:border-blue-500 hover:text-blue-500">
            <ShuffleTextPage text="Download CV" />
          </div>
        </Link> */}
      </section>
      {/* Projects Section */}
      <section className="  ">
        <h3 className="px-[3rem] py-[2rem] pt-[3rem] font-heading2 text-[2.5rem] text-blue-400">
          Selected Works
        </h3>
        <div className="mx-[3rem] flex flex-wrap">
          {projectsData.map(({ id, title, image, live }, index) => (
            <div
              className={`my-[1rem] w-[40rem] py-5 ${
                index % 2 === 0 ? "pr-2" : "pl-2"
              } ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
              key={id}
            >
              <a href={live} target="_blank" rel="noopener noreferrer">
                <img alt="image" src={image} className="rounded-lg" />
                <h3 className="-mt-12 font-heading2 text-[2.5rem] tracking-[2px] text-blue-200 transition-all duration-300 ease-in-out">
                  {title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Mobile;
