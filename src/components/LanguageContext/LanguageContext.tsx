import { useState, createContext } from "react";

export const LanguageContext = createContext("es")

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es")

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    { children }
    </LanguageContext.Provider>
  )
}