import React , { useState }from "react";
import { Link } from "react-scroll";
import "./Container.css"; 

const Container = () => {
  return (
    <section className="hom-container">
        <img src=".\imgs\AboutUs\Main_img.avif" alt="Background" className="home-bg" />
      <div className="home-content text-center">
        <h1 className="text-white home-title "> 
          Envisioning a future where businesses transform the power of
          <br /> Saleforce Solutions, Data, and AI
        </h1>
      </div>
    </section>
  );
};

export default Container;
