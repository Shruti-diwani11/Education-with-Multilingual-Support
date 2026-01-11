// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FloatingLanguageSelector from "../components/FloatingLanguageSelector";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  // ✅ Get user once and reuse everywhere
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        {/* ✅ Pass user to Header */}
        <Header user={user} />

        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>

      <FloatingLanguageSelector />
    </div>
  );
};

export default MainLayout;