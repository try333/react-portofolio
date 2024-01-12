import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./assets/loader.css";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   document.title = "Tri Hariadi Purnomo - Web and Mobile Development";
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      // do something else
      setLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      setLoading(true);
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      console.log("loading");
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <div className="bg-gradient-to-b from-black to-gray-800">
      {loading ? (
        <div className="loader-container bg-gradient-to-b from-black to-gray-800">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content">
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <SocialLinks />
          <Footer />
        </div>
      )}
      ;
    </div>
  );
};

export default App;
