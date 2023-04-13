import React, { useState } from "react";
import EventContent from "./EventContent";
import Login from "./Login";
import Register from "./Register";
import "./Components.css";

// Displays user specific events and adds new events to the both global and this section
export default function UserSpecificEvent(props) {
  let [login_status, setLoginStaus] = useState(false);
  let [formdata, setFormData] = useState();
  let [image, setImage] = useState(null);
  let [user_events, setUserEvents] = useState([
    {
      event_name: "Abstract Art Workshop",
      event_date: "Mon, April 18, 2023 | 12:00 pm IST",
      event_location: "Delhi, India",
      event_price: 10.0,
      event_image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
      is_liked: false,
    },
  ]);

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      event_name: e.target.event_name.value,
      event_date: e.target.event_date.value,
      event_location: e.target.event_location.value,
      event_price: e.target.event_price.value,
      event_image: image,
      is_liked: false,
    });
    setUserEvents([...user_events, formdata]);
    props.add_events([...props.global_events, formdata]);
  }

  if (login_status === false) {
    return (
      <div className="mt-5 mb-5 row">
        <div className="col-md-6 p-3 pe-5">
          <h2>Register</h2>
          <Register />
        </div>

        <div className="col-md-6 p-3 ps-5">
          <h3>Login</h3>
          <Login login_staus={login_status} setLoginStaus={setLoginStaus} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="UserSpecificEvent">
        <h1 className="text-start pt-5 pb-5">User Specific Events</h1>
        {/* <img src={image} alt="prev" /> */}
        {user_events.map((events) => {
          return <EventContent event_data={events} />;
        })}

        {/* form to add events */}
        <div className="mt-5">
          <h2>Add Events</h2>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label for="event_name">Event Name</label>
              <input
                type="text"
                className="form-control"
                id="event_name"
                placeholder="Enter event name"
              />
            </div>
            <div className="form-group mb-3">
              <label for="event_date">Event Date</label>
              <input
                type="datetime-local"
                className="form-control"
                id="event_date"
                placeholder="Enter event date"
              />
            </div>
            <div className="form-group mb-3">
              <label for="event_location">Event Location</label>
              <input
                type="text"
                className="form-control"
                id="event_location"
                placeholder="Enter event location (city, country)"
              />
            </div>
            <div className="form-group mb-3">
              <label for="event_price">Event Price</label>
              <input
                type="number"
                className="form-control"
                id="event_price"
                placeholder="Enter event price"
              />
            </div>
            <div className="form-group mb-4">
              <label for="event_image">Event Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                id="event_image"
                placeholder="Enter event image"
                onChange={onImageChange}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="reset" className="btn btn-secondary py-2 px-4">
                Reset
              </button>
              <button type="submit" className="btn btn-primary py-2 px-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
