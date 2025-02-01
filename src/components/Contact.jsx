import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BiMailSend } from "react-icons/bi";
import translations from "../translations";
import { useSelector } from "react-redux";

const Contact = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              {translations[language].contact.title}
            </p>
            <p className="py-6">{translations[language].contact.subTitle}</p>
          </div>

          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/13149ab5-4430-4e88-b8d7-63bd9c90a7e9"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name*"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email*"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message*"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                {translations[language].contact.sendButton}{" "}
                <BiMailSend className="ml-1" size={26} />
              </button>
            </form>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
