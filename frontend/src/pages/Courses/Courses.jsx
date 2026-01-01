import styles from "./Courses.module.css";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const COURSES = [
  {
    id: 1,
    title: "Advanced JavaScript",
    subtitle: "Master modern JS concepts",
    progress: 68,
    lessons: 24,
    timeLeft: "4h 30m left",
    status: "in-progress",
    gradient: "linear-gradient(135deg, #6b7cff, #8e9cff)"
  },
  {
    id: 2,
    title: "Spanish for Beginners",
    subtitle: "Learn conversational Spanish",
    progress: 45,
    lessons: 18,
    timeLeft: "6h 15m left",
    status: "in-progress",
    gradient: "linear-gradient(135deg, #f6a84f, #f2b56b)"
  },
  {
    id: 3,
    title: "UI/UX Design",
    subtitle: "Design fundamentals",
    progress: 100,
    lessons: 12,
    timeLeft: "Completed",
    status: "completed",
    gradient: "linear-gradient(135deg, #4dbb87, #6ad3a1)"
  }
];

export default function Courses() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredCourses = COURSES.filter(course => {
    if (filter !== "all" && course.status !== filter) return false;
    if (!course.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.main}>
        {/* HEADER */}
        <header className={styles.header}>
          <div>
            <h1>My Courses</h1>
            <p>Manage and continue your learning</p>
          </div>

          <div className={styles.controls}>
            <select value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* COURSE GRID */}
        {filteredCourses.length === 0 ? (
          <div className={styles.empty}>
            <h2>No courses yet</h2>
            <button>Browse Courses</button>
          </div>
        ) : (
          <section className={styles.grid}>
            {filteredCourses.map(course => (
              <div key={course.id} className={styles.card}>
                <div
                  className={styles.cardHeader}
                  style={{ background: course.gradient }}
                />

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3>{course.title}</h3>
                    <span className={`${styles.badge} ${styles[course.status]}`}>
                      {course.status.replace("-", " ")}
                    </span>
                  </div>

                  <p className={styles.subtitle}>{course.subtitle}</p>

                  <div className={styles.progressWrap}>
                    <span>{course.progress}%</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className={styles.meta}>
                    <span>⏱ {course.timeLeft}</span>
                    <span>📚 {course.lessons} lessons</span>
                  </div>

                  <button className={styles.cta}>
                    {course.status === "completed"
                      ? "View Certificate"
                      : "Continue"}
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
