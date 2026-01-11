//Settings.jsx

import React, { useState } from 'react';
import styles from "./Settings.module.css";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(false);

  return (
    <div className={styles.settingsPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Manage your account preferences</p>
      </div>

      {/* Profile Section */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>Profile Information</h3>
          <button className={styles.saveBtn}>Save Changes</button>
        </div>

        <div className={styles.profileSection}>
          <div className={styles.avatar}>
            <span>JS</span>
            <button className={styles.changePhoto}>Change Photo</button>
          </div>

          <div className={styles.formGrid}>
            <div>
              <label>Full Name</label>
              <input type="text" defaultValue="Jyoti Shah" />
            </div>

            <div>
              <label>Email Address</label>
              <input type="email" defaultValue="jyotishah@email.com" />
            </div>

            <div>
              <label>Student ID</label>
              <input type="text" defaultValue="STU-2024-001234" readOnly />
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className={styles.card}>
        <h3>Notifications</h3>

        <div className={styles.toggleRow}>
          <div>
            <h4>Email Notifications</h4>
            <p>Receive updates about assignments and courses</p>
          </div>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.toggleRow}>
          <div>
            <h4>Push Notifications</h4>
            <p>Get notified about live meetings and deadlines</p>
          </div>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={pushNotifications}
              onChange={(e) => setPushNotifications(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      {/* Language Preferences */}
      <div className={styles.card}>
        <h3>Language Preferences</h3>

        <div className={styles.languageGrid}>
          <div>
            <label>Interface Language</label>
            <select>
              <option>🌐 English</option>
              <option>🌐 Hindi</option>
              <option>🌐 Spanish</option>
            </select>
          </div>

          <div>
            <label>Default Caption Language</label>
            <select>
              <option>💬 Spanish</option>
              <option>💬 English</option>
              <option>💬 Hindi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Privacy & Actions */}
      <div className={styles.bottomGrid}>
        <div className={styles.card}>
          <h3>Privacy</h3>
          <div className={styles.toggleRow}>
            <span>Profile Visibility</span>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={profileVisibility}
                onChange={(e) => setProfileVisibility(e.target.checked)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Account Actions</h3>
          <div className={styles.actions}>
            <button className={styles.passwordBtn}>Change Password</button>
            <button className={styles.logoutBtn}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;