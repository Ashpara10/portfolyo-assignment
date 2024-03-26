"use client";
import { Dot, Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Header = () => {
  const [current, setCurrent] = useState<string>("Home");
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();
  const links = {
    "#home": {
      name: "Home",
      id: "home",
    },
    "#service": {
      name: "Services",
      id: "service",
    },
    "#projects": {
      name: "Project",
      id: "projects",
    },
    "#reviews": {
      name: "Reviews",
      id: "testimonials",
    },
    "#contact": {
      name: "Contact",
      id: "contact",
    },
  };
  return (
    <header
      className=" w-full  flex items-center justify-end px-4 "
      data-header
    >
      {show && (
        <motion.div className="fixed top-0 bottom-0 right-0 left-0 z-10 w-full h-screen bg-black/50" />
      )}
      <div className="flex text-lg fixed top-5 right-3 z-20 font-semibold bg-white border border-gray-200/80 backdrop-blur-lg items-center justify-center gap-2 p-1.5 rounded-full py-2">
        <span className="px-2 ml-1 ">Menu</span>
        <motion.button
          onClick={() => setShow(!show)}
          className=" p-1 mr-2 rounded-full"
        >
          {show ? <X /> : <Menu />}
        </motion.button>
        {show && (
          <motion.div
            className=" z-30 bg-white rounded-3xl min-w-[200px] py-3 w-full border border-gray-300/80 fixed top-16 right-0"
            initial={{ opacity: 0, translateY: -450 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ opacity: 0, translateY: -450 }}
            transition={{ type: "tween" }}
          >
            <motion.ul className="w-full flex flex-col  items-center justify-center h-full gap-1 text-lg font-medium ">
              {Object.entries(links).map(([path, { name, id }]) => {
                const ele = document?.getElementById(id);
                return (
                  <motion.li
                    className="w-full  flex border-t first:border-none border-gray-300/80 py-1 tracking-tighter items-center justify-center px-2"
                    key={name}
                    onClick={() => {
                      setCurrent(name),
                        ele?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Dot
                      className={`${
                        current === name ? "visible" : "invisible"
                      } `}
                    />
                    <span className="w-full">{name}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
