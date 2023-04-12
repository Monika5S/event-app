import React from "react";
import "./Navbar.css";

export default function Navbar() {
  // onclick event handler

  return (
    <div className="Navbar">
      <nav>
        <p>Events</p>
        <ul>
          <li className="active">
            <a href="#">Global</a>
          </li>
          <li>
            <a href="#">User Specific</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
