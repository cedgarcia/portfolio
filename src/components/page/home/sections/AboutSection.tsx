import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import React from "react";

const AboutSection = () => {
  return (
    <div className="about h-[100vh]">
      <div className="flex h-full flex-col  justify-center">
        <div className="ml-[1.25rem] text-[20px]">
          <ShuffleTextPage text="Hi, I'm" />
        </div>
        <div className="ml-[1.25rem] font-heading1 text-[6rem]">
          <span className="">
            <ShuffleTextPage text="About  " />
          </span>
          <span className="mx-3">
            <ShuffleTextPage text="Me" />
          </span>
        </div>
        <div className="">
          <span className="mx-5"></span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
