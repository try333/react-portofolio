import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

const GEOLOCATION_API_URL = "https://ipapi.co/json/";

const LanguageInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const detectLanguageByCountry = async () => {
      try {
        const response = await fetch(GEOLOCATION_API_URL);

        if (!response.ok) {
          dispatch(setLanguage("en"));
          return;
        }

        const data = await response.json();
        const countryCode = data?.country_code;
        const language = countryCode === "ID" ? "id" : "en";

        dispatch(setLanguage(language));
      } catch {
        dispatch(setLanguage("en"));
      }
    };

    detectLanguageByCountry();
  }, [dispatch]);

  return null;
};

export default LanguageInitializer;
