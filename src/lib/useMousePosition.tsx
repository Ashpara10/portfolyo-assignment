import { useState, useEffect } from "react";
import { MotionValue, useMotionValue } from "framer-motion";

const useMousePosition = () => {
  const size = 20;
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const updateMousePosition = (e: MouseEvent) => {
    mousePosition.x.set(e?.clientX - size / 2);
    mousePosition.y.set(e?.clientY - size / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
