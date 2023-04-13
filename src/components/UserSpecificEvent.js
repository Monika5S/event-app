import React, { useState } from "react";
import "./Components.css";

// Displays user specific events and adds new events to the both global and this section
export default function UserSpecificEvent(props) {
  let [user_events, setUserEvents] = useState([]);

  return (
    <div className="UserSpecificEvent">
      <h1 className="text-start pt-5 pb-5">User Specific Events</h1>
    </div>
  );
}
