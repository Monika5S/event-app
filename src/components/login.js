import React from "react";

export default function Login(props) {
  function Authorise(e) {
    e.preventDefault();
    console.log("Authorised");
  }

  return (
    <div className="Login">
      <form className="mt-3" onSubmit={Authorise}>
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

        <button
          className="btn btn-primary py-2 px-3"
          onClick={() => {
            props.setLoginStaus(true);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
