import ShuffleTextPage from "@/components/common/ShuffleTextPage";
import Link from "next/link";
import React from "react";
const ContactSection = () => {
  return (
    <>
      <div className="px-8 py-[8rem] tablet:px-[10%] tablet:pb-[8rem]">
        <div className="font-heading1 text-[3rem] text-blue-400 tablet:text-[4rem]">
          Let&apos;s team up!
        </div>
        <div className="text-[1.2rem] text-white">
          Do you have a cool project you&apos;d like me to work on? Drop me a
          line!
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
    </>
  );
};

export default ContactSection;
