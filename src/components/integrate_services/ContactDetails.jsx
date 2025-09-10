// import React from "react";

// const ContactDetails = () => {
//   return (
//     <footer className="bg-black text-light py-5">
//       <div className="container">
//         <div className="row align-items-center text-center text-md-start">
//           {/* Left - Logo & Text */}
//           <div className="col-md-4 mb-3 mb-md-0">
//             <h5 className="fw-bold">Zyntegrate</h5>
//             <p className="mb-0">Integrate Anything. Empower Everything</p>
//           </div>

//           {/* Middle - Buttons */}
//           <div className="col-md-4 text-center mb-3 mb-md-0">
//             <button className="btn btn-primary d-block w-100 mb-2">
//               Get Started
//             </button>
//             <button className="btn btn-outline-light d-block w-100">
//               Request Demo
//             </button>
//           </div>

//           {/* Right - Contact */}
//           <div className="col-md-4 text-center text-md-end">
//             <h6 className="fw-bold">Contact</h6>
//             <p className="mb-0">Email: info@z-ninth.com</p>
//           </div>
//         </div>

//         {/* Bottom - Copyright */}
//         <div className="text-center mt-4">
//           <small>© 2025 Zyntegrate. All rights reserved.</small>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ContactDetails;


import React from "react";

export default function ContactDetails() {
  return (
    <footer className="pt-5 pb-4 text-white" style={{ backgroundColor: "#0f121a" }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Left: logo + tagline */}
          <div className="col-12 col-lg-4 d-flex align-items-center gap-3">
            <img src="./imgs/AI_services/logo2.png" alt="Zyntegrate" height="36" />
            <div>
              <div className="fs-5 fw-semibold">Zyntegrate</div>
              <div className="text-secondary">Integrate Anything. Empower Everything</div>
            </div>
          </div>

          {/* Center: CTA buttons */}
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column align-items-center gap-3">
              <a href="#get-started" className="btn btn-primary rounded-3 px-5 py-2" style={{ backgroundColor: "#6f63ff", borderColor: "#6f63ff" }}>
                Get Started
              </a>
              <a href="#request-demo" className="btn btn-outline-secondary rounded-3 px-5 py-2 border-2">
                Request Demo
              </a>
            </div>
          </div>

          {/* Right: contact */}
          <div className="col-12 col-lg-4">
            <div className="ms-lg-auto" style={{ maxWidth: 320 }}>
              <div className="fs-5 fw-semibold mb-1">Contact</div>
              <div className="text-secondary">
                Email: <a className="link-light text-decoration-none" href="mailto:info@z-ninth.com">info@z-ninth.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
