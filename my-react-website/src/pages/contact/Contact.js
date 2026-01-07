import React from "react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactWrapper}>
      {/* --- هدر صفحه --- */}
      <header className={styles.contactHeader}>
        <h1>Get In Touch</h1>
        <p className={styles.pageSubtitle}>
          Ready to collaborate or have questions? Reach out through any platform below.
        </p>
      </header>

      {/* --- محتوای اصلی --- */}
      <section className={styles.contactContainer}>
        {/* فرم سمت چپ */}
        <div className={styles.contactForm}>
          <h3>Direct Message</h3>
          <h2>Send Me A Message</h2>

          <input type="text" placeholder="Your Name..." />
          <input type="email" placeholder="Your Email..." />
          <input type="text" placeholder="Subject..." />
          <textarea placeholder="Your message here..."></textarea>

          <button className={styles.sendButton}>
            <i className="bi bi-send"></i> Send Message
          </button>
        </div>

        {/* اطلاعات سمت راست */}
        <div className={styles.contactInfo}>
          <p className={styles.infoText}>
            I'm always open to discussing new opportunities, creative projects, 
            or just having a friendly chat about technology and development. 
            Feel free to connect with me on any of these platforms.
          </p>

          {/* گرید شبکه‌های اجتماعی */}
          <div className={styles.infoGrid}>
            {/* ایمیل */}
            <div className={styles.infoBox}>
              <i className="bi bi-envelope"></i>
              <h4>Email</h4>
              <p>kuroosh@example.com</p>
              <a href="kurooshdsarvandi@gmail.com" className={styles.contactLink}>
                Send Email <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* لینکدین */}
            <div className={styles.infoBox}>
              <i className="bi bi-linkedin"></i>
              <h4>LinkedIn</h4>
              <p>Professional Network</p>
              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Connect <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* اینستاگرام */}
            <div className={styles.infoBox}>
              <i className="bi bi-instagram"></i>
              <h4>Instagram</h4>
              <p>@kuroosh_dev</p>
              <a 
                href="https://www.instagram.com/kuroosh.sarvandi7/?next=" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Follow <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* تلگرام */}
            <div className={styles.infoBox}>
              <i className="bi bi-telegram"></i>
              <h4>Telegram</h4>
              <p>@kuroosh_dev</p>
              <a 
                href="@Kuroosh1996" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Message <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* گیت‌هاب */}
            <div className={styles.infoBox}>
              <i className="bi bi-github"></i>
              <h4>GitHub</h4>
              <p>Code & Projects</p>
              <a 
                href="https://github.com/kurooshsarvandi" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                View Code <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* توییتر/ایکس */}
            <div className={styles.infoBox}>
              <i className="bi bi-twitter"></i>
              <h4>Twitter/X</h4>
              <p>@kuroosh_dev</p>
              <a 
                href="https://twitter.com/kuroosh_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Follow <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* بخش ساعات پاسخگویی */}
          <div className={styles.responseTime}>
            <h3 className={styles.responseTitle}>
              <i className="bi bi-clock"></i> Response Time
            </h3>
            <p className={styles.responseText}>
              I typically respond within <strong>24-48 hours</strong> on weekdays. 
              For urgent matters, LinkedIn or Telegram usually get the fastest responses.
            </p>
          </div>
        </div>
      </section>

      {/* --- بنر پایین --- */}
      <section className={styles.bottomBanner}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <p>Let's Work Together</p>
          <h1>Have A Project In Mind? Let's Bring Your Vision To Life</h1>
          <button className={styles.bannerBtn}>
            <i className="bi bi-calendar-check"></i> Schedule A Call
          </button>
        </div>
      </section>
    </div>
  );
}