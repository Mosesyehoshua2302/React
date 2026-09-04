import React from "react";
import "../styles.css";
import Rating from "./Rating";

export default function MovieCard({ movie, isWatchListed, toggleWatchlist }) {
  // Fall back to a placeholder when a movie's image fails to load
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };
  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <Rating rating={movie.rating} />
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchListed}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchListed ? "In watchlist" : "add to watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
