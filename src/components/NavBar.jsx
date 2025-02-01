import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/languageSlice";
import translations from "../translations";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    dispatch(setLanguage(lang));
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0 z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          {translations[language].navbar.portfolioTitle}
        </h1>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {translations[language].navbar[link]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-black text-gray-300 px-2 py-1 rounded border border-gray-600"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center transition-transform duration-300 ${
          nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="mb-6">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-gray-800 text-white text-2xl px-4 py-2 rounded"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
        <ul className="text-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {translations[language].navbar[link]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
