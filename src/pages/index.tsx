import { type NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { LeafletMapLazyLoaded } from "./LeafletMap.lazy";

export const LazyMap = dynamic(() => import("./LeafletMap"), { ssr: false });
const Home: NextPage = () => {
  return (
    <>
      <div className="col-span-5 col-start-1 flex items-center justify-center ">
        <div className="grid h-[90%] w-[90%] grid-cols-1 grid-rows-12 overflow-hidden rounded-lg bg-white/90">
          <div className="col-span-1 row-span-1 row-start-1 bg-blue-400">
            PHONE COZY
          </div>
          <div className=" col-span-1 row-start-2 bg-yellow-400">
            PHONE COZY
          </div>

          <div className=" row-start-10 col-span-1 row-span-1  bg-yellow-400">
            PHONE COZY
          </div>
        </div>
      </div>
      <div className="col-span-7 col-start-6 flex items-center justify-start ">
        <div className="ml-1 flex h-[90%] w-[95%]  items-center justify-center overflow-hidden rounded-lg bg-white">
          <LeafletMapLazyLoaded />
        </div>
      </div>
    </>
  );
};

export default Home;
