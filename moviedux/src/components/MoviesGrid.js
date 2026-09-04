import React from "react";
import { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Note: these bands differ from Rating.js's coloring (there "ok" is 3–7)
  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating > 7;
      case "Okay":
        return movie.rating > 5 && movie.rating <= 7;
      case "Bad":
        return movie.rating <= 5;
      default:
        return false;
    }
  };

  // Show only movies that pass all three active filters
  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesSearchTerm(movie, searchTerm) &&
      matchesRating(movie, rating),
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies... "
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <br />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Okay</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            toggleWatchlist={toggleWatchlist}
            isWatchListed={watchlist.includes(movie.id)}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
