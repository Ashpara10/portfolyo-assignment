import { Testimonial } from "@/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Testimonials = ({
  data,
  enter,
  leave,
  variant,
}: {
  data: Testimonial[];
  enter: () => void;
  leave: () => void;
  variant: string;
}) => {
  const [hovered, setHovered] = useState<number>();

  return (
    <section className="w-full flex flex-col my-6 gap-y-4">
      <span className="text-3xl font-bold mx-3  text-center">Testimonials</span>
      <div className=" w-full flex overflow-x-hidden px-4 py-10">
        {data?.map((t, i) => {
          return (
            <div
              key={t?._id}
              onMouseEnter={() => {
                enter();
                setHovered(i);
              }}
              onMouseLeave={leave}
              className={`  w-full px-3 py-2 mx-2 h-fit odd:rotate-3  border border-gray-300/80  flex flex-col  rounded-2xl`}
            >
              <span
                className={`${
                  hovered === i && variant === "text" && "text-white"
                } h-full font-medium tracking-tight leading-snug p-2 mb-3 mt-2`}
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
                    <div className="flex   items-center justify-center gap-x-1">
                      {[...Array(5)].map((_, i) => {
                        //   const rand = Math.floor(Math.random() * 5);
                        return (
                          <Star
                            fill={i < 4 ? "yellow" : "transparent"}
                            className="size-4 text-yellow-400 opacity-90"
                            key={i}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
