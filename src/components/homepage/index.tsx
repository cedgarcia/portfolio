import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";

const index: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <ShuffleTextPage text="Coder" />
          </li>
          <li>
            <ShuffleTextPage text="Explorer" />
          </li>
          <li>
            <ShuffleTextPage text="Developer" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;