import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";

const index: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <ShuffleTextPage text="Projects" />
          </li>
          <li>
            <ShuffleTextPage text="Are" />
          </li>
          <li>
            <ShuffleTextPage text="Here" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
