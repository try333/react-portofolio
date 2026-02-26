import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import translations from "../translations";

const PortfolioPage = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <NavBar isPortfolioPage={true} />
      <section className="pt-28 pb-6 px-4 text-white max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold">{translations[language].portfolio.pageTitle}</h1>
        <p className="text-gray-300 mt-3">{translations[language].portfolio.pageSubtitle}</p>
      </section>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
