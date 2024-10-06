import React from "react";

export default function Card() {
  return (
    <div className="card-img-container">
      <img
        className="card-image"
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        alt=""
      />
      <div className="card-text-container">
          <div className="text-header">
            <img className="point-card" src="./public/point.svg" alt="" />
            <span className="card-country">JAPAN</span>
            <a href="https://www.google.es/maps/place/Monte+Fuji/@35.3606421,138.7170422,2954m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" alt="google maps link" target="_blank" rel="noopener noreferrer" className="google">
            View on Google Maps
            </a>
          </div>
       
        <h2 className="card-place">Mount Fuji</h2>
        <h3 className="card-date">12 Jan, 2021 - 24 Jan, 2021</h3>
        <h3 className="card-text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </h3>
      </div>
    </div>
  );
}
