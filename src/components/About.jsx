import React from "react";
import HeroImage from "../assets/profiltri.jpeg";
import "animate.css/animate.min.css";
//import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {

  return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:pb-20 w-full h-full animate__animated animate__fadeInLeft animate__repeat-1">
        <div className="pb-5 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col mt-5 md:flex-row">

          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-[120px] md:w-[240px] lg:w-[300px]" />

          <table class="border-separate border-spacing-5 break-all text-lg lg:text-xl lg:mr-20">
            <tbody>
              <tr>
                <td class="font-bold">Name:</td>
                <td class="">Tri Hariadi Purnomo</td>
              </tr>
              <tr>
                <td class=" font-bold">Date of Birth:</td>
                <td class="">28 June 1997</td>
              </tr>
              <tr>
                <td class="font-bold">Address:</td>
                <td class="">
                  <a href="https://goo.gl/maps/5zTdiRvKbmj1ic6Z9" target="_blank" rel="noreferrer">Parepare, South Sulawesi</a>
                </td>
              </tr>
              <tr>
                <td class=" font-bold">Email:</td>
                <td class="">tri.hariadi303@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default About;