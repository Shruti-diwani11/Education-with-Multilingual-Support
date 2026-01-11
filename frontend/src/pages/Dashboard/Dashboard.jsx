//Dashboard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };
  const navigate = useNavigate();

  const handleViewCourses = () => {
    navigate("/courses");
  };

  const handleViewAssignments = () => {
    navigate("/assignments");
  };

  return (
    <main className={styles.dashboardMain}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>
          Welcome back, {user?.name || "Guest"}! 👋
        </h1>
        <p className={styles.welcomeSubtitle}>
          What would you like to do today?
        </p>
      </div>

      <div className={styles.cardsGrid}>
        <div className={`${styles.card} ${styles.cardCourses}`}>
          <div className={styles.cardIconWrapper}>
            <svg
              className={styles.cardIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className={styles.cardTitle}>My Courses</h2>

          <div className={styles.cardContent}>
            <div className={styles.cardStatMain}>12 Active Courses</div>
            <div className={styles.cardStatSubtitle}>
              Continue your learning journey
            </div>
            <div className={styles.cardStatDetail}>• 5 In Progress</div>
            <div className={styles.cardStatDetail}>• 7 Completed</div>
          </div>

          <button className={styles.cardButton} onClick={handleViewCourses}>
            View All Courses →
          </button>
        </div>

        <div className={`${styles.card} ${styles.cardAssignments}`}>
          <div className={styles.cardIconWrapper}>
            <svg
              className={styles.cardIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="9 11 12 14 22 4" />
              <path
                d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className={styles.cardTitle}>Assignments</h2>

          <div className={styles.cardContent}>
            <div className={styles.cardStatMain}>5 Pending Tasks</div>
            <div className={styles.cardStatSubtitle}>
              Complete your assignments on time
            </div>
            <div className={styles.cardStatDetail}>• 3 Due This Week</div>
            <div className={styles.cardStatDetail}>• 2 Due Next Week</div>
          </div>

          <button
            className={`${styles.cardButton} ${styles.cardButtonAssignments}`}
            onClick={handleViewAssignments}
          >
            View Assignments →
          </button>
        </div>
      </div>

      <div className={styles.activitySection}>
        <h2 className={styles.activityTitle}>Recent Activity</h2>

        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityContent}>
              <div className={styles.activityIcon}>💬</div>
              <div className={styles.activityText}>
                <div className={styles.activityName}>
                  New: Spanish Conversation Practice Scheduled
                </div>
                <div className={styles.activityTime}>
                  Tomorrow at 10:00 AM • Duration: 1 hour
                </div>
              </div>
            </div>
            <span className={`${styles.activityBadge} ${styles.upcoming}`}>
              Upcoming
            </span>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityContent}>
              <div className={styles.activityIcon}>✏️</div>
              <div className={styles.activityText}>
                <div className={styles.activityName}>
                  Submitted: UI/UX Design Assignment
                </div>
                <div className={styles.activityTime}>
                  Yesterday • Waiting for review
                </div>
              </div>
            </div>
            <span className={`${styles.activityBadge} ${styles.pending}`}>
              Pending
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;