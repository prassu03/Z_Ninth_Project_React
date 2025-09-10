import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Description.css";

const Description1 = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0 align-items-stretch" style={{ minHeight: "80vh" }}>
        <div className="col-md-6">
          <img
            src=".\imgs\AboutUs\explore1.avif"
            alt="Explore"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "85vh" }}
          />
        </div>
       <div
       className="explore-container col-md-5 d-flex flex-column justify-content-center text-align-start p-5"
       data-aos="fade-up"
     >
       <h1 className="fw-bold ">Your Success is Our<br /> Priority</h1>
       <p className="mt-3 text-start">
        Z-Ninth Solutions empowers businesses<br />
        with scalable, AI-driven frameworks and <br />
        industry-specific solutions that drive<br />
        operational excellence.<br />
        We specialize in Salesforce Financial<br />
        Services Cloud, Data Cloud, Marketing Cloud,<br />
        and AI integration—delivering tailored,<br />
        results-focused solutions that simplify <br />
        complexity and exceed expectations.
         
       </p>
     </div>
      </div>
    </div>
  );
};


const Description2 = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0 align-items-stretch" style={{ minHeight: "80vh" }}>
        <div className="col-md-6 order-1 order-md-2">
          <img
            src=".\imgs\AboutUs\explore2.avif"
            alt="What We Do"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "80vh" }}
          />
        </div>
        <div
          className="col-md-6 d-flex flex-column justify-content-center text-align-start p-5 order-2 order-md-1"
          data-aos="fade-up"
        >
          <h1 className="fw-bold">Your Partner for the<br /> Future</h1>
          
          <p className="mt-3 text-start"  > 
            We have the ability to unify fragmented <br />
            growth operations while optimizing costs<br />
            and delivering ROI. We retain customers <br />
            by committing to helping them achieve <br />
            sustainable growth and transformation.<br />
            Choose Z-ninth as your technology <br />
            partner and gain a strategic edge. We are<br />
            committed to delivering transformational<br />
            growth every step of the way.<br />
          </p>
        </div>
      </div>
    </div>
  );
};
const Description = () => {
    useEffect(() => {
    AOS.init({ duration: 200, once: true,disable: false, 
      mirror: false,   });
    
      
  }, []);
  return (
    <>
      <Description1 />
      <Description2 />
    </>
  );
};

export default Description;

