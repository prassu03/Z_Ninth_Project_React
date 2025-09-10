import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Link } from 'react-router-dom';
// import {Link  as ScrollLink} from 'react-scroll';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"
import Services from "./components/Services.jsx"
import Explore from "./components/Explore.jsx";
import ClientsAndContact from "./components/ClientsAndContact.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import Container from "./components/about_components/Container.jsx";
import Description from "./components/about_components/Description.jsx";
import Clients from "./components/about_components/Clients.jsx";

import Component from "./components/values_components/Component.jsx";

import Comp1 from "./components/Prod_components/Comp1.jsx";
import Comp2 from "./components/Prod_components/Comp2.jsx";

import Block from "./components/salesforce_services/Block.jsx";

import Page from "./components/Mulesoft_services/Page.jsx";

import Navai from "./components/ai/Navai.jsx";
import Ai_home from "./components/ai/Ai_home.jsx";
import WhoWeAre from "./components/ai/WhoWeAre.jsx";
import AiSolutions from "./components/ai/AiSolutions.jsx";
import AiIndustrySol from "./components/ai/AiIndustrySol.jsx";
import AiToolbox from "./components/ai/AiToolbox.jsx";
import OurApproach from "./components/ai/OurApproach.jsx";
import ContactSection from "./components/ai/ContactSection.jsx";

import ZyntegrateHero from "./components/integrate_services/ZyntegrateHero.jsx";
import WhatSection from "./components/integrate_services/WhatSection.jsx";
import KeyFeatures from "./components/integrate_services/KeyFeatures.jsx";
import BuiltFor from "./components/integrate_services/BuiltFor.jsx";
import WhyChoose from "./components/integrate_services/WhyChoose.jsx";
import ContactDetails from "./components/integrate_services/ContactDetails.jsx";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Explore />
      <ClientsAndContact />
      <Contact />
      <Footer />
    </>
  );
}
function AboutLayout() {
  return (
    <>
      <Navbar />
      <Container />
      <Description />
      <Clients />
      <Footer />
    </>
  );
}
function ValuesLayout() {
  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
}
function Salesforce() {
  return (
    <>
    <Navbar />
      <Block />
      <Footer />
    </>
  );
}
function Mulesoft() {
  return (
    <>
    <Navbar />
      <Page />
      <Footer />
    </>
  );
}
function AiServices() {
  return (
    <>
      <Navai />
      <Ai_home />
      <WhoWeAre />
      <AiSolutions />
      <AiIndustrySol />
      <AiToolbox />
      <OurApproach />
      <ContactSection />
      <Footer />
    </>
  );
}
function IntegrateService(){
  return(
    <>
    <ZyntegrateHero />
    <WhatSection />
    <KeyFeatures />
    <BuiltFor />
    <WhyChoose />
    <ContactDetails />
    </>
  );
}
function ProductLayout() {
  return (
    <>
    <Navbar />
      <Comp1 />
      <Comp2 />
      <Footer />
    </>
  );
}
function App() {

  return (
    <Router>
    {/* <> */}
      {/* <Navbar /> */}
      <Routes> 
        <Route path="/" element={<HomeLayout />} />
        <Route path="/AboutUs" element={<AboutLayout />} />
        <Route path="/OurValues" element={<ValuesLayout />} />
        <Route path="/Salesforce" element={<Salesforce />} />
        <Route path="/Mulesoft" element={<Mulesoft />} />
        <Route path="/AI" element={<AiServices />} />
        <Route path="/Integration" element={<IntegrateService />} />  
        <Route path="/Products" element={<ProductLayout />}/>
      
    </Routes>
    {/* <Footer /> */}
    </Router>
    // </>
  );
}

export default App;
