import React from "react";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}{" "}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
              <Link className="nav-link active" aria-current="page" to="/about">
                About Us
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
