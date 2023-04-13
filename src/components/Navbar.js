import React from "react";
import "./Components.css";

export default function Navbar(props) {
  function navigateGlobal(e) {
    e.preventDefault();
    props.change("Global");
  }

  function navigateUserSpecific(e) {
    e.preventDefault();
    props.change("User Specific");
  }

  return (
    <div className="Navbar">
      <nav class="d-flex justify-content-between align-items-center">
        <img
          src="https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="logo"
          class="w-25 logo"
        />
        <ul>
          <li className="active">
            <a href="#" onClick={navigateGlobal}>
              Global
            </a>
          </li>

          <li>
            <a href="#" onClick={navigateUserSpecific}>
              User Specific
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
