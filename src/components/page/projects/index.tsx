import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";

const index: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Faith" />
          </li>
          <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Nicole" />
          </li>
          <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Cruz" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
