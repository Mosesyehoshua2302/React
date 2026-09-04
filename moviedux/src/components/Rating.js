import React from "react";
import "../styles.css";

// Map a numeric rating to a CSS class for color coding: <3 bad, 3–7 ok, >7 good
function ratingClass(rating) {
  if (rating < 3) return "rating-bad";
  if (rating <= 7) return "rating-ok";
  return "rating-good";
}

export default function Rating({ rating }) {
  return (
    <span className={`movie-card-rating ${ratingClass(rating)}`}>{rating}</span>
  );
}
