import { About } from "@/lib/types";
import { Dot, MapPin, Minus, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  const inView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });
  useEffect(() => {
    console.log({ inView });
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full   flex-col flex items-center gap-3 justify-center "
    >
      <div className="w-full min-h-[60vh] flex px-3 py-2 flex-col gap-y-2  items-center justify-center">
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "tween", duration: 0.75 }}
          className="max-w-4xl w-full flex  items-center justify-start "
        >
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

          <motion.h2 className="text-5xl mx-4 font-bold md:text-7xl leading-tight lg:text-9xl tracking-tight md:font-semibold ">
            Hey, <br />
            I’m {user?.name.split(" ")[0]}
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
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
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ type: "tween", duration: 0.75 }}
        className="max-w-5xl w-full my-8 flex flex-col items-start justify-center px-4"
        ref={ref}
      >
        <p className="flex opacity-90 text-xl md:text-2xl font-medium">
          {user?.description}
        </p>
        <span className=" flex items-center text-lg md:text-xl font-medium md:font-semibold  justify-start mt-4 gap-2">
          <MapPin className="text-red-600" />
          {user?.address}
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
