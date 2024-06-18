import React from "react";

const BackgroundLines = () => {
  return (
    <div className="top-0 h-screen w-full">
      <div className="lines">
        <div className="horizontals">
          <div className="absolute top-0 h-[1px] w-full bg-gray-700"></div>
          <div className="absolute top-5 h-[1px] w-full bg-gray-700"></div>
          <div className="absolute top-[20rem] h-[1px] w-full bg-gray-700"></div>
          {/* <div className="absolute top-[16rem] h-[1px] w-full bg-gray-700"></div> */}
          <div className="absolute top-[40rem] h-[1px] w-full bg-gray-700"></div>
          <div className="absolute top-[50%] h-[1px] w-full bg-gray-700"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-gray-700"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-gray-700"></div>
          <div className="absolute bottom-5 h-[1px] w-full bg-gray-700"></div>
        </div>
        <div className="verticals">
          <div className="absolute left-0 h-full w-[1px] bg-gray-700"></div>
          <div className="absolute left-5 h-full w-[1px] bg-gray-700"></div>
          <div className="absolute left-10 mt-[20rem] h-[20rem] w-[1px] bg-gray-700"></div>
          <div className="absolute left-[20%] h-full w-[1px] bg-gray-700"></div>
          <div className="absolute left-[40%] h-full w-[1px] bg-gray-700"></div>
          <div className="absolute right-[40%] h-full w-[1px] bg-gray-700"></div>
          <div className="absolute right-[20%] h-full w-[1px] bg-gray-700"></div>
          <div className="absolute right-5 h-full w-[1px] bg-gray-700"></div>
          <div className="absolute right-0 h-full w-[1px] bg-gray-700"></div>
        </div>
      </div>
      <div className="lines green">
        <div className="horizontals">
          <div className="absolute top-0 h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-5 h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[20rem] h-[1px] w-full bg-blue-400"></div>
          {/* <div className="absolute top-[16rem] h-[1px] w-full bg-blue-400"></div> */}
          <div className="absolute top-[40rem] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[50%] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute top-[70%] h-[1px] w-full bg-blue-400"></div>
          <div className="absolute bottom-5 h-[1px] w-full bg-blue-400"></div>
        </div>

        <div className="verticals">
          <div className="absolute left-0 h-full w-[1px] bg-blue-400"></div>
          <div className="absolute left-5 h-full w-[1px] bg-blue-400"></div>
          <div className="absolute left-10 mt-[20rem] h-[20rem] w-[1px] bg-blue-400"></div>
          <div className="absolute left-[20%] h-full w-[1px] bg-blue-400"></div>
          <div className="absolute left-[40%] h-full w-[1px] bg-blue-400"></div>
          <div className="absolute right-[40%] h-full w-[1px] bg-blue-400"></div>
          <div className="absolute right-[20%] h-full w-[1px] bg-blue-400"></div>
          <div className="absolute right-5 h-full w-[1px] bg-blue-400"></div>
          <div className="absolute right-0 h-full w-[1px] bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLines;
