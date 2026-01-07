// src/pages/Projects/subpages/Overview/Overview.js
import React from 'react';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.heroSection}>
        <h2 className={styles.heroTitle}>Professional Summary</h2>
        <p className={styles.heroText}>
          Welcome to my portfolio hub. Here you can explore my projects, 
          certifications, and technical articles. Each section provides 
          detailed insights into my skills and experience.
        </p>
      </div>

      <div className={styles.quickStats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>20+</div>
          <div className={styles.statLabel}>Projects Completed</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>5+</div>
          <div className={styles.statLabel}>Certifications</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>Articles Written</div>
        </div>
      </div>

      <div className={styles.sectionsGuide}>
        <h3 className={styles.guideTitle}>What You'll Find Here</h3>
        <div className={styles.guideGrid}>
          <div className={styles.guideCard}>
            <div className={styles.guideIcon}>💼</div>
            <h4>Projects</h4>
            <p>Detailed case studies of my web development projects with code samples and live demos.</p>
          </div>
          <div className={styles.guideCard}>
            <div className={styles.guideIcon}>🏆</div>
            <h4>Certifications</h4>
            <p>Official certifications and completed courses that validate my technical skills.</p>
          </div>
          <div className={styles.guideCard}>
            <div className={styles.guideIcon}>📝</div>
            <h4>Technical Blog</h4>
            <p>Articles, tutorials, and insights about modern web development technologies.</p>
          </div>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          Start exploring by selecting a section from the sidebar →
        </p>
      </div>
    </div>
  );
};

export default Overview;