import { DataContext } from "@/lib/context";
import { Service } from "@/lib/types";
import { Variants, motion } from "framer-motion";
import React, { useContext, useState } from "react";

const variants: Variants = {
  initial: (i: number) => ({
    y: i * 20,
    opacity: 0,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: (i: number) => ({
      delay: i * 0.5,
      type: "tween",
    }),
  },
};

const Services = ({
  services,
  enter,
  leave,
  variant,
}: {
  services: Service[];
  enter?: () => void;
  leave?: () => void;
  variant?: string;
}) => {
  const [hovered, setHovered] = useState<number>();
  const colors = [
    { bg: "#c6f459", color: "black" },
    { bg: "#f39a8e", color: "black" },
    { bg: "#85cbda", color: "black" },
    { bg: "#8ad8c0", color: "black" },
    { bg: "#c77dff", color: "black" },
    { bg: "#ffb600", color: "black" },
  ];
  return (
    <section
      className="w-full my-10 p-8 flex items-center justify-center "
      id="service"
    >
      <motion.div className="max-w-6xl w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services?.map((e, i) => {
          const bg = colors[i]?.bg;
          const color = colors[i]?.color;
          return (
            <motion.div
              key={e?._id}
              onMouseEnter={() => {
                setHovered(i);
              }}
              onMouseLeave={() => {
                setHovered(undefined);
              }}
              style={{
                backgroundColor: bg,
                color: color,
              }}
              className=" group duration-75  w-full  transition-all overflow-hidden flex-col items-center justify-start border rounded-[30px] odd:rotate-3 flex  py-10 px-6"
              custom={i}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <p className={`w-full z-0 flex text-4xl mx-2 my-4 font-medium  `}>
                {e?.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
