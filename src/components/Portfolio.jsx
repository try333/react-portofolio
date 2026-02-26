import React, { useMemo, useState } from "react";
import aksaraP from "../assets/portfolio/aksaraportfolio.jpg";
import asistenP from "../assets/portfolio/asistenportfolio.jpg";
import lagunusatara from "../assets/portfolio/laguportfolio.jpg";
import laravelmovies from "../assets/portfolio/laravelmovies.PNG";
import arsitek from "../assets/portfolio/makna-design.png";
import medical from "../assets/portfolio/medical.png";
import LinkIcon from "../assets/link.png";
import "./Portfolio.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useSelector } from "react-redux";
import translations from "../translations";

const portfolioImages = {
  laravelMovies: laravelmovies,
  virtualAssistant: asistenP,
  aksaraApp: aksaraP,
  laguNusantara: lagunusatara,
  architectLanding: arsitek,
  medicalAppointment: medical,
};

const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const language = useSelector((state) => state.language.language);

  const portfolios = useMemo(() => {
    const translatedItems = translations[language].portfolio.items || [];

    return translatedItems
      .map((item) => ({
        ...item,
        src: portfolioImages[item.imageKey],
      }))
      .filter((item) => item.src)
      .reverse();
  }, [language]);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:pb-10"
    >
      <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              {translations[language].portfolio.title}
            </p>
            <p className="py-6">{translations[language].portfolio.subTitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((porto) => (
              <button
                key={porto.id}
                type="button"
                className="text-left shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-gray-900 hover:scale-105 transition duration-200"
                onClick={() => setSelectedPortfolio(porto)}
              >
                <img
                  src={porto.src}
                  alt={porto.appname}
                  className="rounded-t-md h-52 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold min-h-[56px]">{porto.appname}</h3>
                  <div className="flex flex-wrap mt-3">
                    {porto.stack.map((stack, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mr-1 mb-1 rounded dark:bg-blue-900 dark:text-blue-300"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimationOnScroll>

      {selectedPortfolio && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPortfolio(null)}
          role="presentation"
        >
          <div
            className="bg-gray-900 rounded-lg max-w-lg w-full overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={selectedPortfolio.src}
              alt={selectedPortfolio.appname}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{selectedPortfolio.appname}</h3>
              <p className="text-gray-300 mb-4">{selectedPortfolio.description}</p>

              <div className="flex flex-wrap mb-5">
                {selectedPortfolio.stack.map((stack, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mr-1 mb-1 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <a
                  href={selectedPortfolio.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600 transition"
                >
                  <img src={LinkIcon} alt="Link" className="w-5 h-5" />
                  {translations[language].portfolio.visitButton}
                </a>
                <button
                  type="button"
                  className="px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-800 transition"
                  onClick={() => setSelectedPortfolio(null)}
                >
                  {translations[language].portfolio.closeButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
