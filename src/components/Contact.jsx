import React from "react";

function Contact() {
  return (
    <div id ="contact" className="container py-5 d-flex flex-column align-items-center min-vh-80">
      <h1 className="text-center mb-3" style={{ fontFamily: "serif", fontSize: "2.3rem" }}>
        Contact Us
      </h1>
      <form className="w-100" style={{ maxWidth: 350 }}>
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control border-dark" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control border-dark" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control border-dark" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control border-dark" rows={4}></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-light border shadow-sm px-4">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
