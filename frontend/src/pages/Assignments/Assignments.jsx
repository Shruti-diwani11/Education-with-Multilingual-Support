import React, { useState } from 'react';
import styles from "./Assignments.module.css";

const Assignments = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('due');

  const assignments = [
    {
      id: 1,
      title: 'JavaScript Final Project',
      course: 'Advanced JavaScript',
      description: 'Submit your complete web application',
      dueDate: 'Today, 11:59 PM',
      weight: '30%',
      status: 'pending',
      urgent: true,
      icon: '📝',
      color: 'red'
    },
    {
      id: 2,
      title: 'Spanish Conversation Recording',
      course: 'Spanish for Beginners',
      description: 'Record a 5-minute conversation',
      dueDate: 'Tomorrow, 5:00 PM',
      weight: '20%',
      status: 'pending',
      urgent: false,
      icon: '💡',
      color: 'orange'
    },
    {
      id: 3,
      title: 'UI/UX Design Case Study',
      course: 'UI/UX Design',
      description: 'Create a complete design analysis',
      dueDate: 'Dec 15, 2024',
      weight: '25%',
      status: 'draft',
      urgent: false,
      icon: '🎨',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Python Data Analysis Quiz',
      course: 'Data Science Basics',
      description: 'Multiple choice and coding questions',
      dueDate: 'Dec 1, 2024',
      weight: null,
      status: 'graded',
      grade: '92/100',
      submitDate: 'Dec 1, 2024',
      urgent: false,
      icon: '✓',
      color: 'green'
    }
  ];

  const stats = {
    total: 8,
    pending: 5,
    completionRate: 87,
    averageGrade: 'A-'
  };

  const filterAssignments = () => {
    if (activeTab === 'all') return assignments;
    if (activeTab === 'pending') return assignments.filter(a => a.status === 'pending');
    if (activeTab === 'submitted') return assignments.filter(a => a.status === 'graded');
    if (activeTab === 'completed') return assignments.filter(a => a.status === 'graded');
    return assignments;
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>My Assignments</h1>
          <p className={styles.subtitle}>Track and submit your course assignments</p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button
              onClick={() => setActiveTab('all')}
              className={`${styles.tab} ${activeTab === 'all' ? styles.tabActive : styles.tabInactive}`}
            >
              All (8)
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`${styles.tab} ${activeTab === 'pending' ? styles.tabActive : styles.tabInactive}`}
            >
              Pending (5)
            </button>
            <button
              onClick={() => setActiveTab('submitted')}
              className={`${styles.tab} ${activeTab === 'submitted' ? styles.tabActive : styles.tabInactive}`}
            >
              Submitted (2)
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`${styles.tab} ${activeTab === 'completed' ? styles.tabActive : styles.tabInactive}`}
            >
              Completed (1)
            </button>
          </div>

          <div className={styles.sortContainer}>
            <span className={styles.sortLabel}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="due">Due</option>
              <option value="weight">Weight</option>
              <option value="course">Course</option>
            </select>
          </div>
        </div>

        {/* Assignment Cards */}
        <div className={styles.assignmentsList}>
          {filterAssignments().map((assignment) => (
            <div
              key={assignment.id}
              className={`${styles.assignmentCard} ${styles['card' + assignment.color.charAt(0).toUpperCase() + assignment.color.slice(1)]}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardLeft}>
                  <div className={`${styles.iconContainer} ${styles['icon' + assignment.color.charAt(0).toUpperCase() + assignment.color.slice(1)]}`}>
                    {assignment.icon}
                  </div>
                  
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{assignment.title}</h3>
                    <p className={styles.cardDescription}>
                      {assignment.course} • {assignment.description}
                    </p>
                    <div className={styles.cardMeta}>
                      <span className={styles.metaItem}>
                        📅 Due: {assignment.dueDate}
                      </span>
                      {assignment.weight && (
                        <span className={styles.metaItem}>
                          📊 Weight: {assignment.weight}
                        </span>
                      )}
                      {assignment.grade && (
                        <span className={`${styles.metaItem} ${styles.gradeText}`}>
                          Grade: {assignment.grade}
                        </span>
                      )}
                    </div>
                    {assignment.submitDate && (
                      <p className={styles.submittedText}>
                        ✓ Submitted on {assignment.submitDate}
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.cardActions}>
                  {assignment.status === 'pending' && assignment.urgent && (
                    <>
                      <button className={`${styles.actionButton} ${styles.buttonRed}`}>
                        Submit Now
                      </button>
                      <span className={`${styles.statusBadge} ${styles.statusRed}`}>
                        ⚠️ Due Today
                      </span>
                    </>
                  )}
                  {assignment.status === 'pending' && !assignment.urgent && (
                    <>
                      <button className={`${styles.actionButton} ${styles.buttonOrange}`}>
                        Start Now
                      </button>
                      <span className={`${styles.statusBadge} ${styles.statusOrange}`}>
                        Due Tomorrow
                      </span>
                    </>
                  )}
                  {assignment.status === 'draft' && (
                    <>
                      <button className={`${styles.actionButton} ${styles.buttonBlue}`}>
                        Continue
                      </button>
                      <span className={`${styles.statusBadge} ${styles.statusBlue}`}>
                        💾 Draft Saved
                      </span>
                    </>
                  )}
                  {assignment.status === 'graded' && (
                    <>
                      <button className={`${styles.actionButton} ${styles.buttonGray}`}>
                        View
                      </button>
                      <span className={`${styles.statusBadge} ${styles.statusGreen}`}>
                        ✓ Graded
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Total Assignments</p>
            <p className={`${styles.statValue} ${styles.statGray}`}>{stats.total}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Pending</p>
            <p className={`${styles.statValue} ${styles.statOrange}`}>{stats.pending}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Completion Rate</p>
            <p className={`${styles.statValue} ${styles.statGreen}`}>{stats.completionRate}%</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Average Grade</p>
            <p className={`${styles.statValue} ${styles.statBlue}`}>{stats.averageGrade}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;