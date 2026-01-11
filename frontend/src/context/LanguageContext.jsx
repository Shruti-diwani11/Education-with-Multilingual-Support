//LanguageContent.jsx

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Available languages
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
    { code: "es", name: "Spanish", flag: "🇪🇸", nativeName: "Español" },
    { code: "fr", name: "French", flag: "🇫🇷", nativeName: "Français" },
    { code: "de", name: "German", flag: "🇩🇪", nativeName: "Deutsch" },
    { code: "hi", name: "Hindi", flag: "🇮🇳", nativeName: "हिन्दी" },
    { code: "zh", name: "Chinese", flag: "🇨🇳", nativeName: "中文" },
    { code: "ja", name: "Japanese", flag: "🇯🇵", nativeName: "日本語" },
    { code: "ko", name: "Korean", flag: "🇰🇷", nativeName: "한국어" },
    { code: "pt", name: "Portuguese", flag: "🇵🇹", nativeName: "Português" },
    { code: "ar", name: "Arabic", flag: "🇸🇦", nativeName: "العربية" },
    { code: "ru", name: "Russian", flag: "🇷🇺", nativeName: "Русский" },
    { code: "it", name: "Italian", flag: "🇮🇹", nativeName: "Italiano" },
  ];

  // Initialize from localStorage or default to English
  const [lectureLanguage, setLectureLanguage] = useState(() => {
    const saved = localStorage.getItem("lectureLanguage");
    return saved || "en";
  });

  const [captionLanguage, setCaptionLanguage] = useState(() => {
    const saved = localStorage.getItem("captionLanguage");
    return saved || "es";
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("lectureLanguage", lectureLanguage);
  }, [lectureLanguage]);

  useEffect(() => {
    localStorage.setItem("captionLanguage", captionLanguage);
  }, [captionLanguage]);

  // Helper function to get language object by code
  const getLanguageByCode = (code) => {
    return languages.find((lang) => lang.code === code) || languages[0];
  };

  const value = {
    languages,
    lectureLanguage,
    captionLanguage,
    setLectureLanguage,
    setCaptionLanguage,
    getLectureLanguage: () => getLanguageByCode(lectureLanguage),
    getCaptionLanguage: () => getLanguageByCode(captionLanguage),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};