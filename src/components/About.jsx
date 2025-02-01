import React from "react";
import HeroImage from "../assets/profiltri.png";
import "animate.css/animate.min.css";
import translations from "../translations"; // Updated import path
import { useSelector } from "react-redux";

const About = () => {
  const language = useSelector((state) => state.language.language);
  
  // Handle missing translations gracefully
  const aboutTranslations = translations[language]?.about || translations['en']?.about; // Fallback to 'en' if current language data is missing

  return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:pb-20 w-full h-full animate__animated animate__fadeInLeft animate__repeat-1">
        <div className="pb-5 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {aboutTranslations?.title}
          </p>
        </div>
        <div className="flex flex-col mt-5 md:flex-row">

          <img src={HeroImage} alt="my profile" className="mx-auto w-[120px] md:w-[240px] lg:w-[300px] drop-shadowx" />

          <table className="border-separate border-spacing-5 break-all text-lg lg:text-xl lg:mr-20">
            <tbody>
              <tr>
                <td className="font-bold">{aboutTranslations.nameLabel}:</td>
                <td>Tri Hariadi Purnomo</td>
              </tr>
              <tr>
                <td className="font-bold">{aboutTranslations.addressLabel}:</td>
                <td>
                  <a href="https://goo.gl/maps/5zTdiRvKbmj1ic6Z9" target="_blank" rel="noreferrer">
                  {aboutTranslations.address}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="font-bold">Email:</td>
                <td>tri.hariadi303@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
