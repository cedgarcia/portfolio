import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import Navigation from "@/components/common/Navigation";
import Desktop from "./sections/Desktop";
import Mobile from "./sections/Mobile";
import Footer from "@/components/common/Footer";

const index: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1100px] px-[10px]">
        <Navigation />
      </div>
      <div className="hidden laptop:block">
        <Desktop />
      </div>
      <div className="block laptop:hidden">
        <Mobile />
      </div>
      <Footer />
    </>
  );
};

export default index;
