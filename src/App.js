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
import PortfolioPage from "./components/PortfolioPage";
import LanguageInitializer from "./components/LanguageInitializer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      setLoading(true);
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const isPortfolioPage = window.location.pathname === "/portfolio";

  return (
    <Provider store={store}>
      <Analytics />
      <LanguageInitializer />
      <div className="bg-gradient-to-b from-black to-gray-800">
        {loading ? (
          <div className="loader-container bg-gradient-to-b from-black to-gray-800">
            <div className="spinner"></div>
          </div>
        ) : isPortfolioPage ? (
          <PortfolioPage />
        ) : (
          <div className="main-content">
            <NavBar />
            <Home />
            <About />
            <Portfolio limit={6} showViewMore={true} />
            <Skills />
            <Contact />
            <SocialLinks />
            <Footer />
          </div>
        )}
      </div>
    </Provider>
  );
};

export default App;
