import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Request";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(request.data.results[0]);
    }
    FetchData();
  }, []);
  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">More info</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
