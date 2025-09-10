
import React from "react";

const Services=()=> {
  return (
    <section id="Services" className="py-5" style={{ background: "#000" }}>
      <h1 className="text-center text-white mb-5" style={{ fontSize: "3.5rem" }}>
        Services
      </h1>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center">
            <img src=".\imgs\salesforce.jpg" alt="Salesforce" className="img-fluid" />
            <div className="text-white text-center mt-31 ps-2" style={{ fontSize: "1.5rem" }}>
              Salesforce
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center">
            <img src=".\imgs\Mulesoft usb _edited.jpg" alt="Mulesoft" className="img-fluid" />
            <div className="text-white text-center mt-31 ps-2" style={{ fontSize: "1.5rem" }}>
              Mulesoft
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center">
            <img src=".\imgs\3D render of AI and GPU processors_edited.jpg" alt="Artificial Intelligence" className="img-fluid" />
            <div className="text-white text-center mt-31 ps-2" style={{ fontSize: "1.5rem" }}>
              Artificial Intelligence
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center">
            <img src=".\imgs\integration.jpg" alt="Integration" className="img-fluid" />
            <div className="text-white text-center mt-31 ps-2" style={{ fontSize: "1.5rem" }}>
              Integration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
