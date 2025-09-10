import React from "react";
import {
  Bolt,
  Layers,
  Schema,
  ShowChart,
  BackupTable,
} from "@mui/icons-material";

const KeyFeatures = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        {/* Title */}
        <h2 className="fw-bold text-uppercase mb-5" style={{ color: "#bb86fc" }}>
          Key Features
        </h2>

        {/* Features Grid */}
        <div className="row g-4 justify-content-center">
          {/* Low-Code Designer */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Bolt style={{ fontSize: 50, color: "#bb86fc" }} />
              <h5 className="fw-bold text-white mt-3">Low-Code Designer</h5>
              <p className="text-white-50">
                Drag-and-drop interface for rapid integration development.
              </p>
            </div>
          </div>

          {/* Prebuilt Connectors */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Layers style={{ fontSize: 50, color: "#a78bfa" }} />
              <h5 className="fw-bold text-white mt-3">Prebuilt Connectors</h5>
              <p className="text-white-50">
                Support for Salesforce, SAP, AWS, Azure, SQL, REST & more.
              </p>
            </div>
          </div>

          {/* AI Mapping & Transformation */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <Schema style={{ fontSize: 50, color: "#81c784" }} />
              <h5 className="fw-bold text-white mt-3">
                AI Mapping & Transformation
              </h5>
              <p className="text-white-50">
                Normalize and transform data with AI-assisted tools.
              </p>
            </div>
          </div>

          {/* Monitoring & Alerts */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <ShowChart style={{ fontSize: 50, color: "#64b5f6" }} />
              <h5 className="fw-bold text-white mt-3">Monitoring & Alerts</h5>
              <p className="text-white-50">
                Live dashboards, logs, and customizable alerts.
              </p>
            </div>
          </div>

          {/* Versioning & Reusability */}
          <div className="col-md-4">
            <div className="h-100 p-4 border rounded bg-black d-flex flex-column align-items-center">
              <BackupTable style={{ fontSize: 50, color: "#f48fb1" }} />
              <h5 className="fw-bold text-white mt-3">
                Versioning & Reusability
              </h5>
              <p className="text-white-50">
                Manage changes, reuse templates, and roll back easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
