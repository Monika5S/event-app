import React from "react";

export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    // const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    if (password != confirmPassword) {
      alert("passwords do not match, please try again!");
    } else {
      alert("user registered successfully!");
    }
  }

  return (
    <div>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
          />
        </div>
        <button className="btn btn-primary py-2 px-3">Register</button>
      </form>
    </div>
  );
}
