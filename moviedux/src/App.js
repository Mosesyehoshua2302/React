import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Watchlist from "./components/Watchlist";
import MoviesGrid from "./components/MoviesGrid";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  // Holds only movie ids, not full movie objects
  const [watchlist, setWatchlist] = useState([]);

  // Load the movie catalog once on mount (empty deps = runs a single time)
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  // Add the movie if it's not saved, otherwise remove it
  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId],
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
          </Routes>
        </Router>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
