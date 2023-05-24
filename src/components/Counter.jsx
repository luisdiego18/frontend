import React, { useState } from "react";

const Counter = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              name="firstName"
              onChange={handleOnChange}
              placeholder="First name"
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              name="lastName"
              onChange={handleOnChange}
              placeholder="Last name"
              type="text"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              name="phoneNumber"
              onChange={handleOnChange}
              placeholder="Phone number"
              type="tel"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
            <i className="fa fa-sign-in ms-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Counter;
