// src/pages/projects/subpages/ProjectsList/ProjectsList.js
import React, { useState } from 'react';
import styles from './ProjectsList.module.css';

const ProjectsList = () => {
  // state برای فیلتر کردن پروژه‌ها
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // داده‌های نمونه پروژه‌ها
  const [projects] = useState([
    {
      id: 1,
      title: "Weather Application",
      description: "A modern Weather Application built with React and Vite, styled with Tailwind CSS. This project focuses on learning React Hooks (useState, useEffect), API integration, and responsive UI design.",
      category: "react",
      technologies: ["React 18", "Vite", "Tailwind CSS v4", "React Icons"],
      demoLink: "https://kuroosh-weather.vercel.app/",
      githubLink: "https://github.com/kurooshsarvandi/Weather-Application",
      image: "image/webp_converted/weather.webp",
      featured: true
    },
    // ... حداقل ۵-۶ پروژه دیگر
  

  
    {
      id: 2,
      title: " Cafe Rizvan  ",
      description: "Cafe Rizvan is a fully responsive, modern coffee shop website built with React.js, featuring elegant glass-morphism design and interactive user experiences. This project showcases professional web development skills with a focus on user engagement and aesthetic appeal.",
      category: "react",
      technologies: ["React 18", "JavaScript (ES6+)", "CSS3", "React Icons"],
      demoLink: "https://https://cofe-rizhvan.vercel.app/",
      githubLink: "https://github.com/kurooshsarvandi/cofe-shop",
      image: "image/webp_converted/cofe.webp",
      featured: true
    },
   
    {
      id: 2,
      title: "chatbot",
      description: "a professional chat bot i write with JavaScript and React and Vite",
      category: "react",
      technologies: ["React 18", "JavaScript (ES6+)", "CSS3", "Vite"],
      githubLink: "https://github.com/kurooshsarvandi/chatbot",
      image: "image/webp_converted/cofe.webp",
      featured: true
    },
]);
  // فیلتر کردن پروژه‌ها
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => 
                           tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  // دسته‌بندی‌های منحصر به فرد
  const categories = ['all', 'react', 'javascript', 'fullstack', 'ui/ux'];
  
  return (
    <div className={styles.projectsList}>
      {/* هدر با قابلیت جستجو و فیلتر */}
      <header className={styles.projectsHeader}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>
          Interactive showcase of my development work
        </p>
        
        {/* نوار جستجو */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search projects or technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        
        {/* فیلترهای دسته‌بندی */}
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${filter === category ? styles.activeFilter : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>
      </header>
      
      {/* نمایش پروژه‌ها */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            {/* کارت پروژه با تمام جزئیات */}
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
              {project.featured && (
                <span className={styles.featuredBadge}>Featured</span>
              )}
            </div>
            
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>
              
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.technologies.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                <a
                 href={project.demoLink} 
                 className={styles.demoLink}
                 target="_blank" 
                 rel="noopener noreferrer"
                 >
                  <i className="bi bi-play-circle"></i> Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  className={styles.githubLink}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* اگر پروژه‌ای نبود */}
      {filteredProjects.length === 0 && (
        <div className={styles.noResults}>
          <i className="bi bi-search" style={{fontSize: '3rem', marginBottom: '1rem'}}></i>
          <h3>No projects found</h3>
          <p>Try a different search term or filter</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;