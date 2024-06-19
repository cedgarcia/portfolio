import React from "react";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import Desktop from "./sections/Desktop";

const index: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1100px] px-[10px]">
        <Navigation />
        <div className="hidden laptop:block">
          <Desktop />
        </div>
        <div className="block laptop:hidden">
          <div className="h-screen px-8 py-[8rem] tablet:px-[10%] tablet:pb-[8rem] tablet:pt-[30%]">
            <div className="font-heading2 text-[2rem] text-blue-200 tablet:text-[3rem]">
              hello
            </div>
            <div className="py-4 font-heading1 text-[3rem] text-blue-400 tablet:text-[4rem]">
              Let&apos;s team up!
            </div>
            <div className="text-[1.2rem] text-white">
              Do you have a cool project you&apos;d like me to work on? Drop me
              a line!
            </div>
            <div className="text-[1.2rem] text-white">
              You can get in touch with me via:
            </div>

            <div className="flex w-fit flex-col tablet:flex-row">
              <a
                href="mailto:icedgarcia@gmail.com"
                className="mt-10 w-fit  tablet:mr-4 "
              >
                <div className="w-full border-2 px-5 py-2 font-heading2 uppercase text-blue-300 duration-300 ease-in-out  hover:border-blue-500 hover:text-blue-500">
                  <ShuffleTextPage text="icedgarcia@gmail.com" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/cedrickgarcia/"
                className="mt-4 w-fit tablet:mt-10 "
              >
                <div className="w-full border-2 px-5 py-2 font-heading2 uppercase text-blue-300 duration-300 ease-in-out  hover:border-blue-500 hover:text-blue-500">
                  <ShuffleTextPage text="Linkedin" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
