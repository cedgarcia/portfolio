import React from "react";
import ShuffleText from "@/components/common/ShuffleText";

const index: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <ShuffleText text="Shuffle" />
          </li>
          <li>
            <ShuffleText text="Texts" />
          </li>
          <li>
            <ShuffleText text="Hover" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
