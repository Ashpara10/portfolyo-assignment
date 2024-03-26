import { Testimonial } from "@/lib/types";
import useMousePosition from "@/lib/useMousePosition";
import { Variants, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = ({
  data,
}: {
  data: Testimonial[];
  enter?: () => void;
  leave?: () => void;
  variant?: string;
}) => {
  const [isInside, setIsInside] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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
  const { x, y } = useMousePosition();

  const [variant, setVariant] = useState<"default" | "text">("default");
  const cursorVariant: Variants = {
    default: {
      width: 30,
      height: 30,
      backgroundColor: "black",
    },
    text: {
      width: 140,
      height: 140,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };
  return (
    <section
      ref={ref}
      className="w-full relative overflow-y-hidden flex flex-col min-h-screen"
    >
      {/* <span className="text-3xl font-bold mx-3   text-center">
        Testimonials
      </span> */}
      {isInside && (
        <motion.div
          variants={cursorVariant}
          animate={variant}
          style={{
            left: x,
            top: y,
          }}
          transition={{ type: "tween", duration: 0.25, ease: "easeIn" }}
          className={`  z-10 rounded-full  pointer-events-none fixed `}
        />
      )}
      <div className="relative z-0 group py-6 gap-x-4 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="py-12 group-hover:paused animate-marquee flex gap-x-4 items-center justify-center">
          {data?.map((t, i) => {
            return (
              <div
                key={t?._id}
                className={`bg-white mx-2.5 w-full p-3.5 h-fit odd:rotate-3  border min-w-[300px] border-gray-300/90  flex flex-col  rounded-3xl`}
                onMouseEnter={() => setVariant("text")}
                onMouseLeave={() => setVariant("default")}
              >
                <span
                  className={` h-full font-semibold tracking-tight text-xl leading-snug p-2 mb-3 mt-2`}
                >
                  ❝ {t?.review} ❞
                </span>
                <div className="w-full flex  mb-2 items-center justify-center">
                  <div className=" w-fit ">
                    <Image
                      width={50}
                      height={50}
                      src={t?.image.url}
                      className="aspect-square  rounded-full "
                      alt=""
                    />
                  </div>
                  <div className=" w-full ml-2 gap-0 flex flex-col items-start justify-center">
                    <span className=" tracking-tighter leading-none font-semibold">
                      {t?.name}
                    </span>
                    <div className="w-full flex flex-col items-start justify-between">
                      <span className="text-sm opacity-80">{t?.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="absolute gap-x-4 group-hover:paused flex items-center justify-center top-6 py-12 animate-marquee2 "
        >
          {data?.map((t, i) => {
            return (
              <div
                key={t?._id}
                onMouseEnter={() => setVariant("text")}
                onMouseLeave={() => setVariant("default")}
                className={`bg-white min-h-[300px] w-full p-3.5 mx-2-5 h-fit odd:rotate-3  border border-gray-300/90  flex flex-col  rounded-3xl min-w-[300px]`}
              >
                <span
                  className={` h-full font-semibold tracking-tight text-xl leading-snug p-2 mb-3 mt-2`}
                >
                  ❝ {t?.review} ❞
                </span>
                <div className="w-full flex  mb-2 items-center justify-center">
                  <div className=" w-fit ">
                    <Image
                      width={50}
                      height={50}
                      src={t?.image.url}
                      className="aspect-square  rounded-full "
                      alt=""
                    />
                  </div>
                  <div className=" w-full ml-2 gap-0 flex flex-col items-start justify-center">
                    <span className=" tracking-tighter leading-none font-semibold">
                      {t?.name}
                    </span>
                    <div className="w-full flex flex-col items-start justify-between">
                      <span className="text-sm opacity-80">{t?.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
