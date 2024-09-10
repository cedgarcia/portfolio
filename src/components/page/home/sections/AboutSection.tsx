import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import ShuffleTextSlow from "@/components/common/ShuffleTextSlow";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="my-[5rem] flex flex-col justify-center pl-[8rem]">
      <div className="pb-12 leading-[3.5rem]">
        <span className="font-heading1 text-[2.3rem] text-blue-400 ">
          <ShuffleTextPage text="Driven to build" />
        </span>
        <br />
        <span className="font-heading2 text-[2rem]  text-blue-100 ">
          <ShuffleTextPage text="outstanding web experiences." />
        </span>
      </div>
      <div className="text-[1.2rem] leading-[2.5rem] tracking-wide text-white">
        <ShuffleTextPage text="I am a " />
        <span className="ml-2 font-heading1 text-blue-200">
          <ShuffleTextSlow text="Software Engineer" />
        </span>

        <br />
        <ShuffleTextPage text="with expertise in " />
        <span className="ml-2 font-heading2 text-blue-200">
          <ShuffleTextSlow text="Frontend Web Development" />
        </span>

        <br />
        <ShuffleTextPage text="Currently, I’m focused on building " />
        <br />
        <span>
          <ShuffleTextPage text="and maintaining existing products at" />
          <Link href="https://bluehive.com.ph/" target="_blank">
            <span className="ml-2 font-heading1 text-blue-500 hover:text-blue-300">
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
    </div>
  );
};

export default AboutSection;
