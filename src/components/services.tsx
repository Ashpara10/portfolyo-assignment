import { DataContext } from "@/lib/context";
import { Service } from "@/lib/types";
import useMousePosition from "@/lib/useMousePosition";
import {
  Variants,
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";

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

const containerVariants: Variants = {
  visible: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: { duration: 0.75, type: "tween" },
  },
  hidden: { scale: 0.9, opacity: 0, translateY: 50 },
};

const Services = ({
  services,
}: {
  services: Service[];
  enter?: () => void;
  leave?: () => void;
  variant?: string;
}) => {
  const controls = useAnimation();
  const { x, y } = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });
  const [hovered, setHovered] = useState<number | null>();

  const colors = [
    { bg: "#c6f459", color: "black" },
    { bg: "#f39a8e", color: "black" },
    { bg: "#85cbda", color: "black" },
    { bg: "#8ad8c0", color: "black" },
    { bg: "#c77dff", color: "black" },
    { bg: "#ffb600", color: "black" },
  ];
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section
      className="w-full my-10 p-8 flex relative overflow-hidden items-center justify-center "
      id="service"
    >
      {inView && hovered !== null && (
        <motion.div
          style={{
            left: x,
            top: y,
          }}
          transition={{ type: "tween", duration: 0.25, ease: "easeIn" }}
          className={`gap-0.5 bg-white border border-gray-300/70 rounded-lg flex flex-col items-start justify-center px-4 py-2  pointer-events-none fixed z-10 `}
        >
          <span className="text-lg font-medium">
            {services[hovered as number]?.name}
          </span>
          <span className="text-green-600">
            {services[hovered as number]?.charge}
          </span>
        </motion.div>
      )}
      <motion.div
        initial="hidden"
        variants={containerVariants}
        ref={ref}
        animate={controls}
        className="max-w-6xl w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
      >
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
                setHovered(null);
              }}
              style={{
                backgroundColor: bg,
                color: color,
              }}
              className=" hover:saturate-[75%] duration-75  w-full  transition-all overflow-hidden flex-col items-center justify-start border rounded-[30px]  flex  py-10 px-6"
              custom={i}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <p
                className={`w-full z-0 flex text-3xl md:text-4xl mx-2 my-4 font-medium  `}
              >
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
