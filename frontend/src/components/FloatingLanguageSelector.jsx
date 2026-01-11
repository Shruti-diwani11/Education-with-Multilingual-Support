import { useState } from "react";
import styles from "./FloatingLanguageSelector.module.css";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "../context/LanguageContext";

const FloatingLanguageSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getLectureLanguage, getCaptionLanguage } = useLanguage();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.floatingSelector} ${isExpanded ? styles.expanded : ""}`}>
      <button 
        className={styles.toggleButton} 
        onClick={toggleExpand}
        aria-label="Toggle language selector"
        title="Change Languages"
      >
        <svg
          className={styles.globeIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {!isExpanded && (
          <div className={styles.quickFlags}>
            <span className={styles.miniFlag}>{getLectureLanguage().flag}</span>
            <span className={styles.miniFlag}>{getCaptionLanguage().flag}</span>
          </div>
        )}
      </button>

      {isExpanded && (
        <div className={styles.expandedContent}>
          <div className={styles.expandedHeader}>
            <svg
              className={styles.headerIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className={styles.expandedTitle}>Language Settings</h3>
            <button 
              className={styles.closeButton}
              onClick={toggleExpand}
              aria-label="Close language selector"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className={styles.languageDropdowns}>
            <div className={styles.dropdownWrapper}>
              <label className={styles.dropdownLabel}>
                <span className={styles.labelEmoji}>🎓</span>
                <span>Lecture Language</span>
              </label>
              <LanguageDropdown type="lecture" />
            </div>

            <div className={styles.dropdownWrapper}>
              <label className={styles.dropdownLabel}>
                <span className={styles.labelEmoji}>📝</span>
                <span>Caption Language</span>
              </label>
              <LanguageDropdown type="caption" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingLanguageSelector;