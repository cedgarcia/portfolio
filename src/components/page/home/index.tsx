import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";

const index: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Coder" />
          </li>
          {/* <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Explorer" />
          </li>
          <li className="font-heading1 text-[7rem]">
            <ShuffleTextPage text="Developer" />
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default index;
