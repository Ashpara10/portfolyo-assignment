"use client";
import { Dot, Menu } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Header = () => {
  const [current, setCurrent] = useState<string>("Home");
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();
  const links = {
    "/": {
      name: "Home",
    },
    "#service": {
      name: "Services",
    },
    "#project": {
      name: "Project",
    },
    "#reviews": {
      name: "Reviews",
    },
    "#contact": {
      name: "Contact",
    },
  };
  return (
    <header className="w-full px-4 py-4" data-header>
      <nav className="w-full flex items-center justify-between ">
        <div>
          <Image
            src={"/assets/images/logo.svg"}
            width={100}
            height={60}
            alt="logo"
          />
        </div>

        <motion.ul className="hidden md:flex  items-center justify-center gap-3">
          {Object.entries(links).map(([path, { name }]) => {
            return (
              <motion.li
                className="flex items-center justify-center px-2"
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
      )}
    </header>
  );
};

export default Header;
