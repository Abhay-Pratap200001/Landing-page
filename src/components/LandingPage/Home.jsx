import React from "react";
// import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import CursorGlow from "./CursorGlory";
import Directory from "./Directory";
import Templates from "./Templates";
function Home() {
  //Importing all components in sigle file 
  return (
    <div>
      <Hero/>
      <Features/>
      <Directory/>
      <Templates/>
      <Pricing/>
      <FAQ/>
      <Testimonials/>
      <Footer/>
      <CursorGlow/>
    </div>
  );
}

export default Home;
