import React from "react";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <NavBar isPortfolioPage={true} />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
