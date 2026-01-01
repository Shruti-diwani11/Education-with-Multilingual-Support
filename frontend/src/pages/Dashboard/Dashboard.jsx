import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <input
            className={styles.search}
            placeholder="Search courses, materials..."
          />

          <div className={styles.headerRight}>
            <span className={styles.lang}>English</span>
            <span className={styles.bell}>🔔<b>•</b></span>
            <div className={styles.user}>JS</div>
          </div>
        </header>

        {/* Welcome */}
        <section className={styles.welcome}>
          <h1>Welcome back, Jyoti! 👋</h1>
          <p>What would you like to do today?</p>
        </section>

        {/* Cards */}
        <section className={styles.cards}>
          <div className={`${styles.card} ${styles.courses}`}>
            <h2>My Courses</h2>
            <p><b>12</b> Active Courses</p>
            <p>5 In Progress • 7 Completed</p>
            <button>View All Courses →</button>
          </div>

          <div className={`${styles.card} ${styles.assignments}`}>
            <h2>Assignments</h2>
            <p><b>5</b> Pending Tasks</p>
            <p>3 Due This Week • 2 Due Next Week</p>
            <button>View Assignments →</button>
          </div>
        </section>

        {/* Activity */}
        <section className={styles.activity}>
          <h2>Recent Activity</h2>

          <div className={styles.activityCard}>
            <div>
              <h4>New: Spanish Conversation Practice Scheduled</h4>
              <span>Tomorrow at 10:00 AM • Duration: 1 hour</span>
            </div>
            <span className={styles.upcoming}>Upcoming</span>
          </div>

          <div className={styles.activityCard}>
            <div>
              <h4>Submitted: UI/UX Design Assignment</h4>
              <span>Yesterday • Waiting for review</span>
            </div>
            <span className={styles.pending}>Pending</span>
          </div>
        </section>
      </main>
    </div>
  );
}
