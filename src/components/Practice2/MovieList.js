import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <>
      <ul className="">
        {props.movie.map((movies) => (
          <Movie
            id={movies.id}
            title={movies.title}
            openingText={movies.openingText}
            releaseDate={movies.releaseDate}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
