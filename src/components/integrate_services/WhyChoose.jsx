import React from "react";
import { RocketLaunch, Bolt, Cloud, Work } from "@mui/icons-material"; // exact icons

const WhyChoose = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        {/* Title */}
        <h2 className="fw-bold text-uppercase mb-5" style={{ color: "#bb86fc" }}>
          Why Choose Zyntegrate?
        </h2>

        <div className="row g-4">
          {/* Scalable Architecture */}
          <div className="col-md-6">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-start text-start">
              <RocketLaunch style={{ fontSize: 40, color: "#bb86fc" }} />
              <h5 className="fw-bold text-white mt-3">Scalable Architecture</h5>
              <p className="text-white-50 mb-0">
                Grows with your business.
              </p>
            </div>
          </div>

          {/* Faster Time to Value */}
          <div className="col-md-6">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-start text-start">
              <Bolt style={{ fontSize: 40, color: "#a78bfa" }} />
              <h5 className="fw-bold text-white mt-3">Faster Time to Value</h5>
              <p className="text-white-50 mb-0">
                Launch integrations in days, not months.
              </p>
            </div>
          </div>

          {/* Vendor-Agnostic */}
          <div className="col-md-6">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-start text-start">
              <Cloud style={{ fontSize: 40, color: "#64b5f6" }} />
              <h5 className="fw-bold text-white mt-3">Vendor-Agnostic</h5>
              <p className="text-white-50 mb-0">
                Works across any platform or ecosystem.
              </p>
            </div>
          </div>

          {/* Cost-Efficient */}
          <div className="col-md-6">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-start text-start">
              <Work style={{ fontSize: 40, color: "#90caf9" }} />
              <h5 className="fw-bold text-white mt-3">Cost-Efficient</h5>
              <p className="text-white-50 mb-0">
                Reduces development and maintenance overhead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
