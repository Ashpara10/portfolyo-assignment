import { About } from "@/lib/types";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const HeroSection = ({ user }: { user: About }) => {
  return (
    <section className="w-full  flex-col md:flex-row flex items-center gap-3 justify-center min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="overflow-hidden w-full flex items-center justify-center">
        <div className=" overflow-hidden rounded-full lg:rounded-y-full ">
          <Image
            alt={user?.avatar._id}
            className="md:aspect-auto aspect-square"
            src={user?.avatar?.url}
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="w-full  flex flex-col items-center justify-center px-4">
        <h2 className="w-full text-4xl lg:text-6xl font-bold tracking-tight">
          {user?.name}
        </h2>
        <span className="my-2 w-full">{user?.subTitle}</span>
        <div className="w-full flex items-center justify-start gap-x-3 mt-2">
          <span className="flex items-center justify-center gap-x-2">
            <MapPin className="text-red-600" />
            {user?.address}
          </span>
          <span className="flex items-center justify-center gap-x-2">
            {user?.phoneNumber}
          </span>
        </div>
        <div className="w-full flex items-center justify-start">
          <p className="mt-2 w-full max-w-lg  opacity-80 font-medium">
            {user?.description}
          </p>
        </div>
      </div>
      {/* <img alt="" className="w-full ab" src={"/blob.svg"} /> */}
    </section>
  );
};

export default HeroSection;
