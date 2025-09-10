import React from "react";

const WhoWeAre = () => (
  <section id="Whoweare" className="bg-white py-5">
    <div className="container">
      <h2 className="display-5 fw-bold text-center mb-3">Who We Are</h2>
      <p className="lead text-muted text-center mx-auto" style={{maxWidth: 920}}>
        At Z‑Ninth, we don’t just build AI solutions—we craft intelligent innovations that drive business transformation. Our AI‑powered accelerators are designed to amplify efficiency, unlock new opportunities, and push the boundaries of what’s possible. From intelligent automation to predictive analytics and machine learning, we make AI work for you.
      </p>
      <div className="row g-5 mt-2 align-items-start">
        <div className="col-12 col-md-6">
          <div className="text-center px-3">
            <img
              src="./imgs/AI_services/ourvision.png"
              alt="Vision"
              className="img-fluid rounded-circle mb-3"
              style={{width: 140, height: 140, objectFit: "cover"}}
            />
            <h5 className="fw-semibold mb-2">Our Vision</h5>
            <p className="text-muted mb-0">
              We envision a future where AI isn’t just an enhancement but the driving force behind business evolution. Our mission is to make AI accessible, scalable, and indispensable, helping businesses stay ahead of the competition in the digital era.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="text-center px-3">
            <img
              src="./imgs/AI_services/ourmission.png"
              alt="Mission"
              className="img-fluid rounded-circle mb-3"
              style={{width: 140, height: 140, objectFit: "cover"}}
            />
            <h5 className="fw-semibold mb-2">Our Mission</h5>
            <p className="text-muted mb-0">
              At Z‑Ninth, we are on a mission to revolutionize industries with cutting‑edge AI solutions. We strive to empower businesses with intelligent automation, actionable insights, and seamless AI integration that maximizes productivity, revenue, and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
