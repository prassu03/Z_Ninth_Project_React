import React from "react";
import { Groups, Work, ShowChart } from "@mui/icons-material"; // exact icons

const BuiltFor = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        {/* Title */}
        <h2 className="fw-bold text-uppercase mb-5" style={{ color: "#bb86fc" }}>
          Built For
        </h2>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {/* IT Teams */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Groups style={{ fontSize: 50, color: "#bb86fc" }} />
              <h5 className="fw-bold text-white mt-3">IT Teams</h5>
              <p className="text-white-50">
                Simplify maintenance and integration with centralized control.
              </p>
            </div>
          </div>

          {/* Business Leaders */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Work style={{ fontSize: 50, color: "#a78bfa" }} />
              <h5 className="fw-bold text-white mt-3">Business Leaders</h5>
              <p className="text-white-50">
                Unlock siloed data for faster, real-time decisions.
              </p>
            </div>
          </div>

          {/* Data Analysts */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <ShowChart style={{ fontSize: 50, color: "#64b5f6" }} />
              <h5 className="fw-bold text-white mt-3">Data Analysts</h5>
              <p className="text-white-50">
                Accelerate pipelines with unified, accurate data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
