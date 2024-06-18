import React from "react";

const BackgroundLines = () => {
  return (
    <div className="top-0 h-screen w-full">
      <div className="lines">
        <div className="horizontals">
          {/* Uppermost  */}
          <div className="absolute top-0 h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-5 h-[1px] w-full bg-neutral-900"></div>
          {/* Landing */}
          <div className="absolute top-[20rem] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[40rem] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[46rem] h-[1px] w-full bg-neutral-900"></div>
          {/* About */}
          <div className="absolute top-[50rem] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[65rem] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[77.5rem] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[80rem] h-[1px] w-full bg-neutral-900"></div>
          {/* Project */}
          <div className="absolute top-[50%] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-neutral-900"></div>
          {/* LowerMost */}
          <div className="absolute bottom-5 h-[1px] w-full bg-neutral-900"></div>
          <div className="absolute bottom-0 h-[1px] w-full bg-neutral-900"></div>
        </div>
        <div className="verticals">
          {/* Scroll Down */}
          <div className="absolute left-10 mt-[20rem] h-[20rem] w-[1px] bg-neutral-900"></div>
          {/* LeftMost Side */}
          <div className="absolute left-0 h-full w-[1px] bg-neutral-900"></div>
          <div className="absolute left-5 h-[100vh] w-[1px] bg-neutral-900"></div>
          {/* Hero */}
          <div className="absolute left-[20%] h-[40rem] w-[1px] bg-neutral-900"></div>
          <div className="absolute left-[40%] h-[40rem] w-[1px] bg-neutral-900"></div>
          <div className="absolute right-[40%] h-[40rem] w-[1px] bg-neutral-900"></div>
          <div className="absolute right-[20%] h-[40rem] w-[1px] bg-neutral-900"></div>
          {/* About */}
          <div className="absolute right-[10rem] top-[50rem] h-[30rem] w-[1px] bg-neutral-900"></div>
          <div className="absolute right-[35rem] top-[50rem] h-[30rem] w-[1px] bg-neutral-900"></div>
          <div className="absolute right-[40rem] top-[50rem] h-[30rem] w-[1px] bg-neutral-900"></div>
          {/* RightMost Side */}
          <div className="absolute right-5 h-full w-[1px] bg-neutral-900"></div>
          <div className="absolute right-0 h-full w-[1px] bg-neutral-900"></div>
        </div>
      </div>
      {/* LINES GREEN */}
      <div className="lines green">
        <div className="horizontals">
          {/* Uppermost */}
          <div className="absolute top-0 h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-5 h-[1px] w-full bg-blue-400"></div>
          {/* Landing */}
          <div className="absolute top-[20rem] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[40rem] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[46rem] h-[1px] w-full bg-blue-400"></div>
          {/* About */}
          <div className="absolute top-[50rem] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[65rem] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[80rem] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[77.5rem] h-[1px] w-full bg-blue-400"></div>

          {/* Project */}
          <div className="absolute top-[50%] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-blue-400"></div>
          {/* LowerMost */}
          <div className="absolute bottom-5 h-[1px] w-full bg-blue-400"></div>
          <div className="absolute bottom-0 h-[1px] w-full bg-blue-400"></div>
        </div>
        <div className="verticals">
          {/* Scroll Down */}
          <div className="absolute left-10 mt-[20rem] h-[20rem] w-[1px] bg-blue-400"></div>
          {/* LeftMost Side */}
          <div className="absolute left-0 h-full w-[1px] bg-blue-400"></div>
          <div className="absolute left-5 h-[100vh] w-[1px] bg-blue-400"></div>
          {/* Landing */}
          <div className="absolute left-[20%] h-[40rem] w-[1px] bg-blue-400"></div>
          <div className="absolute left-[40%] h-[40rem] w-[1px] bg-blue-400"></div>
          <div className="absolute right-[40%] h-[40rem] w-[1px] bg-blue-400"></div>
          <div className="absolute right-[20%] h-[40rem] w-[1px] bg-blue-400"></div>
          {/* About */}{" "}
          <div className="absolute right-[10rem] top-[50rem] h-[30rem] w-[1px] bg-blue-400"></div>
          <div className="absolute right-[35rem] top-[50rem] h-[30rem] w-[1px] bg-blue-400"></div>
          <div className="absolute right-[40rem] top-[50rem] h-[30rem] w-[1px] bg-blue-400"></div>
          {/* RightMost Side */}
          <div className="absolute right-5 h-full w-[1px] bg-blue-400"></div>
          <div className="absolute right-0 h-full w-[1px] bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLines;
