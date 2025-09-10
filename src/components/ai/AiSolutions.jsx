import React from "react";

const AiSolutions = () => (
  <section className="bg-white py-5">
    
    <div className="container">
        <h2 className="display-4 fw-bold text-center mb-2">Our AI‑Powered Solutions</h2>
      <p className="text-center text-muted fs-5 mb-4">
        Pre‑built, Customizable AI solutions designed to supercharge your business:
      </p>
        <div className="row  justify-content-center mb-5">
          <div className="col-md-4 text-center  mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
            <img src="./imgs/AI_services/repetitive.png" alt="Automate tasks" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white text-white mb-2">Automate Repetitive Tasks</h5>
            <p className="text-white-50 mb-0"> Free up valuable time and focus on<br />
             strategic growth</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              
            <img src="./imgs/AI_services/powerful.png" alt="Powerful insights" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2">Generate Powerful Insights</h5>
            <p className="text-white-50 mb-0">Leverage AI‑driven insights to make<br />
            smarter decisions</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              <img src="./imgs/AI_services/data.png" alt="Data backed decisions" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2">Data Backed Decision Making</h5>
            <p className="text-white-50 mb-0">Predict trends, mitigate risks, and<br />
            optimize performance</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              <img src="./imgs/AI_services/customer.png" alt="Customer experience" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2">Elevate Customer Experience</h5>
            <p className="text-white-50 mb-0">Deliver hyper‑personalized interactions<br />
            with intelligent automation</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              <img src="./imgs/AI_services/operational.png" alt="Operational efficiency" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2"> Enhance Operational Efficiency</h5>
            <p className="text-white-50 mb-0">Streamline workflows and remove<br />
            inefficiency</p>
            </div>
          </div>
        </div>
      </div>
  </section>
);

export default AiSolutions;
