import React from "react";

export default function ContactSection() {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row g-5">
          {/* Left: Form card */}
          <div className="col-12 col-lg-5">
            <div className="bg-dark text-white rounded-4 shadow p-4 p-md-5">
              <h3 className="fw-bold mb-1">Z-ninth.ai</h3>
              <form className="text-dark bg-white p-3 p-md-4 rounded-4">
                <div className="mb-1">
                  <label htmlFor="fullName" className="form-label">Full name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                </div>

                <div className="mb-1">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>

                <div className="mb-1">
                  <label htmlFor="message" className="form-label">Enquiry Description</label>
                  <textarea id="message" className="form-control" rows="5" placeholder="Type message..."></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100 py-2 rounded-pill">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right: Copy and contact info */}
          <div className="col-12 col-lg-4 offset-lg-2">
            <h2 className="fw-semibold">Let’s Build the Future Together</h2>
            <p className="text-secondary">
              AI is reshaping the business landscape—don’t get left behind. Partner with Z‑Ninth and let’s create AI‑powered solutions that redefine success.
            </p>

            <hr className="border-secondary opacity-50" />

            <p className="mb-1 small text-uppercase text-secondary">Email</p>
            <p><a className="link-light text-decoration-none" href="mailto:info@z-ninth.com">info@z-ninth.com</a></p>

            <p className="mb-1 small text-uppercase text-secondary">Website</p>
            <p><a className="link-light text-decoration-none" href="https://z-ninth.com">z-ninth.com</a></p>

            <hr className="border-secondary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
