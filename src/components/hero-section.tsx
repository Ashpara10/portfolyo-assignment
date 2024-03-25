import { About } from "@/lib/types";
import { Dot, MapPin, Minus, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  user,
  enter,
  leave,
  variant,
}: {
  user: About;
  enter?: () => void;
  leave?: () => void;
  variant?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const desc = user?.description.split(" ");

  return (
    <section
      ref={ref}
      id="home"
      className="w-full   flex-col flex items-center gap-3 justify-center min-h-screen"
    >
      <div className="w-full flex px-3 py-2 flex-col gap-y-2 min-h-[90vh] items-center justify-center">
        <div className="max-w-4xl w-full flex  items-center justify-start ">
          <Image
            src={user?.avatar?.url}
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            className="rounded-full md:hidden flex aspect-square "
            alt={user?.avatar?.public_id}
            quality={100}
            loading="eager"
          />
          <motion.h2
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "tween", duration: 0.75 }}
            onMouseEnter={enter}
            onMouseLeave={leave}
            className="text-5xl mx-4 font-bold md:text-7xl leading-tight lg:text-9xl tracking-tight md:font-semibold "
          >
            Hey, <br />
            I’m {user?.name.split(" ")[0]}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: "tween", duration: 0.75 }}
          className="w-full items-center justify-end flex max-w-4xl"
        >
          <Image
            src={user?.avatar?.url}
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            quality={100}
            loading="eager"
            className="rounded-full hidden md:flex aspect-square "
            alt={user?.avatar?.public_id}
          />
          <div className="max-w-xl w-full flex flex-col">
            <span className="w-full text-3xl flex items-center justify-start  md:font-semibold ">
              <Minus className="size-8 mb-8 mr-3 font-bold md:size-12 lg:size-14 md:font-semibold" />{" "}
              {user?.subTitle} 🌱
            </span>
            <span className=" flex items-center text-lg md:text-xl  font-medium md:font-semibold justify-start ml-2 mt-2 md:ml-10 gap-2">
              <MapPin className="text-red-600" />
              {user?.address}
            </span>
          </div>
        </motion.div>
      </div>
      <div
        ref={ref}
        className="min-h-screen px-3 py-2 flex items-center justify-center w-full bg-black"
      >
        <motion.p className="max-w-5xl gap-2 w-full flex flex-wrap text-white   text-3xl md:text-4xl lg:text-5xl leading-tight font-medium md:font-semibold">
          {desc?.map((d, i) => {
            return <motion.span key={i}>{d}</motion.span>;
          })}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
