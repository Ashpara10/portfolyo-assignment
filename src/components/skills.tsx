import { Skill } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Skills = ({ skills }: { skills: Skill[] }) => {
  console.log({ skills });
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
      <span className="my-2 text-4xl font-bold col-span-4">Skills</span>
      <div className="max-w-3xl w-full grid grid-cols-2 md:grid-cols-3 px-4 py-6 lg:grid-cols-4 gap-3">
        {skills?.map((e, i) => {
          return (
            <div
              key={i}
              className="max-w-md bg-white transition-all duration-75 ease-linear hover:shadow-xl hover:shadow-gray-300/80 hover:translate-x-2 hover:-translate-y-5 border p-3 rounded-3xl border-gray-300/70 w-full flex flex-col items-center justify-start"
            >
              <div className="w-full flex items-center justify-start gap-3">
                <Image
                  width={40}
                  height={40}
                  className="aspect-square"
                  src={e?.image?.url}
                  alt={`${e?.name}`}
                />
                <span className="text-lg font-medium">{e?.name}</span>
              </div>
              <div className="w-full flex items-center justify-start mb-2 mt-3 ">
                <span className="px-1">{e?.percentage}%</span>
                <div className="w-[100px] overflow-hidden rounded-xl  bg-gray-300/70 h-2">
                  <div
                    style={{
                      width: `${e?.percentage}px`,
                    }}
                    className="bg-green-400 h-2"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
