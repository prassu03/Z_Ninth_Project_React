import React,{useEffect} from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../Prod_components/Comp1.css";
const Block1 = () => {
  return (
    <section className="hom-Component1 ms-2">
        <img src=".\imgs\salesforce_Mulesoft\salesforce_bg.jpg" alt="Background" className="home-bg" />
      <div className="home-content text-center">
        <h1 className="text-white hom-title " > 
          Salesforce Solutions
        </h1>
      </div>
    </section>
  );
}
const Block2 = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h1
          className=" mb-5"
          style={{
            fontSize: "2.6rem",
            letterSpacing: ".5px",
          }}
        >
          Salesforce Implementation
        </h1>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#bdbcbcff"/>
                <circle cx="24" cy="24" r="19" fill="#9b9696ff"/>
                <circle cx="24" cy="24" r="15" fill="#7e7d7dff"/>
                <circle cx="24" cy="24" r="10" fill="#4e4d4dff"/>
                <circle cx="24" cy="24" r="6" fill="#222"/>
                <circle cx="24" cy="24" r="3" fill="#000"/>
              </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Salesforce<br />
                Agentforce
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Empower agents with real<br />
                -time customer insights and<br />
                AI-driven tools to deliver<br />
                faster, smarter support.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 42,15 42,33 24,42 6,33 6,15" fill="#eee" />
                <polygon points="24,12 38,19 38,29 24,36 10,29 10,19" fill="#bbbbbb" />
                <polygon points="24,18 34,23 34,29 24,34 14,29 14,23" fill="#222" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Salesforce<br />
                Data Cloud
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Unify and activate real-time<br />
                customer data across every<br />
                touchpoint to drive<br />
                personalized experiences at<br />
                scale.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 44,39 4,39" fill="#eee" />
                <polygon points="24,22 36,39 12,39" fill="#888" />
                <polygon points="24,30 30,39 18,39" fill="#000" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Salesforce<br />
                Support
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                We evaluate your needs,<br />
                creating a roadmap to<br />
                enhance Salesforce<br />
                functionality with a focus on<br />
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1
          className=" mb-5"
          style={{
            fontSize: "2.6rem",
            letterSpacing: ".5px",
          }}
        >
          Salesforce Customization
        </h1>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#bdbcbcff"/>
                <circle cx="24" cy="24" r="19" fill="#9b9696ff"/>
                <circle cx="24" cy="24" r="15" fill="#7e7d7dff"/>
                <circle cx="24" cy="24" r="10" fill="#4e4d4dff"/>
                <circle cx="24" cy="24" r="6" fill="#222"/>
                <circle cx="24" cy="24" r="3" fill="#000"/>
              </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Integration<br />
                Services
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                We integrate Salesforce with<br />
                other tools, creating a<br/>
                connected and efficient<br />
                business ecosystem.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 42,15 42,33 24,42 6,33 6,15" fill="#eee" />
                <polygon points="24,12 38,19 38,29 24,36 10,29 10,19" fill="#bbbbbb" />
                <polygon points="24,18 34,23 34,29 24,34 14,29 14,23" fill="#222" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Custom Salesforce<br />
                Development
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                We customize Salesforce to<br />
                match your workflows,<br />
                ensuring seamless<br />
                integration and functionality.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 44,39 4,39" fill="#eee" />
                <polygon points="24,22 36,39 12,39" fill="#888" />
                <polygon points="24,30 30,39 18,39" fill="#000" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                UI Customization
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                We tailor the Salesforce<br />
                interface to your needs,<br />
                improving user adoption and<br />
                productivity with<br />
                personalized designs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1
          className=" mb-5"
          style={{
            fontSize: "2.6rem",
            letterSpacing: ".5px",
          }}
        >
          Salesforce Integration
        </h1>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="#bdbcbcff"/>
                <circle cx="24" cy="24" r="19" fill="#9b9696ff"/>
                <circle cx="24" cy="24" r="15" fill="#7e7d7dff"/>
                <circle cx="24" cy="24" r="10" fill="#4e4d4dff"/>
                <circle cx="24" cy="24" r="6" fill="#222"/>
                <circle cx="24" cy="24" r="3" fill="#000"/>
              </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                ERP Integration
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Gain a 360-degree view of<br />
                clients and improve decision<br />
                -making with seamless ERP<br />
                integration.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 42,15 42,33 24,42 6,33 6,15" fill="#eee" />
                <polygon points="24,12 38,19 38,29 24,36 10,29 10,19" fill="#bbbbbb" />
                <polygon points="24,18 34,23 34,29 24,34 14,29 14,23" fill="#222" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Database Integration
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Unlock actionable insights by<br />
                integrating with databases<br />
                like Oracle, MySQL, Teradata,<br  />
                or MongoDB. Make smarter<br />
                 use of your data.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 44,39 4,39" fill="#eee" />
                <polygon points="24,22 36,39 12,39" fill="#888" />
                <polygon points="24,30 30,39 18,39" fill="#000" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Accounting Integration
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Integrate accounting software<br />
                with Salesforce for greater<br  />
                 control over payments and<br />
                 invoices.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-3">
                <polygon points="24,6 44,39 4,39" fill="#eee" />
                <polygon points="24,22 36,39 12,39" fill="#888" />
                <polygon points="24,30 30,39 18,39" fill="#000" />
              </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "500" }}
              >
                Other Apps Integration
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Connect Salesforce with<br />
                collaboration tools to avoid<br />
                duplication and reduce<br />
                downtime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Block=()=>{
  // useEffect(() => {
  //         AOS.init({ duration: 200, once: true,disable: false, 
  //           mirror: false,   });
  //       }, []);
    return(
        <>
        <Block1 />
        <Block2 />
        </>
    );
}
export default  Block;
