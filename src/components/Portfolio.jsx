import React, { useState, useEffect } from "react";
import aksaraP from "../assets/portfolio/aksaraportfolio.jpg";
import asistenP from "../assets/portfolio/asistenportfolio.jpg";
import lagunusatara from "../assets/portfolio/laguportfolio.jpg";
import laravelmovies from "../assets/portfolio/laravelmovies.PNG";
import arsitek from "../assets/portfolio/makna-design.png";
import medical from "../assets/portfolio/medical.png";
import LinkIcon from "../assets/link.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Portfolio.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useSelector } from "react-redux";
import translations from "../translations";

const Portfolio = () => {
  const [portfol, setPortfol] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  const language = useSelector((state) => state.language.language);
  
  // Choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setPortfol(1);
    } else if (window.innerWidth < 992) {
      setPortfol(2);
    } else {
      setPortfol(3);
    }
  };

  // Create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const CustomIndicator = ({ index }) => {
    return (
      <div
        className={`h-2 w-2 rounded-full mx-1 ${
          index === currentSlide ? "bg-white" : "bg-gray-400"
        }`}
      ></div>
    );
  };

  // Portfolio data for different languages
  const portfolios = {
    en: [
      {
        id: 0,
        src: laravelmovies,
        appname: "Laravel Movies Website",
        link: "https://github.com/try333/laravel-movies",
        stack: ["Laravel", "TailwindCSS", "REST API"],
      },
      {
        id: 1,
        src: asistenP,
        appname: "Virtual Assistant with Speech Recognition",
        link: "https://drive.google.com/file/d/18BrUUVHItjanHi148V9Ld4pl2hnvak90/view?usp=drive_link",
        stack: ["React Native", "JavaScript", "Realm"],
      },
      {
        id: 2,
        src: aksaraP,
        appname: "Indonesian Traditional Language Learning App",
        link: "https://drive.google.com/file/d/1VhfFDyr7tFoKyCAXy1NftvFlRz7lHMut/view?usp=sharing",
        stack: ["React Native", "JavaScript", "Realm"],
      },
      {
        id: 3,
        src: lagunusatara,
        appname:
          "Indonesian national anthem songs search app with speech recognition",
        link: "https://drive.google.com/file/d/15XSGdQ9AszaGrzWv5Eav9wuSta19ZhfI/view?usp=sharing",
        stack: ["React Native", "JavaScript", "Realm"],
      },
      {
        id: 4,
        src: arsitek,
        appname: "Architect Website Landing Page",
        link: "http://makna.projekx.my.id",
        stack: ["Laravel", "Bootstrap 5", "MySQL"],
      },
      {
        id: 5,
        src: medical,
        appname: "Medical Checkup Appointment Web App",
        link: "http://medical-checkup.vercel.app",
        stack: ["Next.js", "Typescript", "Tailwind", "AppWrite DB"],
      },
    ],
    id: [
      {
        id: 0,
        src: laravelmovies,
        appname: "Situs Web Laravel Movies",
        link: "https://github.com/try333/laravel-movies",
        stack: ["Laravel", "TailwindCSS", "REST API"],
      },
      {
        id: 1,
        src: asistenP,
        appname: "Asisten Virtual dengan Pengenalan Suara",
        link: "https://drive.google.com/file/d/18BrUUVHItjanHi148V9Ld4pl2hnvak90/view?usp=drive_link",
        stack: ["React Native", "JavaScript", "Realm"],
      },
      {
        id: 2,
        src: aksaraP,
        appname: "Aplikasi Pembelajaran Bahasa Tradisional Indonesia",
        link: "https://drive.google.com/file/d/1VhfFDyr7tFoKyCAXy1NftvFlRz7lHMut/view?usp=sharing",
        stack: ["React Native", "JavaScript", "Realm"],
      },
      {
        id: 3,
        src: lagunusatara,
        appname:
          "Aplikasi Pencarian Lagu Nasional Indonesia dengan Pengenalan Suara",
        link: "https://drive.google.com/file/d/15XSGdQ9AszaGrzWv5Eav9wuSta19ZhfI/view?usp=sharing",
        stack: ["React Native", "JavaScript", "Realm"],
      },
      {
        id: 4,
        src: arsitek,
        appname: "Halaman Landing Situs Web Arsitek",
        link: "http://makna.projekx.my.id",
        stack: ["Laravel", "Bootstrap 5", "MySQL"],
      },
      {
        id: 5,
        src: medical,
        appname: "Aplikasi Web Janji Temu Pemeriksaan Kesehatan",
        link: "http://medical-checkup.vercel.app",
        stack: ["Next.js", "Typescript", "Tailwind", "AppWrite DB"],
      },
    ],
  };

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

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
            <div className="w-full">
              <div className="slide-container w-full">
                <Slide
                  slidesToShow={portfol}
                  indicators={(index) => <CustomIndicator index={index} />}
                  transitionDuration={200}
                  canSwipe={true}
                  onChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
                  duration={5000}
                >
                  {portfolios[language].reverse().map((porto) => (
                    <div className="each-slide w-full md:px-3" key={porto.id}>
                      <div className="shadow-md shadow-gray-600 rounded-lg">
                        <img
                          src={porto.src}
                          alt=""
                          className="rounded-md duration-200 hover:scale-105 w-full"
                        />
                        <div className="flex items-center justify-center text-center bottom-0">
                          <span className="px-6 py-3 duration-200 hover:scale-105">
                            {porto.appname}
                          </span>
                        </div>
                        <div className="flex justify-center mb-4">
                          <a href={porto.link} target="_blank">
                            <img src={LinkIcon} alt="" className="w-8 h-8" />
                          </a>
                        </div>

                        <div className="flex justify-center pb-4 flex-wrap">
                          {porto.stack.map((stack, index) => (
                            <p key={index}>
                              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mx-1 mb-1 rounded dark:bg-blue-900 dark:text-blue-300">
                                {stack}
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Portfolio;
