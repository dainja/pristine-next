import React from "react";
import {
  animate,
  AnimationOptions,
  PanInfo,
  useMotionValue,
} from "framer-motion";

import { CarouselProps } from "./types";
import Slider from "./slider";

const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  display: "flex",
};

const transition: AnimationOptions<any> = {
  type: "spring",
  bounce: 0,
};

// eslint-disable-next-line react/display-name
const Container = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>((props, ref) => (
  <div ref={ref} style={containerStyle}>
    {props.children}
  </div>
));

export const Carousel = ({
  children,
  autoPlay = true,
  interval = 2000,
  loop = true,
}: CarouselProps) => {
  const x = useMotionValue(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(0);

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset.x > clientWidth / 4) {
      handlePrev();
    } else if (offset.x < -clientWidth / 4) {
      handleNext();
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const childrens = React.Children.toArray(children);

  const handleNext = () => {
    const idx = loop ? 0 : index;
    setIndex(index + 1 === childrens.length ? idx : index + 1);
  };

  const handlePrev = () => {
    const idx = loop ? childrens.length - 1 : 0;
    setIndex(index - 1 < 0 ? idx : index - 1);
  };

  React.useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  React.useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [handleNext, interval]);

  return (
    <Container ref={containerRef}>
      {childrens.map((child, i) => (
        <Slider onDragEnd={handleEndDrag} x={x} i={i} key={i}>
          {child}
        </Slider>
      ))}
    </Container>
  );
};
