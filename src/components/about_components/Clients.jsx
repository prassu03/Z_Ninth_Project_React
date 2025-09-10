import React from "react";
import "./Clients.css"; // Custom CSS for this section

function Clients() {
  return (
    <section className="our-aim-section container mt-5 mb-3">
      <h2 className="text-center mb-5 our-aim-title">Our Aim</h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4 d-flex align-items-stretch mb-4">
          <div className="card aim-card w-100">
            <div className="aim-img aim-img1">
                <img src=".\imgs\AboutUs\team.jpeg" alt="Our Team"/>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Our Team</h5>
              <p className="card-subtitle mb-2 text-muted">The Power of Collaboration</p>
              <p className="card-text">
                At Z-ninth, we nurture a <br/>
                dynamic team of visionaries<br/>
                 united in their dedication to <br/>
                 achieving your goals.<br/>
                We believe in the synergy of<br/>
                 diverse talents, fostering<br/>
                  innovative solutions that drive<br/>
                  your business forward.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 d-flex align-items-stretch mb-4">
          <div className="card aim-card w-100">
            <div className="aim-img aim-img2">
                <img src=".\imgs\AboutUs\approach.jpg" alt="Our Approach"/>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Our Approach</h5>
              <p className="card-subtitle mb-2 text-muted">Precision, Agility, and Innovation</p>
              <p className="card-text">
                We stand out by seamlessly<br/>
                 combining precision and <br/>
                 agility in our approach.Our<br/>
                 project management practices<br/>
                  are fortified by an unwavering<br/>
                   commitment to excellence.<br/>
                Embracing innovation as a <br/>
                core principle ensures that<br/>
                 your business always remains<br/>
                  on the cutting edge.
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 d-flex align-items-stretch mb-4">
          <div className="card aim-card w-100">
            <div className="aim-img aim-img3">
                <img src=".\imgs\AboutUs\expertise.jpg" alt="Our Expertise"/>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Our Expertise</h5>
              <p className="card-subtitle mb-2 text-muted">Mastering Cutting-Edge Technologies</p>
              <p className="card-text">
                Z-ninth is synonymous with <br/>
                expertise in a wide range of<br/>
                 advanced IT solutions.<br/>
                Our proficiency extends to <br/>
                Salesforce Einstein analytics,<br/>
                 MuleSoft services enabling<br/>
                  data-driven decisions for your<br/>
                   business and ensuring you<br/>
                    have the upper hand in an<br/>
                     ever-evolving market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
