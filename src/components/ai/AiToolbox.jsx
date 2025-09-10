import React from "react";

const AiToolbox = () => (
  <section className="bg-white py-5">
    
    <div className="container">
        <h2 className="display-4 fw-bold text-center mb-2">AI Toolbox</h2>
      <p className="text-center text-muted fs-5 mb-4">
        Technologies We Master
      </p>
        <div className="row  justify-content-center mb-5">
          <div className="col-md-4 text-center  mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
            <img src="./imgs/AI_services/1.png" alt="NLP" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white text-white mb-2">Natural Language Processing<br />(NLP)</h5>
            <p className="text-white-50 mb-0"> Transforming customer interactions<br />
            with AI-powered chatbots and voice<br />
            assistants.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              
            <img src="./imgs/AI_services/mldl.png" alt="Machine Learning&Deep Learning" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2">Machine Learning &<br />
            Deep Learning</h5><br />
            <p className="text-white-50 mb-0">Advanced AI models for real-time<br />predictions and automation.<br />
            </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              <img src="./imgs/AI_services/2.png" alt="Computer Vision" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2">Computer Vision</h5><br />
            <p className="text-white-50 mb-0">AI-driven image and video analysis<br />
            for security, quality control, and<br /> more.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              <img src="./imgs/AI_services/robotic.png" alt="Robotic Process Automation (RPA)" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2">Robotic Process Automation<br /> (RPA)</h5>
            <p className="text-white-50 mb-0">Automating workflows to reduce<br />
            human error and boost productivity</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
              <img src="./imgs/AI_services/ai.png" alt="AI-Driven Data Cloud Solutions" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white mb-2"> AI-Driven Data Cloud Solutions</h5>
            <p className="text-white-50 mb-0">Intelligent data processing and<br />
            seamless cloud AI integration.</p>
            </div>
          </div>
          <div className="col-md-4 text-center  mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
            <img src="./imgs/AI_services/conversational.png" alt="Conversational AI" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white text-white mb-2">Conversational AI</h5><br />
            <p className="text-white-50 mb-0"> AI-powered virtual assistants for<br />
            seamless customer engagement.</p>
            </div>
          </div>
        </div>
        <div className="row  justify-content-left mb-5">
          <div className="col-md-4 text-center  mb-4">
            <div className="d-flex flex-column align-items-center bg-dark pt-4 pb-4">
            <img src="./imgs/AI_services/genai.png" alt="Generative AI" className="img-fluid mb-3 d-block mx-auto" style={{width: 96}} />
            <h5 className="fw-semibold text-white text-white mb-2">Generative AI</h5>
            <p className="text-white-50 mb-0"> AI-driven content creation, smart<br />
            automation, and predictive business<br />
            solutions.</p>
            </div>
          </div>
        </div>
      </div>
  </section>
);

export default AiToolbox;
