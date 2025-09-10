import React from "react";

function ClientsAndContact() {
  return (
    <div className="container-fluid py-5">
      <section className="text-center mb-5">
        <h1 className="mb-5" style={{fontFamily: 'serif'}}>Our Clients</h1>
        <div className="row justify-content-center align-items-center">
          <div className="col-6 col-md-3 mb-3 mb-md-0">
            <img src=".\imgs\nulogic.webp" alt="Nulogic Logo" className="img-fluid" style={{maxHeight: 150}} />
          </div>
          <div className="col-6 col-md-3">
            <img src="./imgs/ERPA.webp" alt="ERPA Logo" className="img-fluid" style={{maxHeight: 100}} />
          </div>
        </div>
      </section>
      <section className="py-4 ms-4 me-4">
        <h1 className="mb-5 text-center " style={{fontFamily: 'serif'}}>Get in Touch</h1>
        <div className="row justify-content-evenly">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <b>Address :</b>
            <br />
            702 S Denton Tap Rd, Suite # 110,
            <br />
            Coppell, 75019
          </div>
          <div className="col-12 col-md-3 text-md-end">
            <div>
              <b>Information Services:</b>
              <br />
              info@z-ninth.com
              <div>
              <a href="https://linkedin.com" className="btn btn-md me-2" aria-label="LinkedIn">
                <img
                  src=".\imgs\linkedin_icon.png"
                  alt="Linkedin"
                />
              </a>
              <a href="https://x.com" className="btn btn-md me-2" aria-label="X">
                <img
                  src=".\imgs\X.png"
                  alt="X"
                />
              </a>
              <a href="https://instagram.com" className="btn btn-md me-2" aria-label="Instagram">
                <img
                  src=".\imgs\insta_icon.png"
                  alt="Instagram"
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ClientsAndContact;
