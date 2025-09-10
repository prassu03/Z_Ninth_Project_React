import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Explore.css";

const ExploreSection = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0 align-items-stretch" style={{ minHeight: "80vh" }}>
        <div className="col-md-6">
          <img
            src="./imgs/man_machine.jpg"
            alt="Hero"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "85vh", backgroundColor:"rgba(0,0,0,0.4)" }}
          />
        </div>
       <div
       className="explore-container col-md-6 d-flex flex-column justify-content-center text-center p-5"
       data-aos="fade-up"
     >
       <h1 className="fw-bold">Explore Our Potential</h1>
       <h4 className="text-muted">Elevate with Z-Ninth</h4>
       <p className="mt-3">
         We specialize in Salesforce and MuleSoft to deliver smart, scalable
         solutions from CRM and API integrations to automation and IT
         support.
         <br />
         <br />
         Stay agile, secure, and future-ready with Z-Ninth.
       </p>
     </div>
      </div>
    </div>
  );
};
const WhatWeDo = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0 align-items-stretch" style={{ minHeight: "80vh" }}>
        <div className="col-md-6 order-1 order-md-2" >
          <img
            src="./imgs/img.jpg"
            alt="What We Do"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "85vh", backgroundColor:"rgba(0,0,0,0.5)"}}
          />
        </div>
        <div
          className="col-md-6 d-flex flex-column justify-content-center text-center p-5 order-2 order-md-1"
          data-aos="fade-up"
        >
          <h1 className="fw-bold">What We Do?</h1>
          <h4 style={{ width:"60%",textAlign:'center',display:'flex',alignSelf:'center'}}>Transforming Business with Our Expertise</h4>
          <p className="mt-3" > 
            We harness the power of Salesforce, MuleSoft, and our own integration
            tools to solve complex challenges and accelerate business outcomes.
            <br />
            Our expert solutions are designed to drive efficiency, scalability,
            and success.
          </p>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
    useEffect(() => {
    AOS.init({ duration: 1200, once: true,disable: false, 
      mirror: false,   });
  }, []);
  return (
    <>
      <ExploreSection />
      <WhatWeDo />
    </>
  );
};

export default Explore;

