import React from "react";
import IconProgrammer from "../assets/programmer.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "animate.css/animate.min.css";
import translations from "../translations";
import { useSelector } from "react-redux";
//import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-28 pb-2"
    >
      {/*<AnimationOnScroll animateIn="animate__bounce" initiallyVisible={true}>*/}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row animate__animated animate__bounce animate__repeat-1">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {translations[language].home.title}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {translations[language].home.subTitle}
          </p>

          <div>
            <a
              href="/CV Tri Hariadi - Software Developer.pdf"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              download={true}
            >
              {translations[language].home.cvButton}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex">
          <img
            src={IconProgrammer}
            alt="my profile"
            className="rounded-2xl mx-auto hidden lg:block"
          />
        </div>
      </div>
      {/*</AnimationOnScroll>*/}
    </div>
  );
};

export default Home;
