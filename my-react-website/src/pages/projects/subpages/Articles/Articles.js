// src/pages/projects/subpages/Articles/Articles.js
import React, { useState } from 'react';
import styles from './Articles.module.css';

const Articles = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  
  const articles = [
    {
      id: 1,
      title: "Advanced React Performance Optimization",
      excerpt: "Deep dive into React.memo, useMemo, and useCallback with practical examples",
      topic: "react",
      readTime: "8 min read",
      date: "2023-11-15",
      views: 1245,
      likes: 89,
      externalLink: "https://dev.to/your-article",
      tags: ["React", "Performance", "Hooks", "Best Practices"]
    },
    {
      id: 2,
      title: "Building Scalable CSS Architecture",
      excerpt: "How to structure CSS for large-scale React applications",
      topic: "css",
      readTime: "6 min read",
      date: "2023-10-22",
      views: 892,
      likes: 64,
      externalLink: "https://css-tricks.com/your-article",
      tags: ["CSS", "Architecture", "Scalability", "Design Systems"]
    },
    // ... حداقل ۶-۸ مقاله
  ];
  
  const topics = ['all', 'react', 'javascript', 'css', 'webdev', 'tutorial'];
  
  const filteredArticles = selectedTopic === 'all' 
    ? articles 
    : articles.filter(article => article.topic === selectedTopic);
  
  // مرتب‌سازی بر اساس تاریخ (جدیدترین اول)
  const sortedArticles = [...filteredArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  return (
    <div className={styles.articles}>
      <header className={styles.articlesHeader}>
        <h2 className={styles.sectionTitle}>Technical Writing</h2>
        <p className={styles.sectionSubtitle}>
          Sharing knowledge and insights from my development journey
        </p>
        
        {/* فیلتر موضوعات */}
        <div className={styles.topicFilters}>
          {topics.map(topic => (
            <button
              key={topic}
              className={`${styles.topicBtn} ${selectedTopic === topic ? styles.activeTopic : ''}`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic === 'all' ? 'All Topics' : topic}
            </button>
          ))}
        </div>
      </header>
      
      {/* لیست مقالات */}
      <div className={styles.articlesList}>
        {sortedArticles.map(article => (
          <article key={article.id} className={styles.articleCard}>
            <div className={styles.articleMeta}>
              <span className={styles.articleTopic}>{article.topic}</span>
              <span className={styles.articleDate}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>
                <a 
                  href={article.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </h3>
              
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              
              <div className={styles.articleTags}>
                {article.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.articleFooter}>
                <div className={styles.articleStats}>
                  <span className={styles.stat}>
                    <i className="bi bi-clock"></i> {article.readTime}
                  </span>
                  <span className={styles.stat}>
                    <i className="bi bi-eye"></i> {article.views.toLocaleString()}
                  </span>
                  <span className={styles.stat}>
                    <i className="bi bi-heart"></i> {article.likes}
                  </span>
                </div>
                
                <a 
                  href={article.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMoreLink}
                >
                  Read Full Article <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* اگر مقاله‌ای نبود */}
      {sortedArticles.length === 0 && (
        <div className={styles.noArticles}>
          <i className="bi bi-pencil-square" style={{fontSize: '3rem', marginBottom: '1rem'}}></i>
          <h3>No articles in this category</h3>
          <p>Check back soon or browse other topics</p>
        </div>
      )}
      
      {/* CTA برای نوشتن بیشتر */}
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Want to collaborate or suggest a topic?</h3>
        <p className={styles.ctaText}>
          I'm always open to writing about interesting technical challenges.
        </p>
        <button className={styles.ctaButton}>
          <i className="bi bi-envelope"></i> Suggest a Topic
        </button>
      </div>
    </div>
  );
};

export default Articles;