import { type NextPage } from "next";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// yvanlambry@groupe-ae.com
const Home: NextPage = () => {
  const testRef = React.useRef<HTMLDivElement>(null);

  const [currentY, setCurrentY] = React.useState<number>(0);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  console.warn("current div height", testRef.current?.clientHeight);
  React.useEffect(() => {
    if (currentY === 0) {
      setCurrentY(testRef.current?.clientHeight || 0);
    }
    let screenClientHeight: number = testRef.current?.clientHeight || 0;
    screenClientHeight = screenClientHeight + 0.0005 * screenClientHeight;
    function handleScroll(event: WheelEvent) {
      if (isScrolling) {
        return; // Don't handle scroll events while scrolling
      }
      console.log("currentY : ", currentY);
      console.log("window.innerHeight:", window.innerHeight);
      console.log("window.scrollY:", window.scrollY);
      console.log("document.body.offsetHeight:", document.body.offsetHeight);
      console.log("scrolled to bottom");

      setIsScrolling(true); // Set isScrolling to true when scrolling starts

      // logic to scroll to a ref
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

      // Set isScrolling back to false once scrolling finishes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // You can adjust the delay to fit your needs
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
  return (
    <div className="relative grid h-full w-full grid-cols-12 overflow-hidden rounded-md ">
      <div className="col-span-12 mx-1 flex h-full items-end justify-center rounded-md  px-1">
        <div className="relative bottom-1 flex h-full w-80 flex-col items-end justify-end gap-3 overflow-hidden rounded-lg">
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
          <div className=" flex h-12 w-full flex-row items-center justify-center gap-2 overflow-scroll scrollbar-hide  ">
            <button
              onClick={() => {
                setIsLiked(!isLiked);
              }}
              className="flex h-8 w-28 items-center justify-center rounded bg-white "
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
              className="h-8 w-28 rounded bg-white hover:scale-102"
            ></button>
            <button
              onClick={() => {
                return;
              }}
              className="h-8 w-28 rounded bg-white hover:scale-102"
            ></button>
            <button
              onClick={() => {
                return;
              }}
              className="h-8 w-28 rounded bg-white hover:scale-102"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
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
