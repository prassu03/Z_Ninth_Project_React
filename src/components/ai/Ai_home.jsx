import React from "react";
import { Link  as ScrollLink } from "react-scroll";
import "../about_components/Container.css";
const Ai_home = () => {
  return (
    <section className="home-container" style={{height: "85vh"}}>
        <img src="./imgs/home.jpg" alt="Background" className="home-bg" />
      <div className="home-content text-center">
        <h1 className="text-white home-title ">
          Z-Ninth
          <br /> AI Powered Business Acceleration
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

export default Ai_home;
