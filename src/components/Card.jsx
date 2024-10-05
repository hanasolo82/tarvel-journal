import React from "react";

export default function Card() {
  return (
    <div>
        <img className="card-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="" />
        <img className="point-card" src="./public/point.svg" alt="" />
        <span className="card-country">JAPAN</span>
        <a href="www.google.maps" alt="google maps link" className="google">View on Google Maps</a>
        <h2 className="card-place">Mount Fuji</h2>
        <h3 className="card-date">12 Jan, 2021 - 24 Jan, 2021</h3>
        <h3 className="card-text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
        </h3>
    </div>
    )
}