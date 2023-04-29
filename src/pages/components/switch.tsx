import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  currentNumber: number;
}
const SwitchTag: React.FC<Props> = ({ currentNumber }) => {
  const texts = ["Current", "Dreamy", "Rainy"];

  return (
    <div className="  flex h-8 w-32 items-center justify-center rounded-md bg-white scrollbar-hide">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={texts[currentNumber]}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-center font-semibold">{texts[currentNumber]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default SwitchTag;

/*
<div
  onScroll={handleScroll}
  className="my-2 flex h-10 w-min flex-row items-center justify-between gap-3 overflow-scroll rounded-md bg-transparent scrollbar-hide"
  ref={lastElement}
>
  <button
    // href="/"
    className="flex w-min flex-row items-center justify-center gap-2 rounded bg-white px-2 py-1"
    onClick={() => {
      lastElement.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }}
  >
    <p className="font-semibold ">🤖</p>
    <p className="font-semibold "> Current</p>
  </button>

  <button
    //href="/"
    className="flex w-min flex-row items-center justify-center gap-2 rounded bg-white px-2 py-1"
  >
    <p className="font-semibold">👻 </p>
    <p className="font-semibold"> Chatty</p>
  </button>
  <button
    //href="/"
    className="flex w-min flex-row items-center justify-center gap-2 rounded bg-white px-2 py-1"
  >
    <p className="font-semibold">🦾 </p>
    <p className="font-semibold"> Fit</p>
  </button>
  <button
    //href="/"
    className="flex w-min flex-row items-center justify-center gap-2 rounded bg-white px-2 py-1"
  >
    <p className="font-semibold">☀️</p>
    <p className="font-semibold"> Dreamy</p>
  </button>
  <button
    //href="/"
    onClick={() => {
      firstElement.current?.scrollIntoView({ behavior: "smooth" });
    }}
    ref={firstElement}
    className="flex w-min flex-row items-center justify-center gap-2 rounded bg-white px-2 py-1"
  >
    <p className="font-semibold">👀 </p>
    <p className="font-semibold">Real</p>
  </button>
</div>
*/
