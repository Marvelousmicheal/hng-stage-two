import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoviesDetails() {
  const { id } = useParams();
  const [currentMovieDetail, setMovie] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=85ee1352dc115747a67526bdc0f29f44&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data); // You can log 'data' inside this block
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  };

  return (
    <>
      <div className="flex">
        <main className=" border-2 rounded-r-[48px] rounded-b-[48px] pt-12 px-6">
          <div className="flex items-center gap-6">
            <img src="/tv.png" alt="logo" />
            <h4 className="text-[24px] font-semibold">MovieBox</h4>
          </div>
          <div className="mt-16 w-full flex flex-col justify-center items-center gap-10">
            <ul className="w-full flex flex-col justify-center items-center gap-10 text-xl font-semibold text-[#666666]">
              <li className="flex gap-4 items-center w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </li>
              <li className="flex gap-4 items-center w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Movies
              </li>
              <li className="flex gap-4 items-center w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                Tv series
              </li>
              <li className="flex gap-4 items-center w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                Upcoming
              </li>
            </ul>
          </div>
          <div className="mb-10 w-[170px] h-[210px] px-3 py-9 border border-[#BE123C] bg-[#F8E7EB] rounded-3xl mt-16 flex flex-col items-center justify-center">
            <h5 className="font-semibold text-base text-[#333333]">
              Play movie quizes and earn <br /> free tickets
            </h5>
            <p className="text-xs font-medium text-[#666666] my-3">
              50k people are playing now
            </p>
            <button className="bg-[#be123d38] text-[#BE123C] w-4/5 px-2 py-2 rounded-[30px]">
              Start playing
            </button>
          </div>
          <span className="w-full flex items-center justify-center mb-11">
            <h3 className="text-xl font-semibold text-[#666666] flex items-center w-full gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Log out
            </h3>
          </span>
        </main>
        <main className="px-10 ">
          <div className="relative mt-6 w-full ">
            <div className="absolute top-[35%] left-[45%] ">
              <span className="w-[110px] h-[110px] rounded-full bg-[#e8e8e859]  flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </span>
              <h4 className="font-medium text-2xl text-[#E8E8E8]">
                Watch Trailer
              </h4>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.backdrop_path : ""
              }`}
              alt="poster"
            />
          </div>
          <div>
            <div className="flex justify-between items-center my-5 ">
              <main className="flex items-center space-x-3 ">
                <h4 className="font-normal text-2xl space-x-3">
                  <span>
                    {currentMovieDetail
                      ? currentMovieDetail.original_title
                      : ""}
                  </span>{" "}
                  <span>
                    •{" "}
                    {currentMovieDetail
                      ? new Date(currentMovieDetail.release_date).getFullYear()
                      : ""}
                  </span>
                  <span>
                    •{" "}
                    {currentMovieDetail
                      ? (currentMovieDetail.adult = "PG-13")
                      : "PG-18"}
                  </span>{" "}
                  <span>
                    •{" "}
                    {currentMovieDetail
                      ? currentMovieDetail.runtime + " mins"
                      : ""}
                  </span>
                </h4>
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <>
                        <span
                          className="border px-4 py-2 rounded-2xl font-medium text-base text-[#B91C1C]"
                          id={genre.id}
                        >
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </main>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gold"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <h3 className="font-medium text-xl ">
                  <span className="text-[#E8E8E8]">8.5</span> | 350k
                </h3>
              </div>
            </div>
            <div className="flex">
              <main className="w-[774px] pr-5">
                <h3 className="text-xl font-normal leading-8">
                {currentMovieDetail ? currentMovieDetail.overview : ""}
                </h3>

                <div className="mt-12">
                  <h3 className="font-normal text-xl mb-6">
                    Director :{" "}
                    <span className="text-[#BE123C]">Joseph Kosinski</span>
                  </h3>
                  <h3 className="font-normal text-xl mb-6">
                    Writers :{" "}
                    <span className="text-[#BE123C]">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </h3>
                  <h3 className="font-normal text-xl mb-6">
                    Stars:
                    <span className="text-[#BE123C]">
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </h3>
                  <div className="flex w-full mb-8">
                    <button className="bg-[#BE123C] text-xl font-medium text-white px-4 py-2 rounded-xl absolute">
                      Top rated movie #65
                    </button>
                    <input
                      type="text"
                      placeholder="Awards 9 nominations"
                      className="w-full border pr-2 py-2 pl-[14rem] rounded-xl"
                    />
                  </div>
                </div>
              </main>

              <main>
                <button className="bg-[#BE123C] text-xl font-medium text-white px-4 py-2 rounded-[10px] w-full mb-4">
                  See Showtimes
                </button>
                <button className="bg-[#be123d38]  px-2 py-2 rounded-[10px] text-xl font-medium w-full border border-[#be123d31]  mb-4">
                  More watch options
                </button>

                <div className="  bg-[black] relative rounded">
                  <img src="/poster3.png" alt="poster" className="absolute" />
                  <span className="absolute text-white w-full bg-[#1212125e] font-medium text-sm flex justify-center items-center top-[171px] rounded-br-[10px] rounded-bl-[10px] h-[42px]">
                    The Best Movies and Shows in September
                  </span>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MoviesDetails;
