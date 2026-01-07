// src/pages/projects/Projects.js
import React, { useState } from 'react';
import styles from './Projects.module.css';

// فقط Overview را import کن (بقیه بعداً)
import Overview from './subpages/Overview/Overview';
import Certifications from './subpages/Certifications/Certifications';
import Articles from './subpages/Articles/Articles';
import ProjectsList from './subpages/ProjectsList/ProjectsList';
const Projects = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // فقط تب‌های موجود را تعریف کن
  const tabs = [
  { id: 'overview', label: 'Overview', icon: 'bi-bar-chart-line', component: <Overview /> },
  { id: 'projects', label: 'Projects', icon: 'bi-code-square', component: <ProjectsList /> },
  { id: 'certifications', label: 'Certifications', icon: 'bi-award', component: <Certifications /> },
  { id: 'articles', label: 'Articles', icon: 'bi-pencil-square', component: <Articles /> }
];
  
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className={styles.projectsPage}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>My Portfolio</h1>
        <p className={styles.pageSubtitle}>Explore my work and achievements</p>
      </header>

      <div className={styles.tabsSidebar}>
        <nav className={styles.tabsNavigation}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
               className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                    > 
              <span 
                className={styles.tabIcon}
                   dangerouslySetInnerHTML={{ 
                    __html: `<i class="bi ${tab.icon}"></i>` 
          }}
                  />
               <span className={styles.tabLabel}>{tab.label}</span>
                {activeTab === tab.id && <div className={styles.activeGlow}></div>}
             </button>

             
          ))}
        </nav>
        
        <div className={styles.sidebarFooter}>
          <p>Select a section to view details</p>
        </div>
      </div>

      <main className={styles.tabContent}>
        <div className={styles.contentContainer}>
          {ActiveComponent}
        </div>
      </main>
    </div>
  );
};

export default Projects;