import { useState } from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const toggleLanguages = () => {
    setIsLanguagesOpen(!isLanguagesOpen);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.sidebarHeader}>
        <div className={styles.logoCircle}>
          <span className={styles.logoText}>EUMU</span>
        </div>
        <div className={styles.logoSubtitle}>
          Education with Multilingual Support
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.sidebarNav}>
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <svg
            className={styles.navIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>Dashboard</span>
        </NavLink>

        {/* My Courses */}
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <svg
            className={styles.navIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 12h18M3 6h18M3 18h18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>My Courses</span>
        </NavLink>

        {/* Languages Section - Collapsible */}
        <div className={`${styles.languagesSection} ${isLanguagesOpen ? styles.open : ""}`}>
          <button 
            className={styles.languagesHeader}
            onClick={toggleLanguages}
          >
            <svg
              className={styles.navIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Languages</span>
            <svg
              className={`${styles.chevronIcon} ${isLanguagesOpen ? styles.chevronOpen : ""}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 6L8 10L12 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown content with animation */}
          <div className={`${styles.languageControls} ${isLanguagesOpen ? styles.show : ""}`}>
            <div className={styles.languageControl}>
              <label className={styles.languageLabel}>Lecture Language:</label>
              <LanguageDropdown type="lecture" />
            </div>

            <div className={styles.languageControl}>
              <label className={styles.languageLabel}>Caption Language:</label>
              <LanguageDropdown type="caption" />
            </div>
          </div>
        </div>

        {/* Assignments */}
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <svg
            className={styles.navIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>Assignments</span>
        </NavLink>

        {/* Progress */}
        <NavLink
          to="/progress"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <svg
            className={styles.navIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 20V10M12 20V4M6 20v-6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>Progress</span>
        </NavLink>

        {/* Messages */}
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <svg
            className={styles.navIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>Messages</span>
          <span className={styles.notificationBadge}>3</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <svg
            className={styles.navIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* User Profile */}
      <div className={styles.sidebarFooter}>
        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} />
            ) : (
              getInitials(user?.name)
            )}
          </div>

          <div className={styles.userInfo}>
            <div className={styles.userName}>{user?.name || "Guest User"}</div>
            <div className={styles.userRole}>{user?.role || "Student"}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;