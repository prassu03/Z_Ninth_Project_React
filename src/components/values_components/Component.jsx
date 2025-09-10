import React , { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Component1.css"; 
import "./Component2.css";
const Component1 = () => {
  return (
    <section className="hom-Component1 ms-2">
        <img src=".\imgs\OurValues\bg_img.jpg" alt="Background" className="home-bg" />
      <div className="home-content text-center">
        <h1 className="text-white home-title " data-aos="fade-up"> 
          Envisioning a future where businesses transform the power of
          <br /> Saleforce Solutions, Data, and AI
        </h1>
      </div>
    </section>
  );
}

function Component2() {
  return (
    <section className="our-values-section py-5">
      <div className="container our-values-section py-5">
  <div className="row mb-5">
    <div className="col-md-6 d-flex align-items-center mb-5 mb-md-0">
      <img
        src="./imgs/OurValues/customer.png"
        alt="Customer Driven"
        style={{ height: 48, width: 38, marginRight: "20px" }}
      />
      <div>
        <h3 className="our-values-title">Customer Driven</h3>
        <p className="our-values-text" data-aos="fade-up">
          We recognize that our success is rooted in our customers. We are dedicated to fostering strong,
          collaborative partnerships by actively listening, responding with agility, and leveraging feedback
          to achieve mutual goals.
        </p>
      </div>
    </div>

    <div className="col-md-6 d-flex align-items-center mb-5 mb-md-0">
      <img
        src="./imgs/OurValues/integrity.png"
        alt="Integrity Based"
        style={{ height: 48, width: 38, marginRight: "20px" }}
      />
      <div>
        <h3 className="our-values-title">Integrity Based</h3>
        <p className="our-values-text" data-aos="fade-up">
          At Z-Ninth, we take personal ownership of our work and actions. We honor our commitments and treat every client,
          colleague, and partner with the professionalism and respect they deserve.
        </p>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6 d-flex align-items-center mb-5 mb-md-0">
      <img
        src="./imgs/OurValues/people.png"
        alt="People Oriented"
        style={{ height: 48, width: 38, marginRight: "20px" }}
      />
      <div>
        <h3 className="our-values-title">People Oriented</h3>
        <p className="our-values-text" data-aos="fade-up">
          We believe people are our greatest asset. We invest in their growth, foster strong relationships,
          and strive to build meaningful connections with our employees, customers, and all those we work with.
        </p>
      </div>
    </div>

    <div className="col-md-6 d-flex align-items-center">
      <img
        src="./imgs/OurValues/cont.png"
        alt="Continuous Improvement"
        style={{ height: 48, width: 38, marginRight: "20px" }}
      />
      <div>
        <h3 className="our-values-title">Continuous Improvement</h3>
        <p className="our-values-text" data-aos="fade-up">
          We believe excellence is an evolving journey. By constantly refining our processes,
          we ensure our solutions not only meet expectations but consistently exceed them—delivering lasting value
          for our clients and pride in our craftsmanship.
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}

const Component=()=>{
    useEffect(() => {
        AOS.init({ duration: 1200, once: true,disable: false, 
          mirror: false,   });
      }, []);
    return (
        <>
        <Component1 />
        <Component2 />
        </>
    );
};
export default Component;