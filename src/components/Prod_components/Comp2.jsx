import react, {useEffect} from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
const Comp2=()=>{
    return(
        <section class="container ">
            <div className="head-img text-align-center ps-1">
                <img src=".\imgs\Products\Zyntegrate.jpg" alt="Zyntegrate" />
                <h2>Unified Data Integration & Automation Platform</h2>
                <p class="fs-5" >An intelligent, low-code integration platform designed to automate and orchestrate complex data<br/>
                     flows across legacy systems, modern databases, cloud services, and APIs. Built for scalability,<br/>
                      Zyntegrate empowers technical teams to streamline operations while enabling business leaders to<br />
                     drive digital transformation, eliminate data silos, and unlock real-time insights.</p>
            </div>
            <div className="head-img text-align-center ps-1">
                <img src=".\imgs\Products\finudge.png" alt="Finudge" />
                <h2>AI-Powered Stock Alerts for Smarter, Faster Investing</h2>
                <p class="fs-5" >Stay ahead of the market with Finudge’s AI-powered real-time stock alerts, delivering personalized<br/>
                   price and percentage change notifications directly to your SMS or email. Designed for retail investors,<br/>
                   active traders, swing traders, and portfolio managers, Finudge helps you make smarter investment<br />
                   decisions without constantly monitoring market fluctuations all with less screen time and more<br />
                   confidence.</p>
            </div>
            <div className="head-img text-align-center ps-1">
                <img src=".\imgs\Products\Xplunk.png" alt="Xplunk" />
                <h2>AI-powered automation for faster, smarter Splunk configuration.</h2>
                <p class="fs-5" >Xplunk is an advanced AI-driven solution designed to simplify and accelerate Splunk Enterprise<br/>
                    configuration. Instead of spending hours manually identifying and tuning parameters, Xplunk<br/>
                    automatically extracts key settings from your log samples—saving time, reducing errors, and boosting<br />
                    efficiency.</p>
            </div>
        </section>
    );
}
// useEffect(() => {
//     AOS.init({ duration: 200, once: true,disable: false, 
//     mirror: false,   });   
//     }, []);
// function Comp2() {
//     useEffect(() => {
//     AOS.init({ duration: 200, once: true,disable: false, 
//     mirror: false,   });   
//     }, []);
// }

export default Comp2;