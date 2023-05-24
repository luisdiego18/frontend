import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light ">
        <div className="container ">
          <div className="">
            <Link className="navbar-brand" to="/">
              Warehouse
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tools">
                  Tools
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-outline-primary me-2">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </button>
            <button className="btn btn-outline-success">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
