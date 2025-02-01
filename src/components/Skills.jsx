import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import php from "../assets/php.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import laravel from "../assets/laravel.png";
import nextjs from "../assets/nextjs.png";
import postman from "../assets/postman-icon.png";
import github from "../assets/github.png";
import jquery from "../assets/jquery.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import mysql from "../assets/mysql.png";
import firebase from "../assets/firebase.png";
import nodejs from "../assets/nodejs.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import translations from "../translations";
import { useSelector } from "react-redux";

const Skills = () => {
  const language = useSelector((state) => state.language.language);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: php,
      title: "PHP",
      style: "shadow-sky-200",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 6,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-600",
    },
    {
      id: 15,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 14,
      src: nextjs,
      title: "NextJS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: jquery,
      title: "Jquery",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },

    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 12,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              {translations[language].skills.title}
            </p>
            <p className="py-6">{translations[language].skills.subTitle}</p>
          </div>
        </AnimationOnScroll>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <AnimationOnScroll animateIn="animate__flipInX" animateOnce={true}>
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 h-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
