//Courses.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Courses.module.css";

const Courses = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };
  const navigate = useNavigate();

  return (
    <main className={styles.coursesMain}>
      {/* Welcome Section */}
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>
          Welcome back, {user?.name || "Guest"}! 👋
        </h1>
        <p className={styles.welcomeSubtitle}>
          Continue your learning journey
        </p>
      </div>

      {/* Statistics Cards */}
      <div className={styles.statsGrid}>
        {/* Total Courses */}
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconBlue}`}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Total Courses</div>
            <div className={styles.statValue}>12</div>
            <div className={styles.statChange}>+2 this month</div>
          </div>
        </div>

        {/* In Progress */}
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconOrange}`}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.statContent}>
            <div className={styles.statLabel}>In Progress</div>
            <div className={styles.statValue}>5</div>
            <div className={styles.statChangeGreen}>Keep going!</div>
          </div>
        </div>

        {/* Completed */}
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconGreen}`}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Completed</div>
            <div className={styles.statValue}>7</div>
            <div className={styles.statChangeGreen}>58% done</div>
          </div>
        </div>

        {/* Languages Learning */}
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconPurple}`}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.statContent}>
            <div className={styles.statLabel}>Languages Learning</div>
            <div className={styles.statValue}>4</div>
            <div className={styles.statChangeBlue}>Multilingual</div>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Continue Learning</h2>

        <div className={styles.coursesGrid}>
          {/* JavaScript Course */}
          <div className={`${styles.courseCard} ${styles.courseBlue}`}>
            <div className={styles.courseHeader}>
              <h3 className={styles.courseTitle}>Advanced JavaScript</h3>
              <p className={styles.courseSubtitle}>
                Master modern JS concepts
              </p>
            </div>

            <div className={styles.courseProgress}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>Progress: 68%</span>
                <span className={styles.timeLeft}>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  4h 30m left
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progressFill} ${styles.progressBlue}`}
                  style={{ width: "68%" }}
                ></div>
              </div>
            </div>

            <button className={`${styles.continueBtn} ${styles.btnBlue}`}>
              Continue
            </button>
          </div>

          {/* Spanish Course */}
          <div className={`${styles.courseCard} ${styles.courseOrange}`}>
            <div className={styles.courseHeader}>
              <h3 className={styles.courseTitle}>Spanish for Beginners</h3>
              <p className={styles.courseSubtitle}>
                Learn conversational Spanish
              </p>
            </div>

            <div className={styles.courseProgress}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>Progress: 45%</span>
                <span className={styles.timeLeft}>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  6h 15m left
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progressFill} ${styles.progressOrange}`}
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <button
              className={`${styles.continueBtn} ${styles.btnOrange}`}
            >
              Continue
            </button>
          </div>

          {/* UI/UX Course */}
          <div className={`${styles.courseCard} ${styles.courseGreen}`}>
            <div className={styles.courseHeader}>
              <h3 className={styles.courseTitle}>UI/UX Design</h3>
              <p className={styles.courseSubtitle}>Design fundamentals</p>
            </div>

            <div className={styles.courseProgress}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>Progress: 82%</span>
                <span className={styles.timeLeft}>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  2h left
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progressFill} ${styles.progressGreen}`}
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>

            <button className={`${styles.continueBtn} ${styles.btnGreen}`}>
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Classes Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Upcoming Classes</h2>

        <div className={styles.classesGrid}>
          {/* Class 1 */}
          <div className={styles.classCard}>
            <div className={styles.classIcon}>📚</div>
            <div className={styles.classContent}>
              <h3 className={styles.className}>
                Web Development Workshop
              </h3>
              <p className={styles.classTime}>
                Today at 3:00 PM • Duration: 2 hours
              </p>
            </div>
            <button className={`${styles.classBtn} ${styles.joinBtn}`}>
              Join Now
            </button>
          </div>

          {/* Class 2 */}
          <div className={styles.classCard}>
            <div className={styles.classIcon}>💡</div>
            <div className={styles.classContent}>
              <h3 className={styles.className}>
                Spanish Conversation Practice
              </h3>
              <p className={styles.classTime}>
                Tomorrow at 10:00 AM • Duration: 1 hour
              </p>
            </div>
            <button
              className={`${styles.classBtn} ${styles.scheduledBtn}`}
            >
              Scheduled
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick Actions</h2>

        <div className={styles.actionsGrid}>
          <button className={`${styles.actionBtn} ${styles.actionBlue}`}>
            <span className={styles.actionIcon}>📝</span>
            Take Quiz
          </button>

          <button className={`${styles.actionBtn} ${styles.actionPurple}`}>
            <span className={styles.actionIcon}>🌐</span>
            Translate
          </button>

          <button className={`${styles.actionBtn} ${styles.actionGreen}`}>
            <span className={styles.actionIcon}>📚</span>
            Study Material
          </button>

          <button className={`${styles.actionBtn} ${styles.actionOrange}`}>
            <span className={styles.actionIcon}>👥</span>
            Join Group
          </button>
        </div>
      </div>
    </main>
  );
};

export default Courses;