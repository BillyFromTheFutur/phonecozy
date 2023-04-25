import { type NextPage } from "next";
import React from "react";
const Home: NextPage = () => {
  return (
    <div className="relative  grid h-full w-full grid-cols-12 overflow-hidden rounded-md bg-white/80">
      <div className="col-span-3 h-full bg-red-300"></div>
      <div className="col-span-6 h-full bg-blue-300"></div>
      <div className="col-span-3 h-full bg-green-300"></div>
    </div>
  );
};

export default Home;
