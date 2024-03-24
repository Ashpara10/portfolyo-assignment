"use client";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Services from "@/components/services";
import { Variants, motion } from "framer-motion";
import Testimonials from "@/components/testimonials";
import { DataContext } from "@/lib/context";
import { About, Project, Service, Skill, Testimonial } from "@/lib/types";
import useMousePosition from "@/lib/useMousePosition";
import { useContext, useEffect, useRef, useState } from "react";

export default function Home() {
  const { user } = useContext(DataContext);
  const { x, y } = useMousePosition();
  const [cursorVariant, setCursorVariant] = useState<"text" | "default">(
    "default"
  );
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  useEffect(() => {
    console.log({ cursorVariant });
  }, [cursorVariant]);
  const variants: Variants = {
    default: {
      width: 50,
      height: 50,
      backgroundColor: "black",
    },
    text: {
      height: 170,
      width: 170,
      x: Number(x),
      y: Number(y),
      backgroundColor: "black",
      mixBlendMode: "difference",
    },
  };

  return (
    <div className="flex flex-col">
      <motion.div
        variants={variants}
        animate={cursorVariant}
        style={{ top: y, left: x, position: "fixed", pointerEvents: "none" }}
        className="rounded-full"
      />
      <HeroSection user={user?.about as About} />
      <Services
        enter={textEnter}
        variant={cursorVariant}
        leave={textLeave}
        services={user?.services as Service[]}
      />
      <Projects projects={user?.projects as Project[]} />
      {/* <Skills skills={user?.skills as Skill[]} /> */}
      <Testimonials
        enter={textEnter}
        variant={cursorVariant}
        leave={textLeave}
        data={user?.testimonials as Testimonial[]}
      />
    </div>
  );
}
