import React, { useEffect, useState } from "react";

import Card from "../assets/components/Card";
import axios from "axios";
import { Link } from 'react-router-dom';
import Rating from "../assets/components/Rating";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [search]);

  const fetchMovies = () => {
    const type = search ? "search" : "discover";
    const query = search ? `query=${encodeURIComponent(search)}&` : "";

    axios.get(`https://api.themoviedb.org/3/${type}/movie`, {
      params: {
        api_key: '85ee1352dc115747a67526bdc0f29f44',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        ...query,
      },
    })
    .then(function (response) {
      const movieArray = response.data.results;
      const moviesMain = movieArray.slice(0, 10);
      confirm
      setMovies(moviesMain);

    })
    .catch(function (error) {
      console.error(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <>
      <header className="w-w-screen  h-[600px]  ">
        {/* Your header content */}
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
            <Rating />
            <h3 className="text-sm font-medium mb-8 mt-8 pr-8">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </h3>
            <button className="px-[16px] py-[6px] bg-[#BE123C] rounded-md flex items-center gap-3"> <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={19}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>watch trailer</button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-10/12">
        <div className="w-full flex justify-between my-8 ">
          <h3 className="font-bold lg:text-4xl text-lg">Feature Movie</h3>{" "}
          <p className="font-normal text-rose-700 text-lg flex w-28 justify-center items-center gap-2">
            See more
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
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
          {movies.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} key={index}>
              <Card key={index} {...movie}  data-testid={ movie-card} />
            </Link>
          ))}
        </article>
      </main>
    </>
  );
}

export default Home;
