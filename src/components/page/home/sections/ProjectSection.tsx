import React from "react";
import projectsData from "@/app/assets/projects.json";

const ProjectSection = () => {
  return (
    <div className="mx-[5rem]   my-[3rem]">
      <h3 className="px-[3rem] pb-[4rem] pt-[6rem] font-heading2 text-[4rem] text-blue-300">
        Selected Works
      </h3>
      <div className="mx-[5rem] flex flex-wrap">
        {projectsData.map(({ id, title, image, live }, index) => (
          <div
            className={`w-[40rem] py-5 ${
              index % 2 === 0 ? "pr-10" : "pl-10"
            } ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
            key={id}
          >
            <a href={live} target="_blank" rel="noopener noreferrer">
              <img src={image} className="rounded-lg" />
              <h3 className="-mt-12 font-heading2 text-[2.5rem] tracking-[2px] text-blue-400 transition-all duration-300 ease-in-out">
                {title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
