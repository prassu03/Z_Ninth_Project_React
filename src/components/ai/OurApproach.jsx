import React from "react";

export default function OurApproach() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Title */}
        <h1 className="display-4 text-center fw-semibold mb-2">Our Approach</h1>
        <p className="text-center text-muted mb-5">From Concept to Impact</p>

        <div className="row align-items-center g-5 mb-5">
          <div className="col-12 col-lg-6">
            <img
              src="./imgs/AI_services/discovery&strategy.jpg"
              alt="Discovery workshop"
              className="img-fluid w-100 rounded object-cover"
              style={{ height: 360 }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="fw-semibold mb-3">Discovery & Strategy</h3>
            <p className="mb-0">
              We analyze business needs and craft an AI roadmap tailored to goals, aligning stakeholders and success metrics from day one.
            </p>
          </div>
        </div>
        <div className="row align-items-center g-5 mb-5">
          <div className="col-12 col-lg-6 order-lg-2">
            <img
              src="./imgs/AI_services/customai.jpg"
              alt="Custom AI development"
              className="img-fluid w-100 rounded object-cover"
              style={{ height: 360 }}
            />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="fw-semibold mb-3">Custom AI Development</h3>
            <p className="mb-0">
              Engineers build solutions that integrate with existing ecosystems, following MLOps best practices and security guidelines.
            </p>
          </div>
        </div>
        <div className="row align-items-center g-5 mb-5">
          <div className="col-12 col-lg-6">
            <img
              src="./imgs/AI_services/effortlessimplementation.jpg"
              alt="effortlessimplementation"
              className="img-fluid w-100 rounded object-cover"
              style={{ height: 360 }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="fw-semibold mb-3">Effortless Implementation</h3>
            <p className="mb-0">
              Smooth, hassle-free AI deployment with minimal<br />disruption.

</p>
          </div>
        </div>
        <div className="row align-items-center g-5 mb-5">
          <div className="col-12 col-lg-6 order-lg-2">
            <img
              src="./imgs/AI_services/adaptiveai.jpg"
              alt="Adaptive AI Evolution"
              className="img-fluid w-100 rounded object-cover"
              style={{ height: 360 }}
            />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="fw-semibold mb-3">Adaptive AI Evolution</h3>
            <p className="mb-0">
              Our solutions learn and improve, staying ahead of<br />changing trends.</p>
          </div>
        </div>
        <div className="row align-items-center g-5 mb-5">
          <div className="col-12 col-lg-6">
            <img
              src="./imgs/AI_services/continuousOptimization.jpeg"
              alt="Discovery workshop"
              className="img-fluid w-100 rounded object-cover"
              style={{ height: 360 }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="fw-semibold mb-3">Continuous Optimization</h3>
            <p className="mb-0">
              We provide ongoing monitoring, updates, and<br />refinements to ensure peak performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
