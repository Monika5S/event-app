import React from "react";
import "./Components.css";

export default function Navbar(props) {
  function changeColor(e, section) {
    if (section === "Global") {
      document.querySelector(".active").classList.remove("active");
    }
    if (section === "User") {
      document.querySelector(".active").classList.remove("active");
    }
    e.target.parentElement.classList.add("active");
  }

  function navigateGlobal(e) {
    e.preventDefault();
    changeColor(e, "Global");
    props.change("Global");
  }

  function navigateUserSpecific(e) {
    e.preventDefault();
    changeColor(e, "User");
    props.change("User Specific");
  }

  // if (!props.login_staus) {
  //   document.querySelector(".usersection").innerHTML = "Login";
  // } else {
  //   document.querySelector(".usersection").innerHTML = "User Specific";
  // }

  return (
    <div className="Navbar">
      <nav className="d-flex justify-content-between align-items-center">
        <img
          src="https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="logo"
          className="w-25 logo"
        />
        <ul>
          <li className="active">
            <a href="/" onClick={navigateGlobal}>
              Global
            </a>
          </li>

          <li>
            <a href="/" onClick={navigateUserSpecific} className="usersection">
              User Specific
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
