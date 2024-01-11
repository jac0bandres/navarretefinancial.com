import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

export default function LanguageButton() {
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <>
      <div className="flex w-1/2 items-center justify-end mx-5 text-white text-md font-mundial">
        <div
          className="flex flex-row justify-center items-center border-2 rounded-2xl px-2 py-1"
          onMouseDown={() => language == "en" ? setLanguage("es") : setLanguage("en")}
        >
          <i className="las la-globe mr-5"></i>
          <h1>{language}</h1>
        </div>
      </div>
    </>
  );
}
