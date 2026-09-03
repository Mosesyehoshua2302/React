import React from "react";
import "../styles.css";

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
