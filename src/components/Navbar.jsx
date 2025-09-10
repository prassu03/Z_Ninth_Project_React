import React,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link } from 'react-router-dom';
// import {Link  as ScrollLink} from 'react-scroll';
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
    const handleToggle = () => setNavOpen(!navOpen);
  
    const handleClose = () => setNavOpen(false);
  
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top ">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/">
          <img
            src="/LOGO.jpeg"
            alt="Z-Ninth Logo"
            style={{ height: "55px", width: "65px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" href="#home">Home</a> */}
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#about">About Us</a> */}
              <Link className="nav-link" to="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurValues">Our Values</Link>
            </li>
            <li className="nav-item dropdown">
              {/* <a
                className="nav-link dropdown-toggle"
                href="#services"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              > */}
              <Link className="nav-link dropdown-toggle" id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" to="/Services">Services</Link>
                
              {/* </a> */}
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="nav-link dropdown-item" to="/Salesforce">Salesforce</Link></li>
                <li><Link className="nav-link dropdown-item" to="/Mulesoft">Mulesoft</Link></li>
                <li><a className="nav_link dropdown-item" href="/AI" target="_blank">AI Solutions</a></li>
                {/* <li><Link className="nav-link dropdown-item" to="/AI">AI Solutions</Link></li> */}
                <li><a className="nav_link dropdown-item" href="/Integration" target="_blank">Integration Services</a></li>
                {/* <li><Link className="nav-link dropdown-item" to="/Integration">Integration Services</Link></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
