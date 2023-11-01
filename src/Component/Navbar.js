import React from "react";
import { Link } from "react-router-dom";
const { link } = require("react-router-dom");
const Navbars = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <div className="container-fluid">
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link to ="/beginner" className="nav-link active" aria-current="page">Beginner</Link>
              </li>
              <li className="nav-item">
              <Link to ="/intermediate" className="nav-link active" aria-current="page">Intermediate</Link>
              </li>
              <li className="nav-item">
              <Link to ="/registration" className="nav-link active" aria-current="page">Registration</Link>
              </li>
              <li className="nav-item">
              <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
              </li>
              <li className="nav-item">
              <Link to="/dashboard" className="nav-link active" >Dashboard</Link>
              </li>
              <li className="nav-item">
              <Link to="/showmylist" className="nav-link active" >ShowMyList</Link>
              </li>
            </ul>
          </div>
        {/* </div> */}
    </nav>
    </>
  );
};
export default Navbars;
