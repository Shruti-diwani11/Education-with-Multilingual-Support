import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <div className={styles.badge}>EUMU</div>
        <p>Education with Multilingual Support</p>
      </div>

      {/* MENU */}
      <nav className={styles.menu}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          My Courses
        </NavLink>

        <div className={styles.link}>Languages</div>
        <div className={styles.link}>Assignments</div>
        <div className={styles.link}>Progress</div>

        <div className={styles.link}>
          Messages <span className={styles.badgeCount}>3</span>
        </div>

        <div className={styles.link}>Settings</div>
      </nav>

      {/* PROFILE */}
      <div className={styles.profile}>
        <div className={styles.avatar}>JS</div>
        <div>
          <strong>Jyoti Shah</strong>
          <span>Student</span>
        </div>
      </div>
    </aside>
  );
}
