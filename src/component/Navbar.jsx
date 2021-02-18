import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" bg-dark nav-color">
        <nav className="navbar navbar-expand-lg container ">
          <div className="container-fluid">
            <NavLink className="navbar-brand nav-color" to="/">
              DevBappy
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon nav-color"></span>
            </button>
            <div
              className="collapse navbar-collapse nav-color"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-color">
                <li className="nav-item">
                  <NavLink
                    //activeClassName="menu-active"
                    className="nav-link nav-color"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link nav-color"
                    to="/service"
                  >
                    Service
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link nav-color"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu-active"
                    className="nav-link nav-color"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
