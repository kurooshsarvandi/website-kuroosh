import React, { useEffect,useState } from "react";
import styles from "./About.module.css";

export default function About() {
    const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 300);
  }, []);


  return (
    <div className={styles.aboutPage}>
      
      {/* عکس floating سوم - پایین سمت راست */}
      <div className={`${styles.floatingImage} ${styles.bottomRight} ${styles.sizeLarge}`}>
        <img src="laptop.png" alt="Code Visualization" />
      </div>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* MAIN ABOUT SECTION */}
      <section className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <img src="" alt="Frontend Developer working" />
        </div>

        <div className={styles.aboutText}>
          <h3>About Me</h3>
          <h2>Crafting Digital Experiences with Code & AI</h2>
          <p>
            I'm a passionate Frontend Developer with expertise in React and modern web technologies. 
            With over 3 years of experience, I specialize in building responsive, performant, and 
            user-friendly web applications. My unique edge comes from combining traditional development 
            with AI-powered tools to create innovative solutions.
          </p>
          <p>
            Beyond just writing code, I focus on creating intuitive user experiences, optimizing 
            performance, and implementing cutting-edge AI features that enhance functionality and 
            user engagement.
          </p>
          <a href="https://www.linkedin.com/in/kuroosh-sarvandi-216500247/">
  <button className={styles.btnPrimary}>Get In Touch</button>
</a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className={styles.skills}>
        <h2>Technical Expertise</h2>
        <p>
          A blend of traditional development skills and modern AI integration capabilities
        </p>

        <div className={styles.skillBars}>
          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <span>React & Next.js</span>
              <span>70%</span>
            </div>
            <div className={styles.bar}>
              <div
               className={styles.progress}
                  style={{ width: start ? "70%" : "0%" }}
              ></div>

            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <span>AI Integration</span>
              <span>50%</span>
            </div>
            <div className={styles.bar}>
              <div
                className={styles.progress}
                  style={{ width: start ? "50%" : "0%" }}
              ></div>

            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <span>UI/UX Design</span>
              <span>85%</span>
            </div>
            <div className={styles.bar}>
              <div
                  className={styles.progress}
                  style={{ width: start ? "85%" : "0%" }}
               ></div>

            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <span>Performance Optimization</span>
              <span>90%</span>
            </div>
            <div className={styles.bar}>
             <div
              className={styles.progress}
               style={{ width: start ? "90%" : "0%" }}
            ></div>

            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statBox}>
            <strong>8</strong>
            <p>Projects Completed</p>
          </div>
          <div className={styles.statBox}>
            <strong>1</strong>
            <p>Years Experience</p>
          </div>
          <div className={styles.statBox}>
            <strong>100%</strong>
            <p>Client Satisfaction</p>
          </div>
          <div className={styles.statBox}>
            <strong>10</strong>
            <p>AI Tools Mastered</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h3>Let's Build Together</h3>
          <h2>Ready to Transform Your Ideas into Intelligent Web Solutions</h2>
          <p>
            Whether you need a modern web application, AI integration, or performance optimization, 
            I'm here to bring your vision to life with clean code and innovative solutions.
          </p>
          <button className={styles.btnPrimary}>Start a Project</button>
        </div>
      </section>
    </div>
  );
}