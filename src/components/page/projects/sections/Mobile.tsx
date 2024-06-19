import React from "react";
import projectsData from "@/app/assets/projects.json";
import ShuffleTextPage from "@/components/common/ShuffleTextPage";
const Mobile = () => {
  return (
    <section className="  ">
      <h3 className="px-[3rem] py-[2rem] pt-[3rem] font-heading2 text-[2.5rem] text-blue-400">
        <span className="mr-[1rem]">
          <ShuffleTextPage text=" Selected" />
        </span>
        <ShuffleTextPage text=" Works." />{" "}
      </h3>
      <div className="mx-[3rem] flex flex-wrap">
        {projectsData.map(({ id, title, image, live }, index) => (
          <div
            className={`my-[1rem] w-[40rem] py-5 ${
              index % 2 === 0 ? "pr-2" : "pl-2"
            } ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
            key={id}
          >
            <a href={live} target="_blank" rel="noopener noreferrer">
              <img alt="image" src={image} className="rounded-lg" />
              <h3 className="-mt-12 font-heading2 text-[2.5rem] tracking-[2px] text-blue-200 transition-all duration-300 ease-in-out">
                {title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mobile;
