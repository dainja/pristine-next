import { MotionValue, PanInfo } from "framer-motion";

export type CarouselProps = {
  children: React.ReactNode;
  autoPlay: boolean;
  interval: number;
  loop: boolean;
};

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
};
