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
    "#project": {
      name: "Project",
      id: "home",
    },
    "#reviews": {
      name: "Reviews",
      id: "home",
    },
    "#contact": {
      name: "Contact",
      id: "home",
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

      {/* <nav className="w-full z-30 max-w-5xl fixed top-3 border border-gray-300/70 bg-white px-4 py-2 rounded-full flex items-center justify-between ">
        <div className="p-2">
          <Image
            src={"/assets/images/logo.svg"}
            width={100}
            height={60}
            alt="logo"
          />
        </div>

        <motion.ul className="hidden md:flex items-center justify-center gap-3">
          {Object.entries(links).map(([path, { name }]) => {
            return (
              <motion.li
                className={`w-full flex relative opacity-70 items-center justify-center px-2 `}
                key={name}
                onClick={() => {
                  setCurrent(name), router.push(path);
                }}
              >
                {current === name && (
                  <motion.div className="absolute w-full h-6 bg-black invert -z-10 rounded-full px-4 py-2" />
                )}
                <span>{name}</span>
              </motion.li>
            );
          })}
        </motion.ul>
        <button onClick={() => setShow(!show)} className="flex md:hidden">
          <Menu />
        </button>
      </nav>
      {show && (
        <motion.div
          onClick={() => setShow(false)}
          className="fixed z-20 bg-black/70 top-0 bottom-0 left-0 right-0"
        />
      )}
      {show && (
        <motion.div
          className=" z-30 bg-white rounded-t-3xl  h-[450px] w-full fixed left-0 bottom-0 right-0"
          initial={{ opacity: 0, translateY: 450 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "tween" }}
        >
          <motion.ul className="w-full flex flex-col  items-center justify-center h-full gap-3">
            {Object.entries(links).map(([path, { name }]) => {
              return (
                <motion.li
                  className="flex text-2xl font-medium tracking-tighter items-center justify-center px-2"
                  key={name}
                  onClick={() => {
                    setCurrent(name), router.push(path);
                  }}
                >
                  <Dot className={`${current === name ? "flex" : "hidden"} `} />
                  <span>{name}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      )} */}
    </header>
  );
};

export default Header;
