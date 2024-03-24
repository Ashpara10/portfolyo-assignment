"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { PortfolioData } from "./types";
import useMousePosition from "@/lib/useMousePosition";
import { motion } from "framer-motion";

type IContext = {
  user: PortfolioData | null;
};

const ID = "65b3a22c01d900e96c4219ae";
export const DataContext = createContext<IContext>({ user: null });

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PortfolioData>();
  const { x, y } = useMousePosition();

  useEffect(() => {
    const preloader = document.querySelector("[data-preloader]");

    window.addEventListener("DOMContentLoaded", function () {
      preloader?.classList.add("loaded");
      document.body.classList.add("loaded");
    });
    const getData = async ({ id }: { id?: string }) => {
      const resp = await fetch(`http://localhost:3000/api/data?id=${id}`);
      const res = await resp?.json();
      setData(res?.user);
    };
    getData({ id: ID });
  }, []);
  return (
    <DataContext.Provider value={{ user: data as PortfolioData }}>
      <motion.div
        className="bg-black w-14 h-14 rounded-full z-50"
        style={{ translateX: Number(x), translateY: Number(y) }}
        animate={{
          transition: {
            type: "tween",
            ease: "backOut",
            duration: 0.5,
          },
        }}
      />
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
