import React, { useState } from "react";
import Navbar from "./Navbar";
import GlobalEvent from "./GlobalEvent";
import UserSpecificEvent from "./UserSpecificEvent";
import "./Components.css";

export default function Events() {
  // events state with some predefined event data
  let [events, setEvents] = useState([
    {
      event_name: "Abstract Art Workshop",
      event_date: "Mon, April 18, 2023 | 12:00 pm IST",
      event_location: "Delhi, India",
      event_price: 10.0,
      event_image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
      is_liked: false,
    },
    {
      event_name: "Space Science and Tech Workshop",
      event_date: "Mon, April 21, 2023 | 12:00 pm IST",
      event_location: "Online, Remote",
      event_price: "starts at $0.00",
      event_image:
        "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      is_like: false,
    },
  ]);

  // State to change the navigation page between Global and User Specific handled using the Navbar component
  let [navigation_page, setNavigationPage] = useState("Global");

  // Returning the navbar and the event page based on the navigation_page state
  if (navigation_page === "User Specific") {
    return (
      <div className="Events">
        <Navbar change={setNavigationPage} />
        <div className="container">
          <UserSpecificEvent add_events={setEvents} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Events">
        <Navbar change={setNavigationPage} />
        <div className="container">
          <GlobalEvent all_events={events} />
        </div>
      </div>
    );
  }
}
