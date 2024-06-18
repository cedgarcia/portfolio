import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import ShuffleTextSlow from "@/components/common/ShuffleTextSlow";
import React from "react";

const LandingSection = () => {
  return (
    <>
      <div className="absolute left-[0rem] top-[30rem] -ml-[4rem] rotate-90 font-heading4 text-[13px] uppercase tracking-[5px] text-blue-400">
        <ShuffleTextPage text="scroll down >>>" />
      </div>
      <div className="flex h-full flex-col justify-center pl-[20%]">
        <div className="font-heading3 text-[20px] text-blue-100">
          <ShuffleTextPage text="Hi, I'm" />
        </div>
        <div className="flex flex-row font-heading1 text-[6rem] text-blue-300">
          <span className="mr-5">
            <ShuffleTextSlow text="Ced" />
          </span>
          <span>
            <ShuffleTextSlow text="Garcia" />
          </span>
        </div>
        <div className="">
          <div className="font-heading3 text-[2.5rem] text-blue-400">
            <ShuffleTextPage text="I build digital" />
          </div>
          <div className="font-heading3 text-[3rem] text-blue-500">
            <ShuffleTextPage text="solutions for the web." />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
