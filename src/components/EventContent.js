import React from "react";
import "./Components.css";

export default function EventContent(props) {
  // Function to change the color of the heart icon
  function likeEvent(e, is_liked) {
    if (e.target.style.color === "red") {
      e.target.style.color = "white";
      is_liked = false;
    } else {
      e.target.style.color = "red";
      is_liked = true;
    }
  }

  return (
    <div className="row  mb-4">
      <div className="col-md-5 pb-4">
        <img
          src={props.event_data.event_image}
          alt="art event"
          className="img-fluid p-2 border shadow-sm rounded"
        />
      </div>
      <div className="col-md-7">
        <div className="row text-md-start pb-5 event-details">
          <h2>{props.event_data.event_name}</h2>
          <p>{props.event_data.event_date}</p>
          <p>{props.event_data.event_location}</p>
          <p>starts at ${props.event_data.event_price}</p>
        </div>
        <div className="row d-flex justify-content-md-end justify-content-center">
          <i className="fa-solid fa-arrow-up-from-bracket text-info"></i>
          <i
            className="fa-solid fa-heart"
            onClick={(e) => {
              likeEvent(e, props.event_data.is_liked);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
