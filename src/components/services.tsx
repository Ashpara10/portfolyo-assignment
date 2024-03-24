import { DataContext } from "@/lib/context";
import { Service } from "@/lib/types";

import React, { useContext, useState } from "react";

const Services = ({
  services,
  enter,
  leave,
  variant,
}: {
  services: Service[];
  enter: () => void;
  leave: () => void;
  variant: string;
}) => {
  const [hovered, setHovered] = useState<number>();
  return (
    <section
      className="w-full flex flex-col py-10"
      aria-label="my services"
      id="service"
    >
      <div className="flex overflow-hidden space-x-16 group">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {services?.map((e, i) => {
            return (
              <div
                key={e?._id}
                data-hovered
                onMouseEnter={() => {
                  enter();
                  setHovered(i);
                }}
                onMouseLeave={leave}
                className=" min-w-[200px]  flex-col border rounded-xl   border-gray-300/70  flex  px-4 py-3"
              >
                <span className={`w-full text-xl font-semibold `}>
                  {e?.name}
                </span>
                <span className="w-full text-lg font-semibold text-green-600">
                  {e?.charge}
                </span>
                <p className={` opacity-80 tracking-tight leading-snug `}>
                  {e?.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="flex space-x-16 animate-loop-scroll group-hover:paused"
        >
          {services?.map((e, i) => {
            return (
              <div
                key={e?._id}
                data-hovered
                onMouseEnter={() => {
                  enter();
                  setHovered(i);
                }}
                onMouseLeave={leave}
                className=" min-w-[200px]  flex-col border rounded-xl   border-gray-300/70  flex  px-4 py-3"
              >
                <span className={`w-full text-xl font-semibold `}>
                  {e?.name}
                </span>
                <span className="w-full text-lg font-semibold text-green-600">
                  {e?.charge}
                </span>
                <p className={` opacity-80 tracking-tight leading-snug  `}>
                  {e?.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
