import React,{useEffect} from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../Prod_components/Comp1.css";
const Block1 = () => {
  return (
    <section className="hom-Component1 ms-2">
        <img src=".\imgs\salesforce_Mulesoft\mulesoft_bg.jpg" alt="Background" className="home-bg" />
      <div className="home-content text-center">
        <h1 className="text-white hom-title " > 
          Mulesoft Solutions
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
          MuleSoft API Development
        </h1>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="20" fill="#ccc" />
                <circle cx="36" cy="36" r="16" fill="#bbb" />
                <circle cx="36" cy="36" r="12" fill="#888" />
                <circle cx="36" cy="36" r="8" fill="#444" />
                <circle cx="36" cy="36" r="5" fill="#111" />
                </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >
                API Design and<br />
                Architecture
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Lay the foundation for scalable<br />
                and flexible integrations with<br />
                expertly designed APIs that are<br />
                intuitive, well-documented, and<br />
                aligned with industry best<br />
                practices.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 58,26 58,46 36,58 14,46 14,26" fill="#ccc"/>
                <polygon points="36,20 53,29 53,44 36,53 19,44 19,29" fill="#bbb"/>
                <polygon points="36,26 48,32 48,42 36,48 24,42 24,32" fill="#888"/>
                <polygon points="36,32 43,36 43,41 36,45 29,41 29,36" fill="#444"/>
                <polygon points="36,37 40,39 40,42 36,44 32,42 32,39" fill="#111"/>
                </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >
                Integration Strategy and<br />
                Consulting
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Maximize the value of your<br />
                digital assets with strategic<br />
                integration consulting that aligns<br />
                technology initiatives with<br />
                business goals, optimizing your<br />
                MuleSoft adoption.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >
                Custom API<br />
                Development
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Develop tailored MuleSoft APIs<br />
                that facilitate seamless<br />
                communication between<br />
                systems, ensuring secure,<br />
                scalable, and high-performance<br />
                integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >
                Legacy System<br />
                Integration
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Integrate legacy systems with<br />
                modern applications,<br />
                maximizing your existing<br />
                investments and enabling<br />
                smooth digital transformation<br />
                with MuleSoft's advanced tools.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >API Lifecycle<br/>
              Management
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Manage your API lifecycle with<br />
                centralized governance, ensuring<br />
                efficient design, development,<br />
                and deployment that responds to<br />
                evolving business needs.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >Performance Optimization and<br /> Scalability
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Enhance the speed, reliability,<br />
                and scalability of your APIs,<br />
                ensuring your infrastructure<br />
                meets growing demands without<br />
                compromising performance.</p>
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
          AppExchange & App Development
        </h1>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="20" fill="#ccc" />
                <circle cx="36" cy="36" r="16" fill="#bbb" />
                <circle cx="36" cy="36" r="12" fill="#888" />
                <circle cx="36" cy="36" r="8" fill="#444" />
                <circle cx="36" cy="36" r="5" fill="#111" />
                </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >Custom App <br />
              Development
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Design, develop, and deploy<br />
                Salesforce apps that integrate<br />
                seamlessly, deliver robust<br />
                performance, and provide a<br />
                user-friendly experience.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 58,26 58,46 36,58 14,46 14,26" fill="#ccc"/>
                <polygon points="36,20 53,29 53,44 36,53 19,44 19,29" fill="#bbb"/>
                <polygon points="36,26 48,32 48,42 36,48 24,42 24,32" fill="#888"/>
                <polygon points="36,32 43,36 43,41 36,45 29,41 29,36" fill="#444"/>
                <polygon points="36,37 40,39 40,42 36,44 32,42 32,39" fill="#111"/>
                </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >AppExchange Security<br /> Review
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Ensure your app meets<br />
                Salesforce’s security standards<br />
                with thorough code reviews and<br />
                compliance checks, expediting its<br />
                approval for the AppExchange<br />
                marketplace.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >
                AppExchange App<br /> Optimization
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Optimize your Salesforce app for<br />
                superior performance, reliability,<br />
                and user experience, ensuring it<br />
                stands out in the competitive<br />
                AppExchange marketplace.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>
              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >AppExchange Maintenance<br /> and Support
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Keep your app functional and<br />
                up-to-date with proactive<br />
                maintenance, performance<br />
                tuning, and user support,<br />
                minimizing disruptions and<br />
                maximizing user satisfaction.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="d-flex flex-column align-items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <polygon points="36,14 66,58 6,58" fill="#ccc"/>
                <polygon points="36,29 57,58 15,58" fill="#bbb"/>
                <polygon points="36,40 51,58 21,58" fill="#888"/>
                <polygon points="36,49 45,58 27,58" fill="#444"/>
                <polygon points="36,55 41,58 31,58" fill="#111"/>
                </svg>

              <h4
                className="mb-2"
                style={{ fontWeight: "300" }}
              >AppExchange Compliance<br />and Certification
              </h4>
              <p className="text-muted"  style={{ fontSize: "1.13rem", margin: 0 }}>
                Navigate the certification<br />
                process with expert guidance,<br />
                ensuring your app meets all<br />
                necessary regulations and is<br />
                ready for distribution on the<br />
                AppExchange.</p>
            </div>
          </div>
        </div>
        
    </section>
  );
};

const Page=()=>{
    // useEffect(() => {
    //    AOS.init({ duration: 200, once: true,disable: false, 
    //                mirror: false,   });
    // }, []);
    return(
        <>
        <Block1 />
        <Block2 />
        </>
    );
}
export default  Page;
