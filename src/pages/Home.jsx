import React, { useEffect, useState } from "react";
import Header from "../assets/components/Header";
import Card from "../assets/components/Card";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
const [movies, setmovies]= useState([])

  useEffect(() => {
   

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWVlMTM1MmRjMTE1NzQ3YTY3NTI2YmRjMGYyOWY0NCIsInN1YiI6IjY1MDA5MDNmMWJmMjY2MDBmZmI1YzBhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mg8zCmmzUXYbu9wy1e8mKL3YO1Lm01Al1cQyYrRBwxg'
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          const movieArray=response.data.results
          const moviesmain= movieArray.slice(0,10)
        setmovies(moviesmain)
        })
        .catch(function (error) {
          console.error(error);
        });
  }, []);

  return (
    <>
      <Header />
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

               <Card key={index} {...movie} />
             </Link>
          ))}

          
        </article>
      </main>
    </>
  );
}

export default Home;
