import React from "react";

export default function ZyntegrateHero() {
  return (
    <section className="text-white" style={{ backgroundColor: "#0f121a" }}>
      {/* top mini-bar with logo and CTA */}
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img src="./imgs/AI_services/logo2.png" alt="Zyntegrate" height="36" />
          <div className="d-flex flex-column lh-1">
            <span className="fs-5 fw-semibold">ZYNTEGRATE</span>
            <small className="text-secondary">Powered by Z‑Ninth</small>
          </div>
        </div>
        <a href="#get-started" className="btn btn-warning fw-semibold rounded-3 px-4">
          Get Started
        </a>
      </div>

      {/* hero content */}
      <div className="container py-5 py-lg-6">
        <h1 className="display-4 fw-bold lh-sm mb-3 text-wrap">
          <span className="text-warning">Automate</span> Workflows.{" "}
          <span className="text-warning">Integrate</span> Everything.
        </h1>

        <p className="lead text-center text-secondary-emphasis mb-3">Unify. Automate. Integrate.</p>

        <p className="fs-5 text-white text-center mb-0">
          Zyntegrate connects your systems and simplifies your workflows effortlessly.
        </p>
      </div>
    </section>
  );
}
