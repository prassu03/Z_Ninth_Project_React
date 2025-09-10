import React from "react";
import {
  CloudQueue,
  Layers,
  Security,
  ShowChart,
} from "@mui/icons-material";

const WhatSection = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        {/* Title */}
        <h2 className="fw-bold text-uppercase mb-3" style={{ color: "#bb86fc" }}>
          What is Zyntegrate?
        </h2>
        <p className="fs-5 mb-5 text-white-50">
          Zyntegrate is a cost-effective platform built for modern enterprises aiming to
          automate complex workflows and unify data across fragmented systems. Whether
          you're bridging legacy databases, integrating with cloud apps, or connecting
          third-party APIs, Zyntegrate delivers powerful integration made simple and
          affordable.
        </p>

        {/* Features Row */}
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <CloudQueue style={{ fontSize: 50, color: "#bb86fc" }} />
              <h5 className="fw-bold text-white mt-3">Connect Everything</h5>
              <p className="text-white-50" style={{ fontSize: 20 }}>
                Integrate legacy systems, SaaS, cloud, and APIs in one place.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Layers style={{ fontSize: 50, color: "#a78bfa" }} />
              <h5 className="fw-bold text-white mt-3">Automate at Scale</h5>
              <p className="text-white-50" style={{ fontSize: 20 }}>
                Build and run intelligent workflows without extensive code.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Security style={{ fontSize: 50, color: "#64b5f6" }} />
              <h5 className="fw-bold text-white mt-3">Secure & Compliant</h5>
              <p className="text-white-50" style={{ fontSize: 20 }}>
                Enterprise-grade security and role-based access.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <ShowChart style={{ fontSize: 50, color: "#81c784" }} />
              <h5 className="fw-bold text-white mt-3">Real-Time Insights</h5>
              <p className="text-white-50" style={{ fontSize: 20 }}>
                Stream data into analytics or BI tools as it happens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
