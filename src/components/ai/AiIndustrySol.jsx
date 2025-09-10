// import React from 'react';
// const AiIndustrySol = () => (
//         <section className="py-5 text-center">
//             <div className="container">
//     <h1 className="display-4 fw-semibold">AI Solutions for Every Industry</h1>
//     <p className="lead text-muted mt-3">
//       We design AI solutions tailored to specific industry challenges:
//     </p>

  
//     <div className="row g-5 align-items-stretch">
//       {/* Row 1 - left image */}
//       <div className="col-md-6">
//         <div className="card border-0 rounded-0">
//           <img
//             src="/images/financial-left.jpg"
//             alt="Financial Services left"
//             className="card-img rounded-0"
//           />
//         </div>
//       </div>
//       {/* Row 1 - right overlay card */}
//       <div className="col-md-6">
//         <div className="card bg-dark text-white border-0 rounded-0">
//           <img
//             src="/images/financial-right.jpg"
//             alt="Financial Services"
//             className="card-img rounded-0"
//           />
//           <div className="card-img-overlay d-flex align-items-center justify-content-center">
//             <span className="h5 m-0">Financial Services</span>
//           </div>
//         </div>
//       </div>

//       {/* Row 2 - left image */}
//       <div className="col-md-6">
//         <div className="card border-0 rounded-0">
//           <img
//             src="/images/healthcare-left.jpg"
//             alt="Healthcare left"
//             className="card-img rounded-0"
//           />
//         </div>
//       </div>
//       {/* Row 2 - right overlay card */}
//       <div className="col-md-6">
//         <div className="card bg-dark text-white border-0 rounded-0">
//           <img
//             src="/images/healthcare-right.jpg"
//             alt="Healthcare"
//             className="card-img rounded-0"
//           />
//           <div className="card-img-overlay d-flex align-items-center justify-content-center">
//             <span className="h5 m-0">Healthcare</span>
//           </div>
//         </div>
//       </div>

//       {/* Row 3 - left image */}
//       <div className="col-md-6">
//         <div className="card border-0 rounded-0">
//           <img
//             src="/images/retail-left.jpg"
//             alt="Retail & E-commerce left"
//             className="card-img rounded-0"
//           />
//         </div>
//       </div>
//       {/* Row 3 - right overlay card */}
//       <div className="col-md-6">
//         <div className="card bg-dark text-white border-0 rounded-0">
//           <img
//             src="/images/retail-right.jpg"
//             alt="Retail & E-commerce"
//             className="card-img rounded-0"
//           />
//           <div className="card-img-overlay d-flex align-items-center justify-content-center">
//             <span className="h5 m-0">Retail &amp; E-commerce</span>
//           </div>
//         </div>
//       </div>

//       {/* Row 4 - left image */}
//       <div className="col-md-6">
//         <div className="card border-0 rounded-0">
//           <img
//             src="/images/manufacturing-left.jpg"
//             alt="Manufacturing left"
//             className="card-img rounded-0"
//           />
//         </div>
//       </div>
//       {/* Row 4 - right overlay card */}
//       <div className="col-md-6">
//         <div className="card bg-dark text-white border-0 rounded-0">
//           <img
//             src="/images/manufacturing-right.jpg"
//             alt="Manufacturing"
//             className="card-img rounded-0"
//           />
//           <div className="card-img-overlay d-flex align-items-center justify-content-center">
//             <span className="h5 m-0">Manufacturing</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     </section>
// )


import React from "react";

export default function AiIndustrySol() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h1 className="display-4 text-center fw-semibold mb-3">
          AI Solutions for Every Industry
        </h1>
        <p className="lead text-center mb-5">
          We design AI solutions tailored to specific industry challenges:
        </p>

        {/* Grid 2 x 2 */}
        <div className="row g-4">
          {/* Financial Services */}
          <div className="col-12 col-md-6">
            <div className="row g-0 align-items-stretch">
              <div className="col-6">
                <img
                  src="./imgs/AI_services/Financial Analyst.jpg"
                  alt="Financial Services"
                  className="img-fluid w-100 h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-6 bg-dark d-flex align-items-center justify-content-center rounded-end">
                <span className="text-white fs-5">Financial Services</span>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="col-12 col-md-6">
            <div className="row g-0 align-items-stretch">
              <div className="col-6">
                <img
                  src="./imgs/AI_services/healthcare.jpg"
                  alt="Healthcare"
                  className="img-fluid w-100 h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-6 bg-dark d-flex align-items-center justify-content-center rounded-end">
                <span className="text-white fs-5">Healthcare</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row g-0 align-items-stretch">
              <div className="col-6">
                <img
                  src="./imgs/AI_services/Fashion retailer.jpg"
                  alt="Retail & E-commerce"
                  className="img-fluid w-100 h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-6 bg-dark d-flex align-items-center justify-content-center rounded-end">
                <span className="text-white fs-5">Retail & E-commerce</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row g-0 align-items-stretch">
              <div className="col-6">
                <img
                  src="./imgs/AI_services/manufacturing.jpeg"
                  alt="Manufacturing"
                  className="img-fluid w-100 h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-6 bg-dark d-flex align-items-center justify-content-center rounded-end">
                <span className="text-white fs-5">Manufacturing</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row g-0 align-items-stretch">
              <div className="col-6">
                <img
                  src="./imgs/AI_services/marketing and customer engagement.jpg"
                  alt="Marketing & Customer Engagement"
                  className="img-fluid w-100 h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-6 bg-dark d-flex align-items-center justify-content-center rounded-end">
                <span className="text-white fs-5">Marketing & Customer Engagement</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row g-0 align-items-stretch">
              <div className="col-6">
                <img
                  src="./imgs/AI_services/logistics and supply chain.jpg"
                  alt="logistics and supply chain"
                  className="img-fluid w-100 h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-6 bg-dark d-flex align-items-center justify-content-center rounded-end">
                <span className="text-white fs-5">Logistics & Supply Chain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
