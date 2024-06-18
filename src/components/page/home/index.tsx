import React from "react";
import Navigation from "@/components/common/Navigation";
import HomePageDesktop from "./sections/Desktop";

const index: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1100px] px-[10px]">
        <Navigation />
      </div>
      <div className="hidden laptop:flex">
        <HomePageDesktop />
      </div>
    </>
  );
};

export default index;
