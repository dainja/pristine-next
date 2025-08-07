import React from "react";
import { motion, MotionStyle } from "framer-motion";
import { SliderProps } from "./types";

const pageStyle: MotionStyle = {
  width: "100%",
  height: "100%",
  display: "inline-block",
  flex: "none",
};

const Slider: React.FC<SliderProps> = ({ x, i, onDragEnd, children }) => {
  const MotionDiv = motion.div as any;
  
  return (
    <MotionDiv
      style={{
        ...pageStyle,
        x,
        left: `${i * 100}%`,
        right: `${i * 100}%`,
      }}
      // drag="x"
      dragElastic={0.3}
      onDragEnd={onDragEnd}
    >
      {children}
    </MotionDiv>
  );
};

export default Slider;