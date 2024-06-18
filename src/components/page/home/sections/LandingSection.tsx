import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import React from "react";

const LandingSection = () => {
  return (
    <div className="ml-[8rem] flex h-full flex-col justify-center  ">
      <div className="font-heading3 text-[20px] text-blue-100">
        <ShuffleTextPage text="Hi, I'm" />
      </div>
      <div className="flex flex-col font-heading1 text-[6rem] text-blue-300">
        <ShuffleTextPage text="Ced Garcia" />
      </div>
      <div className="text-blue-400">
        <div className="font-heading3 text-[2.5rem]">
          <ShuffleTextPage text="I create digital" />
        </div>

        <div className="font-heading3 text-[3rem]">
          <ShuffleTextPage text="solutions for the web." />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
