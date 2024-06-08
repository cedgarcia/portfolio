import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import Navigation from "@/components/common/Navigation";

const index: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1100px] px-[10px]">
        <Navigation />
        <ul>
          <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Home" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
