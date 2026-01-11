// Header.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ user }) => {
  const location = useLocation();

  // Get initials safely
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Determine placeholder based on current route
  const getSearchPlaceholder = () => {
    const path = location.pathname;
    
    // Hide search on settings page
    if (path.includes('/settings')) {
      return null;
    }
    
    if (path.includes('/assignments')) {
      return "Search assignments...";
    }
    // Default for dashboard, courses, and other pages
    return "Search courses, materials...";
  };

  const searchPlaceholder = getSearchPlaceholder();

  return (
    <header className={styles.header}>
      {/* Empty div to maintain space-between layout when search is hidden */}
      <div>
        {/* Search - Only show if placeholder is not null */}
        {searchPlaceholder && (
          <div className={styles.searchContainer}>
            <svg
              className={styles.searchIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path
                d="m21 21-4.35-4.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              placeholder={searchPlaceholder}
              className={styles.searchInput}
            />
          </div>
        )}
      </div>

      {/* Right Actions */}
      <div className={styles.actions}>
        {/* Language */}
        <button className={styles.languageBtn}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path
              d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>English</span>
        </button>

        {/* Notifications */}
        <button className={styles.notificationBtn}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.badge}>2</span>
        </button>

        {/* Avatar */}
        <div className={styles.avatar}>
          {user?.avatar ? (
            <img src={user.avatar} alt={user?.name || "User"} />
          ) : (
            <span>{getInitials(user?.name)}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;