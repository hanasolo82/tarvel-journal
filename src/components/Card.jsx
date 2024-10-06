import React from "react";

export default function Card(props) {
  
  return (
    <>
    <div className="card-img-container">
      
      <img
        className="card-image"
        src={props.img}
        alt={`${props.place} photo`}
      />
      <div className="card-text-container">
          <div className="text-header">
            <img className="point-card" src="./public/point.svg" alt="waypoint image" />
            <span className="card-country">{props.country}</span>
            <a href={props.link} alt="google maps link" target="_blank" rel="noopener noreferrer" className="google">
            View on Google Maps
            </a>
          </div>
       
        <h2 className="card-place">{props.place}</h2>
        <h3 className="card-date">{props.dateStart} - {props.dateEnd}</h3>
        <h3 className="card-text">
          {props.details}
        </h3>
        
      </div>
    </div>
    <hr className="hr"/>
    </>
  );
}
