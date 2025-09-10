import React from "react";
import { Link  as ScrollLink } from "react-scroll";
import "./Home.css"; 

const Home = () => {
  return (
    <section className="home-container">
        <img src="./imgs/home.jpg" alt="Background" className="home-bg" />
      <div className="home-content">
        <h1 className="text-white home-title ">
          Empowering Businesses with AI-Driven Solutions
          <br /> in Salesforce and Mulesoft diverse integration <br /> platforms.
        </h1>
        {/* <button className="btn btn-light home-btn">Contact Us</button> */}
        {/* <a class="btn btn-light home-btn" href="#contact" >Contact Us</a> */}
        <ScrollLink   to="contact" smooth={true} duration={500} className="btn btn-light home-btn">
          Contact Us
        </ScrollLink >
      </div>
    </section>
  );
};

export default Home;
