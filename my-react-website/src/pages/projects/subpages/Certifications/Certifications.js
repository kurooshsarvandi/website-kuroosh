// src/pages/projects/subpages/Certifications/Certifications.js
import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  // داده‌های گواهینامه‌ها - می‌توانید با داده‌های واقعی خود جایگزین کنید
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2023",
      credentialId: "AWS-DEV-2023-12345",
      verificationLink: "https://www.credly.com/badges/aws-certified-developer",
      skills: ["Cloud Computing", "AWS Lambda", "DynamoDB", "API Gateway", "Serverless"],
      icon: "bi-cloud-check",
      level: "Associate",
      description: "Validates ability to develop and maintain applications on the AWS platform."
    },
    {
      id: 2,
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      date: "2023",
      credentialId: "METAFE-2023-67890",
      verificationLink: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX", "Version Control"],
      icon: "bi-code-slash",
      level: "Professional",
      description: "Comprehensive front-end development program covering modern web technologies."
    },
    {
      id: 3,
      title: "Google UX Design Professional Certificate",
      issuer: "Google (Coursera)",
      date: "2022",
      credentialId: "GOOGLE-UX-2022-54321",
      verificationLink: "https://www.coursera.org/professional-certificates/google-ux-design",
      skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Usability Testing"],
      icon: "bi-palette",
      level: "Professional",
      description: "End-to-end UX design process from user research to high-fidelity prototypes."
    },
    {
      id: 4,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-900-2022-98765",
      verificationLink: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Pricing", "Support"],
      icon: "bi-microsoft",
      level: "Fundamentals",
      description: "Foundational knowledge of cloud services and how those services are provided with Azure."
    },
    {
      id: 5,
      title: "Scrum Master Certified (SMC)",
      issuer: "Scrum.org",
      date: "2021",
      credentialId: "SMC-2021-43210",
      verificationLink: "https://www.scrum.org/certificates/43210",
      skills: ["Agile Methodology", "Scrum Framework", "Team Leadership", "Project Management"],
      icon: "bi-diagram-3",
      level: "Professional",
      description: "Demonstrates understanding of the Scrum framework and ability to facilitate Scrum teams."
    }
  ];

  // گروه‌بندی گواهینامه‌ها بر اساس سال (جدیدترین اول)
  const groupByYear = certifications.reduce((groups, cert) => {
    const year = cert.date;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(cert);
    return groups;
  }, {});

  // سال‌ها را به ترتیب نزولی مرتب کن (جدیدترین اول)
  const years = Object.keys(groupByYear).sort((a, b) => b - a);

  // محاسبه آمار
  const totalCerts = certifications.length;
  const uniqueSkills = [...new Set(certifications.flatMap(cert => cert.skills))].length;
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - Math.min(...certifications.map(c => parseInt(c.date))) + 1;

  return (
    <div className={styles.certifications}>
      {/* هدر صفحه */}
      <header className={styles.certHeader}>
        <h2 className={styles.sectionTitle}>Professional Certifications</h2>
        <p className={styles.sectionSubtitle}>
          Validated expertise and continuous learning journey
        </p>
        
        {/* توضیح مختصر */}
        <div className={styles.introText}>
          <p>
            These certifications validate my technical skills and commitment to professional development. 
            Each represents mastery of specific technologies and methodologies in modern software development.
          </p>
        </div>
      </header>

      {/* بخش آمار */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{totalCerts}</div>
          <div className={styles.statLabel}>Total Certifications</div>
          <div className={styles.statDescription}>Across multiple platforms and technologies</div>
        </div>
        
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{yearsActive}</div>
          <div className={styles.statLabel}>Years Active</div>
          <div className={styles.statDescription}>Continuous learning since {Math.min(...certifications.map(c => c.date))}</div>
        </div>
        
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{uniqueSkills}</div>
          <div className={styles.statLabel}>Unique Skills</div>
          <div className={styles.statDescription}>Validated technical competencies</div>
        </div>
        
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{years.length}</div>
          <div className={styles.statLabel}>Active Years</div>
          <div className={styles.statDescription}>Consistent annual achievement</div>
        </div>
      </div>

      {/* Timeline گواهینامه‌ها */}
      <div className={styles.certTimeline}>
        {years.map(year => (
          <div key={year} className={styles.yearGroup}>
            {/* عنوان سال */}
            <div className={styles.yearHeader}>
              <h3 className={styles.yearTitle}>{year}</h3>
              <span className={styles.yearCount}>
                {groupByYear[year].length} certification{groupByYear[year].length > 1 ? 's' : ''}
              </span>
            </div>
            
            {/* کارت‌های گواهینامه این سال */}
            <div className={styles.certCards}>
              {groupByYear[year].map(cert => (
                <div key={cert.id} className={styles.certCard}>
                  {/* آیکون و بج level */}
                  <div className={styles.certIconContainer}>
                    <div className={styles.certIcon}>
                      <i className={`bi ${cert.icon}`}></i>
                    </div>
                    {cert.level && (
                      <span className={`${styles.levelBadge} ${styles[`level${cert.level}`]}`}>
                        {cert.level}
                      </span>
                    )}
                  </div>
                  
                  {/* محتوای کارت */}
                  <div className={styles.certContent}>
                    {/* عنوان و تاریخ */}
                    <div className={styles.certHeaderRow}>
                      <div>
                        <h4 className={styles.certTitle}>{cert.title}</h4>
                        <p className={styles.certIssuer}>
                          <i className="bi bi-building"></i> {cert.issuer}
                        </p>
                      </div>
                      <span className={styles.certDate}>{cert.date}</span>
                    </div>
                    
                    {/* توضیحات */}
                    {cert.description && (
                      <p className={styles.certDescription}>{cert.description}</p>
                    )}
                    
                    {/* مهارت‌ها */}
                    <div className={styles.certSkills}>
                      <span className={styles.skillsLabel}>Skills Validated:</span>
                      <div className={styles.skillsList}>
                        {cert.skills.map(skill => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* فوتر با لینک تأیید */}
                    <div className={styles.certFooter}>
                      <div className={styles.credentialInfo}>
                        <span className={styles.credentialId}>
                          <i className="bi bi-card-text"></i> ID: {cert.credentialId}
                        </span>
                      </div>
                      
                      <a 
                        href={cert.verificationLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.verifyLink}
                      >
                        <i className="bi bi-shield-check"></i> Verify Certification
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* بخش CTA یا توضیح پایانی */}
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Continuous Learning & Development</h3>
        <p className={styles.ctaText}>
          I believe in the importance of continuous learning in the fast-evolving tech industry. 
          These certifications are not just credentials, but milestones in my ongoing journey to 
          stay current with best practices and emerging technologies.
        </p>
        
        <div className={styles.ctaActions}>
          <button className={styles.ctaButton}>
            <i className="bi bi-download"></i> Download Certificates
          </button>
          <button className={styles.secondaryButton}>
            <i className="bi bi-envelope"></i> Request Verification
          </button>
        </div>
      </div>

      {/* نکات پایانی */}
      <div className={styles.footerNotes}>
        <div className={styles.note}>
          <i className="bi bi-info-circle"></i>
          <p>All certifications are publicly verifiable through the provided links.</p>
        </div>
        <div className={styles.note}>
          <i className="bi bi-calendar-check"></i>
          <p>Most certifications require periodic renewal to ensure knowledge remains current.</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;