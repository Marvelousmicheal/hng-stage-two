import React from "react";
import Rating from "./Rating";

function Header() {
  return (
    <>
      <header className="w-w-screen  h-[600px]  ">
        <div className="mx-auto lg:w-10/12 w-full px-4 lg:px-0 ">
          <nav className="flex items-center justify-between text-white mb-4 pt-5 flex-wrap">
            <div className="flex items-center gap-6">
              <img src="tv.png" alt="logo" />{" "}
              <h4 className="lg:text-[24px] text-lg font-semibold">MovieBox</h4>
            </div>
            <div className="w-[525px] relative  lg:order-2 order-3 mt-2 lg:mt-0">
              <input
                type="search"
                name=""
                id=""
                placeholder="what do you want to watch?"
                className="w-full px-[19px] py-[6px] bg-transparent border border-gray-400 rounded-md text-white placeholder-white "
              />
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-[20px] absolute top-[30%] right-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 order-2 lg:order-3">
              {" "}
              <h5 className="text-[16px] font-bold">Sign in</h5>{" "}
              <span
                className="bg-[#BE123C] w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </span>
            </div>
          </nav>
          <div className="w-[404px] text-white mt-16">
            <h1 className=" font-bold text-5xl mb-8  ">
              John wick 3: <br /> parabellum
            </h1>
          <Rating/>
            <h3 className="text-sm font-medium mb-8 mt-8 pr-8">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </h3>
            <button className="px-[16px] py-[6px] bg-[#BE123C] rounded-md flex items-center gap-3"> <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={19} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg>watch trailer</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
