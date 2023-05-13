import { type NextPage } from "next";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Tasks from "./components/Tasks";
import { motion } from "framer-motion";
//import { FaHeart, FaRegHeart } from "react-icons/fa";

// yvanlambry@groupe-ae.com
const Home: NextPage = () => {
  return (
    <div className="relative z-10 grid h-full w-full grid-cols-12 gap-2 overflow-hidden rounded ">
      <div className="col-span-3 col-start-1 grid h-full grid-rows-6 gap-2 rounded-md">
        <div className=" row-span-4 rounded bg-gray-500 p-1">
          <h2>Daily objectifs</h2>
        </div>
        <div className=" row-span-2 rounded-md bg-green-300 p-1">
          <h2>Month improvement</h2>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-1 right-80 z-40 mr-3 flex h-7 w-7 items-center justify-center rounded bg-black/80 hover:scale-105"
      >
        <AiOutlinePlus size={24} color="white" />
      </motion.button>
      <div className="relative col-span-6 col-start-4 flex h-full flex-col gap-2 overflow-scroll rounded py-0 scrollbar-hide">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`h-96 w-full rounded p-1 ${
                i % 2 === 0 ? "bg-red-200" : "bg-white"
              }`}
            >
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
              <p>Hey</p>
            </div>
          ))}
      </div>
      <div className="col-span-3 col-start-10 grid grid-rows-18 gap-2 overflow-scroll rounded-md scrollbar-hide">
        <div className="row-span-2 flex  flex-row items-center justify-between gap-2 rounded bg-white p-2">
          <div className=" h-11 w-12 rounded bg-black"></div>
          <div className=" flex w-40 flex-col ">
            <p className="text-lg">Projects</p>
            <div className="flex flex-row ">
              <p className="text-xs">2 Current </p>
              <p className="pl-6 text-xs">34 followed</p>
            </div>
          </div>
          <div className=" h-10 w-10 rounded bg-black"></div>
        </div>

        <div
          style={{ gridRowStart: 3, gridRowEnd: 11 }}
          className="flex rounded"
        >
          <Tasks />
        </div>
        <div
          style={{ gridRowStart: 11, gridRowEnd: 20 }}
          className="flex flex-row justify-between rounded bg-yellow-300 p-1"
        >
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
/*
*
*
*
* 
  const testRef = React.useRef<HTMLDivElement>(null);

  const [currentY, setCurrentY] = React.useState<number>(0);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (currentY === 0) {
      setCurrentY(testRef.current?.clientHeight || 0);
    }
    let screenClientHeight: number = testRef.current?.clientHeight || 0;
    screenClientHeight = screenClientHeight + 0.0005 * screenClientHeight;
    function handleScroll(event: WheelEvent) {
      if (isScrolling) {
        return;
      }

      setIsScrolling(true);

      if (
        event.deltaY > 0 &&
        currentY + screenClientHeight <= screenClientHeight * 5
      ) {
        setCurrentY(currentY + screenClientHeight);
      } else if (currentY - screenClientHeight >= 0 && event.deltaY < 0) {
        setCurrentY(currentY - screenClientHeight);
      }

      testRef.current?.scrollTo({
        top: currentY,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }

    testRef.current?.addEventListener("wheel", (e: WheelEvent) =>
      handleScroll(e)
    );

    return () => {
      testRef.current?.removeEventListener("wheel", (e: WheelEvent) =>
        handleScroll(e)
      );
    };
  }, [currentY, isScrolling]);

  const [isLiked, setIsLiked] = React.useState<boolean>(false);
*
*/

/*
* 
        <div className="relative bottom-1 flex h-full w-[40%] flex-col items-end justify-end gap-3 overflow-hidden rounded-lg">
          <div
            id="yes"
            ref={testRef}
            className=" h-[80%] w-full overflow-hidden rounded-md bg-blue-300 shadow-md scrollbar-hide "
          >
            <div className="h-full w-full bg-purple-300">1</div>
            <div className="h-full w-full bg-blue-300">2</div>
            <div className="h-full w-full bg-yellow-300">3</div>
            <div className="h-full w-full bg-purple-300">4</div>
            <div className="h-full w-full bg-blue-300">5</div>
            <div className="h-full w-full bg-yellow-300">6</div>
          </div>
          <div className=" flex h-12 w-full flex-row items-center justify-evenly gap-2 overflow-scroll scrollbar-hide  ">
            <button
              onClick={() => {
                setIsLiked(!isLiked);
              }}
              className="flex h-8 w-20 items-center justify-center rounded bg-white/80 "
            >
              {isLiked ? (
                <FaHeart
                  size={18}
                  color="red"
                  className="duration-150 ease-in-out hover:scale-125"
                />
              ) : (
                <FaRegHeart
                  size={18}
                  color="red"
                  className="duration-150 ease-in-out hover:scale-125"
                />
              )}
            </button>
            <button
              onClick={() => {
                return;
              }}
              className="h-8 w-20 rounded bg-white/80 hover:scale-102"
            ></button>
          </div>
        </div>
*
*/

/*
*
*
  const [currentTextIndex, setCurrentTextIndex] = React.useState<number>(0);

  const handleNext = () => {
    setCurrentTextIndex(currentTextIndex + 1);
    if (currentTextIndex === 2) {
      setCurrentTextIndex(0);
    }
  };

  const handlePrev = () => {
    setCurrentTextIndex(currentTextIndex - 1);
    if (currentTextIndex === 0) {
      setCurrentTextIndex(2);
    }
  };
          <div className="item-center flex w-[95%] justify-between gap-2 rounded bg-transparent px-3 py-1">
            <button
              onClick={handlePrev}
              className="duration-200 ease-in-out hover:scale-110"
            >
              <BsArrowLeftSquareFill
                size={30}
                color="#fff2cc"
                className="text-gray-500"
              />
            </button>
            <SwitchTag currentNumber={currentTextIndex} />
            <button
              onClick={handleNext}
              className="duration-200 ease-in-out hover:scale-110"
            >
              <BsArrowRightSquareFill
                size={30}
                color="#fff2cc"
                className="text-gray-500"
              />
            </button>
          </div>
*/

/*
          <div className="flex h-36 w-full flex-col items-center justify-center gap-2 overflow-scroll rounded-md bg-[#252525] scrollbar-hide">
          <div className="item-center flex w-[90%] justify-between rounded bg-transparent px-3 py-1">
            <Link
              href={"/"}
              className="duration-200 ease-in-out hover:scale-110"
            >
              <BsArrowLeftSquareFill
                size={24}
                color="#fff2cc"
                className="text-gray-500"
              />
            </Link>
            <Link
              href={"/"}
              className="duration-200 ease-in-out hover:scale-110"
            >
              <BsArrowRightSquareFill
                size={24}
                color="#fff2cc"
                className="text-gray-500"
              />
            </Link>
          </div>
        </div>
*/
