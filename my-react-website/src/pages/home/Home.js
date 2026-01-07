import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // داده‌های مهارت‌ها به صورت گروه‌بندی شده
  const skillsData = [
    // اسلاید ۱
    [
      {
        id: 1,
        icon: 'bi bi-cpu-fill',
        title: 'React Development',
        description: 'Building modern and reactive applications with React.js'
      },
      {
        id: 2,
        icon: 'bi bi-palette-fill',
        title: 'UI/UX Design',
        description: 'Creating beautiful and user-friendly interface designs'
      }
    ],
    // اسلاید ۲
    [
      {
        id: 3,
        icon: 'bi bi-speedometer2',
        title: 'Web Performance',
        description: 'Optimizing website speed and overall performance'
      },
      {
        id: 4,
        icon: 'bi bi-robot',
        title: 'AI Integration',
        description: 'Implementing AI-powered features and tools'
      }
    ],
    // اسلاید ۳ (می‌توانید مهارت‌های بیشتری اضافه کنید)
    [
      {
        id: 5,
        icon: 'bi bi-code-slash',
        title: 'JavaScript/TypeScript',
        description: 'Modern JavaScript and TypeScript development'
      },
      {
        id: 6,
        icon: 'bi bi-bootstrap-fill',
        title: 'CSS Frameworks',
        description: 'Tailwind CSS, Bootstrap, and modern CSS'
      }
    ]
  ];

  // تابع برای تغییر اسلاید
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillsData.length);
  };

  // تابع برای رفتن به اسلاید خاص
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // تنظیم تایمر اتوماتیک
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // تغییر هر ۳ ثانیه

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // توقف تایمر وقتی موس روی اسلاید است
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // شروع مجدد تایمر وقتی موس خارج می‌شود
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  return (
    <div className={styles.home}>
      {/* ویدیو بک‌گراند */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/moon.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay برای خوانایی متن */}
      <div className={styles.videoOverlay}></div>
      
      {/* بخش Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroGreeting}>Hello, I'm Kuroosh</p>
          <h1 className={styles.heroTitle}>
            Frontend 
            <span className={styles.accent}> Developer</span>
          </h1>
          <p className={styles.heroDescription}>
            I'm a passionate frontend developer who loves creating beautiful 
            and functional digital experiences. My expertise lies in React 
            and modern web design.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/portfolio" className={`${styles.btn} ${styles.btnPrimary}`}>
              View Projects
            </Link>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* بخش مهارت‌های اسلایدی */}
      <section 
        className={styles.skillsSection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className={styles.sectionTitle}>My Skills</h2>
        
        <div className={styles.skillsSliderContainer}>
          <div 
            className={styles.skillsSlider}
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {skillsData.map((slide, slideIndex) => (
              <div key={slideIndex} className={styles.skillsSlide}>
                {slide.map((skill) => (
                  <div key={skill.id} className={styles.skillCard}>
                    <div className={styles.skillIcon}>
                      <i className={skill.icon}></i>
                    </div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* نقاط ناوبری */}
        <div className={styles.sliderNav}>
          {skillsData.map((_, index) => (
            <div
              key={index}
              className={`${styles.sliderDot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;