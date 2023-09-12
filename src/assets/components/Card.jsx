import React from "react";
import Rating from "./Rating";

function Card() {
  return (
    <>
      <main className="w-[250px] h-[490px]">
        <div className="w-[250px] h-[370px] relative">
          <img src="testing.png" alt="" className="w-full h-full" />
          <div className="absolute top-0 flex justify-between w-full px-4 mt-4">
            <span className="px-[8px] py-[3px] bg-[#f3f4f69f] rounded-xl text-xs font-bold uppercase flex items-center justify-center">
              tv series
            </span>

            <span className="w-[30px] h-[30px] bg-[#f3f4f69f] rounded-full  flex items-center justify-center">
              <svg
                fill="#D1D5DB"
                stroke="none"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 border-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </span>
          </div>
        </div>
        <p className="font-bold text-xs text-gray-400 mt-3 ">USA, 2016 - Current</p>
        <h3 className="font-bold text-lg mt-6 mb-4" >Stranger Things</h3>

        <Rating />

        <h5 className="font-bold text-xs text-gray-400 my-4">Action, Adventure,Horror</h5>
      </main>
    </>
  );
}

export default Card;
