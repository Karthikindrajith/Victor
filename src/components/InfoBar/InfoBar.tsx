import styles from "./InfoBar.module.css";

export default function InfoBar() {
  return (
    <section className={styles.infoBar}>
      <div className={styles.infoContainer}>

        {/* Mass Timings */}
        <div className={styles.infoItem}>
          <div className={styles.icon}>✦</div>

          <div>
            <span className={styles.label}>HOLY MASS</span>
            <p>Daily Mass Timings</p>
          
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Pilgrimage */}
        <div className={styles.infoItem}>
          <div className={styles.icon}>✧</div>

          <div>
            <span className={styles.label}>PILGRIMAGE</span>
            <p>Visit the Basilica</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Prayer */}
        <div className={styles.infoItem}>
          <div className={styles.icon}>✦</div>

          <div>
            <span className={styles.label}>PRAYER</span>
            <p>Submit Your Prayer</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Contact */}
        <div className={styles.infoItem}>
          <div className={styles.icon}>✧</div>

          <div>
            <span className={styles.label}>CONTACT</span>
            <p>Get in Touch With Us</p>
          </div>
        </div>

        {/* Visit Button */}
        <a href="#contact" className={styles.visitButton}>
          PLAN YOUR VISIT
          <span>→</span>
        </a>

      </div>
    </section>
  );
}