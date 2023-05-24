import React, { useState } from "react";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="container justify-content-center">
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
            type="text"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="password"
            onChange={handleOnChange}
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
          <i className="fa fa-sign-in ms-2" />
        </button>
      </form>
    </div>
  );
};

export default Login;
