import React from "react";
import Header from "../assets/components/Header";
import Card from "../assets/components/Card";

function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-10/12">
        <div className="w-full flex justify-between my-8 ">
          <h3 className="font-bold text-4xl">Feature Movie</h3>{" "}
          <p className="font-normal text-rose-700 text-lg flex w-28 justify-center items-center gap-2">
            See more{" "}
            <span className="w-4">

            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            </span>
          </p>
        </div>

        <article className="grid grid-cols-4 gap-y-12 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </main>
    </>
  );
}

export default Home;
