import { Skill } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <section className="w-full">
      <span className="my-2 text-4xl font-bold col-span-3">Skills</span>
      <div className=" w-full animate-loop-scroll flex">
        {skills?.map((e, i) => {
          return (
            <div className="max-w-xs border-x border-gray-300/80 p-2">
              <Image
                // dangerouslyAllowSVG

                width={80}
                height={80}
                className="aspect-square"
                src={e?.image?.url}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
