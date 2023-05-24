import React from "react";
import { Formik } from "formik";
import { registerSchema } from "../validations/register";

const Register = (props) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={registerSchema}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <>
          <div className="container">
            <h1>Register Form</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="email"
                  onChange={handleChange("email")}
                  placeholder="Email"
                  type="text"
                />
                <p style={{ color: "red", marginTop: 10 }}>{errors.email}</p>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="password"
                  onChange={handleChange("password")}
                  placeholder="Password"
                  type="password"
                />
                <p style={{ color: "red", marginTop: 10 }}>{errors.password}</p>
              </div>
              <div>
                <button type="submit" className="btn btn-success">
                  Register
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Register;
