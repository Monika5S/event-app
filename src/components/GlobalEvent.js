import React from "react";
import EventContent from "./EventContent";
import "./Components.css";

// Displays all events
export default function GlobalEvent(props) {
  return (
    <div className="GlobalEvent">
      <h1 className="text-start pt-5 pb-5">Global Events</h1>

      {props.all_events.map((global_event) => {
        return <EventContent event_data={global_event} />;
      })}
    </div>
  );
}
