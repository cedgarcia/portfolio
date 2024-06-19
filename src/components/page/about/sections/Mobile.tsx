import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import React from "react";
import sharpenCedrickImage from "@/app/assets/cedrickmobile.png";

const Mobile = () => {
  return (
    <>
      <div>
        {" "}
        {/* <div className="absolute z-50 m-auto h-full w-full  "> */}
        <div className=" ">
          <div className=" px-8 py-[8rem] tablet:px-[10%] tablet:pb-[8rem]">
            <div className="h-screen py-6">
              <div className="w-full">
                <img
                  src={sharpenCedrickImage.src}
                  alt="Cedrick Garcia"
                  className="h-[60%]"
                />
              </div>

              <div className="pt-12 font-heading1 text-[3rem] text-blue-400 tablet:text-[4rem]">
                John Cedrick
                <br /> Garcia
              </div>
              <div className="margin-auto w-11/12 pt-12 font-heading5 text-[1.5rem] tracking-wider text-blue-100 tablet:text-[2.4rem]  ">
                Software Developer, from <br /> Pasig Philippines
              </div>
            </div>
            <div className="">
              <div className="w-full ">
                <div className="pt-8 text-[1.5rem] font-light leading-[2.5rem] text-white    tablet:text-[2rem] tablet:leading-[3rem]  ">
                  My interest in development began in 2020 when I tried to code
                  by completing projects on
                  <a href="" className="font-heading3 text-blue-300">
                    {" "}
                    frontendmentor.io.
                  </a>
                </div>
                <div className="pt-8 text-[1.5rem] font-light leading-[2.5rem] text-white   tablet:text-[2rem] tablet:leading-[3rem]  ">
                  Through this, I learned a great deal about Frontend
                  development. I leverage my passion for Visual Arts to guide
                  the execution of my engineering work.
                </div>
                <div className="pt-8 text-[1.5rem] font-light leading-[2.5rem] text-white   tablet:text-[2rem] tablet:leading-[3rem]  ">
                  Fast-forward to today, and I've had the privilege of working
                  at{" "}
                  <a href="" className="font-heading3 text-blue-300">
                    Bluehive
                  </a>
                  , a software development company. Currently, my main focus is
                  on building accessible, inclusive products and scalable
                  systems for a variety of clients.
                </div>
              </div>
            </div>

            <div className="flex w-fit flex-col tablet:flex-row"></div>
          </div>
        </div>
      </div>{" "}
      {/* </div> */}
    </>
  );
};

export default Mobile;
