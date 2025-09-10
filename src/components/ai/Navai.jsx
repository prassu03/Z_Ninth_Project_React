import React from "react";
import {Link as ScrollLink} from 'react-scroll'; 
const Navai = () => {
  return (
    <>
    <style>{`
        .navbar .nav-link {
          color: white !important;
        }
        .navbar .nav-link:hover {
          color: #ccc !important;
        }
      `}</style>

    <nav className="navbar navbar-expand-lg bg-dark sticky-top text-white" style={{height:80}} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold" href="#">Z-ninth.ai</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <ScrollLink className="nav-link active" aria-current="page" to="/" >Home</ScrollLink>
            </li>
            <li className="nav-item text-white">
              {/* <a className="nav-link" href="#">Who We Are</a> */}
              <ScrollLink className="nav-link text-white" to="/Whoweare" style={{ color: "white" }} smooth={true} duration={500} >Who We Are</ScrollLink>
            </li>
            <li className="nav-item text-white">
              {/* <a className="nav-link" href="#">Our AI-Powered Solutions</a> */}
              <ScrollLink className="nav-link text-white" to="/Products" style={{ color: "white" }}>Our AI-Powered Solutions</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navai;
