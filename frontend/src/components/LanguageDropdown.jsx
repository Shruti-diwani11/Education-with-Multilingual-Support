import { useState, useRef, useEffect } from "react";
import styles from "./LanguageDropdown.module.css";
import { useLanguage } from "../context/LanguageContext";

const LanguageDropdown = ({ type = "lecture", compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {
    languages,
    lectureLanguage,
    captionLanguage,
    setLectureLanguage,
    setCaptionLanguage,
    getLectureLanguage,
    getCaptionLanguage,
  } = useLanguage();

  const currentLanguage =
    type === "lecture" ? getLectureLanguage() : getCaptionLanguage();
  const setLanguage =
    type === "lecture" ? setLectureLanguage : setCaptionLanguage;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (languageCode) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.languageDropdown} ${compact ? styles.compact : ""}`}
      ref={dropdownRef}
    >
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={styles.selectedFlag}>{currentLanguage.flag}</span>
        <span className={styles.selectedName}>
          {compact ? currentLanguage.code.toUpperCase() : currentLanguage.name}
        </span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu} role="listbox">
          <div className={styles.menuHeader}>
            <svg
              className={styles.searchIcon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="7"
                cy="7"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M11 11L14 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.menuTitle}>
              Select {type === "lecture" ? "Lecture" : "Caption"} Language
            </span>
          </div>

          <div className={styles.languageList}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.languageOption} ${
                  currentLanguage.code === lang.code ? styles.active : ""
                }`}
                onClick={() => handleSelect(lang.code)}
                role="option"
                aria-selected={currentLanguage.code === lang.code}
              >
                <span className={styles.languageFlag}>{lang.flag}</span>
                <div className={styles.languageInfo}>
                  <span className={styles.languageName}>{lang.name}</span>
                  <span className={styles.languageNative}>
                    {lang.nativeName}
                  </span>
                </div>
                {currentLanguage.code === lang.code && (
                  <svg
                    className={styles.checkIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;