import React, { useState } from "react";
import "./Components.css";

// Displays all events
export default function GlobalEvent(props) {
  // Function to change the color of the heart icon
  function likeEvent(e, current_event) {
    if (current_event.is_liked === true) {
      e.target.style.color = "white";
      current_event.is_liked = false;
    } else {
      e.target.style.color = "red";
      current_event.is_liked = true;
    }
  }

  return (
    <div className="GlobalEvent">
      <h1 className="text-start pt-5 pb-5">Global Events</h1>

      {props.all_events.map((global_event) => {
        return (
          <div className="row  mb-4">
            <div className="col-md-5 pb-4">
              <img
                src={global_event.event_image}
                alt="art event"
                className="img-fluid p-2 border shadow-sm rounded"
              />
            </div>
            <div className="col-md-7">
              <div className="row text-md-start pb-5 event-details">
                <h2>{global_event.event_name}</h2>
                <p>{global_event.event_date}</p>
                <p>{global_event.event_location}</p>
                <p>starts at ${global_event.event_price}</p>
              </div>
              <div className="row d-flex justify-content-md-end justify-content-center">
                <i class="fa-solid fa-arrow-up-from-bracket text-info"></i>
                <i
                  class="fa-solid fa-heart"
                  onClick={(e) => {
                    likeEvent(e, global_event);
                  }}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
