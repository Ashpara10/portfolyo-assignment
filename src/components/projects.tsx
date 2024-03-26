import { Project } from "@/lib/types";
import useMousePosition from "@/lib/useMousePosition";
import { ArrowDownLeftIcon } from "lucide-react";
import Image from "next/image";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const containerVariants: Variants = {
  visible: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: { duration: 0.75, type: "tween" },
  },
  hidden: { scale: 0.9, opacity: 0, translateY: 50 },
};

const Projects = ({ projects }: { projects: Project[] }) => {
  const controls = useAnimation();
  const { x, y } = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });
  const [hovered, setHovered] = useState<number | null>();
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    ref.current?.addEventListener("mouseenter", () => {
      setIsInside(true);
    });
    return ref.current?.removeEventListener("mouseenter", () => {
      setIsInside(true);
    });
  });
  useEffect(() => {
    ref.current?.addEventListener("mouseleave", () => {
      setIsInside(false);
    });
    return ref.current?.removeEventListener("mouseleave", () => {
      setIsInside(false);
    });
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section
      ref={ref}
      className="w-full my-10 py-8 px-4 flex flex-col items-center justify-center"
    >
      <motion.div
        initial="hidden"
        variants={containerVariants}
        ref={ref}
        animate={controls}
        className="w-full max-w-5xl gap-3 grid grid-cols-1 "
      >
        <span
          className="w-full col-span-1 
       text-4xl lg:text-5xl font-bold mb-4 text-center"
        >
          My Projects
        </span>
        {isInside && hovered !== null && (
          <motion.div
            style={{
              left: x,
              top: y,
            }}
            transition={{ type: "tween", duration: 0.25, ease: "easeIn" }}
            className={`  z-10 rounded-full  pointer-events-none fixed `}
          >
            <Image
              src={projects[hovered as number]?.image?.url}
              alt={projects[hovered as number]?.image?._id}
              className="rounded-3xl"
              width={400}
              height={350}
            />
          </motion.div>
        )}
        {projects?.slice(0, 4).map((e, i) => {
          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className=" w-full border-b pb-3 border-gray-300/80 flex items-center justify-center flex-col"
            >
              <div className="relative max-w-md group rounded-xl overflow-hidden">
                <div className="w-10 h-10 group-hover:flex hidden rounded-full bg-white absolute bottom-3 left-3  items-center justify-center">
                  <ArrowDownLeftIcon className="rotate-180" />
                </div>
              </div>

              <h3 className="mb-2 text-2xl font-semibold w-full">{e?.title}</h3>

              <span className="mt-2 text-xl font-medium w-full">
                {e?.description}
              </span>
              <div className="w-full flex flex-wrap gap-x-2 mt-2">
                {e?.techStack.map((t, _) => {
                  return (
                    <span
                      className="  bg-gray-300/80 rounded-full px-3 py-1"
                      key={t}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
