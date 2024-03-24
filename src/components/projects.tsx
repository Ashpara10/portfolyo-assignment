import { Project } from "@/lib/types";
import { ArrowDownLeftIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="w-full my-10 flex flex-col items-center justify-center">
      <div className=" gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <span
          className="w-full col-span-1 md:col-span-2 lg:col-span-3
       text-4xl font-black tracking-tight"
        >
          Projects
        </span>
        {projects?.slice(0, 9).map((e, i) => {
          return (
            <div
              key={i}
              className="max-w-md flex items-center justify-center flex-col"
            >
              <div className="relative max-w-md group rounded-xl overflow-hidden">
                <Image
                  width={350}
                  height={250}
                  className={"group-hover:opacity-70"}
                  src={e?.image?.url}
                  alt=""
                />
                <div className="w-10 h-10 group-hover:flex hidden rounded-full bg-white absolute bottom-3 left-3  items-center justify-center">
                  <ArrowDownLeftIcon className="rotate-180" />
                </div>
              </div>
              <span className="mts-2 text-xl font-semibold w-full">
                {e?.title}
              </span>
              <div className="w-full flex flex-wrap gap-x-2 mt-2">
                {e?.techStack.map((t, _) => {
                  return (
                    <span
                      className="text-sm border border-gray-300/70 rounded-full px-3 py-1"
                      key={t}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
