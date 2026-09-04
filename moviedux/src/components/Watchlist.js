import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Welcome to Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          // watchlist stores ids only, so look up the full movie by id
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchListed={true}
            />
          );
        })}
      </div>
    </div>
  );
}
