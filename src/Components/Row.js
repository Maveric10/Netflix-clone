import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "./row.css";
//for images
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //request = https://api.themoviedb.org/3/fetchUrl data
      setMovies(request.data.results);
      //   console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies)

  const opts = {
    height: '390px',
    width: '100%',
    playerVars: {

      autoplay:1,
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name ||"")
        // .then(url => {
        //   const urlParams = new URL(url).search
        // })
        
    }
  }

  return (
    <div className="row">
      {/* title   */}
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={()=>handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
        {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts} />}
      
    </div>
  );
};

export default Row;
